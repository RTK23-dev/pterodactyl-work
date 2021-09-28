import React, { memo, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthernet, faHdd, faMemory, faMicrochip, faServer, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Server } from '@/api/server/getServer';
import getServerResourceUsage, { ServerPowerState, ServerStats } from '@/api/server/getServerResourceUsage';
import { bytesToHuman, megabytesToHuman } from '@/helpers';
import tw, { TwStyle } from 'twin.macro';
import GreyRowBox from '@/components/elements/GreyRowBox';
import Spinner from '@/components/elements/Spinner';
import styled from 'styled-components/macro';
import isEqual from 'react-fast-compare';
import CopyOnClick from '@/components/elements/CopyOnClick';
import { ServerContext } from '@/state/server';
import { SocketEvent, SocketRequest } from '@/components/server/events';


const isAlarmState = (current: number, limit: number): boolean => limit > 0 && (current / (limit * 1024 * 1024) >= 0.90);

const Icon = memo(styled(FontAwesomeIcon) <{ $alarm: boolean }>`
    ${props => props.$alarm ? tw`text-red-400` : tw`text-white`};
`, isEqual);

const IconDescription = styled.p<{ $alarm: boolean }>`
    ${tw`text-sm ml-2`};
    ${props => props.$alarm ? tw`text-white` : tw`text-white`};
`;

const StatusIndicatorBox = styled(GreyRowBox) <{ $status: ServerPowerState | undefined }>`
        width: 100%;
        margin-left: 0 auto;
        height: 15rem !important;
        display: inline-block;
        text-align: center;

        @media only screen and (max-width: 1125px) {
          width: 100% !important;
          margin-left: 0 auto !important;
        }

    & .status-bar {
        ${tw`bg-red-500 w-4 h-4 rounded-full transition-all duration-150`};

        ${({ $status }) => (!$status || $status === 'offline') ? tw`bg-red-910` : ($status === 'running' ? tw`bg-green-910` : tw`bg-yellow-910`)};
    }
`;

export default ({ server, className }: { server: Server; className?: string }) => {
  const interval = useRef<number>(null);
  const [isSuspended, setIsSuspended] = useState(server.status === 'suspended');
  const [stats, setStats] = useState<ServerStats | null>(null);

  const getStats = () => getServerResourceUsage(server.uuid)
    .then(data => setStats(data))
    .catch(error => console.error(error));

  useEffect(() => {
    setIsSuspended(stats ?.isSuspended || server.status === 'suspended');
  }, [stats ?.isSuspended, server.status]);

  useEffect(() => {
    
    if (isSuspended) return;

    getStats().then(() => {
      // @ts-ignore
      interval.current = setInterval(() => getStats(), 30000);
    });

    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, [isSuspended]);

  const alarms = { cpu: false, memory: false, disk: false };
  if (stats) {
    alarms.cpu = server.limits.cpu === 0 ? false : (stats.cpuUsagePercent >= (server.limits.cpu * 0.9));
    alarms.memory = isAlarmState(stats.memoryUsageInBytes, server.limits.memory);
    alarms.disk = server.limits.disk === 0 ? false : isAlarmState(stats.diskUsageInBytes, server.limits.disk);
  }

  const diskLimit = server.limits.disk !== 0 ? megabytesToHuman(server.limits.disk) : 'Unlimited';
  const memoryLimit = server.limits.memory !== 0 ? megabytesToHuman(server.limits.memory) : 'Unlimited';

  return (
    <StatusIndicatorBox as={Link} to={`/server/${server.id}`} className={className} $status={stats ?.status}>
      <div css={tw`flex justify-end`} className='status-bar' />
      <div css={tw`h-8 flex items-center justify-center`}>
        <div>
          <p css={tw`text-center text-lg break-words`}>{server.name}</p>
          {!!server.description &&
            <p css={tw`text-center text-sm text-white break-words`}>{server.description}</p>
          }
        </div>
      </div>
      <div css={tw`col-span-7 lg:col-span-4 sm:flex items-baseline justify-start`}>
        {(!stats || isSuspended) ?
          isSuspended ?
            <div css={tw`mt-2 flex-1 text-center`}>
              <span css={tw`bg-red-500 rounded px-2 py-1 text-red-100 text-xs`}>
                {server.status === 'suspended' ? 'Suspended' : 'Connection Error'}
              </span>
            </div>
            :
            (server.isTransferring || server.status) ?
              <div css={tw`mt-2 flex-1 text-center`}>
                <span css={tw`bg-neutral-910 rounded px-2 py-1 text-white text-xs`}>
                  {server.isTransferring ?
                    'Transferring'
                    :
                    server.status === 'installing' ? 'Installing' : (
                      server.status === 'restoring_backup' ?
                        'Restoring Backup'
                        :
                        'Unavailable'
                    )
                  }
                </span>
              </div>
              :
              <div css={tw`flex mt-4 w-full justify-center`}>
                <Spinner size={'small'} />
              </div>
          :
          <React.Fragment>
            <div className="detailsOne" css="margin-top: 2.5rem; position: relative; width: 100%; min-height: 1px; padding-right: 15px; padding-left: 15px; flex: 0 0 50%; max-width: 50%;">
              <div css={tw`flex-1 flex ml-4 justify-start`}>
                <Icon css={tw`text-cyan-700`} icon={faMicrochip} $alarm={alarms.cpu} />
                <IconDescription $alarm={alarms.cpu}>
                  {stats.cpuUsagePercent.toFixed(2)}%
                  </IconDescription>
              </div>
              <div css={tw`flex-1 ml-4 sm:block `}>
                <div css={tw`flex justify-start mt-8`}>
                  <Icon css={tw`text-cyan-700`} icon={faMemory} $alarm={alarms.memory} />
                  <IconDescription $alarm={alarms.memory}>
                    {bytesToHuman(stats.memoryUsageInBytes)}
                    <span css={tw`text-white`}> / {memoryLimit}</span>
                  </IconDescription>
                </div>
              </div>
              <div css={tw`flex-1 ml-4 sm:block `}>
                <div css={tw`flex justify-start mt-8`}>
                  <Icon css={tw`text-cyan-700`} icon={faHdd} $alarm={alarms.disk} />
                  <IconDescription $alarm={alarms.disk}>
                    {bytesToHuman(stats.diskUsageInBytes)}
                    <span css={tw`text-white`}> / {diskLimit}</span>
                  </IconDescription>
                </div>
              </div>
            </div>
            <div className="detailsTwo" css="justify-content: end; margin-top: 2.5rem; position: relative; width: 100%; min-height: 1px; padding-right: 15px; padding-left: 15px; flex: 0 0 50%; max-width: 50%;">
              <div css={tw`flex-1 flex ml-4 sm:flex justify-start`}>
                <span css={tw`text-sm ml-2 text-cyan-700`}>Node: </span><code css={tw`text-sm ml-2 text-white`}>{server.node}</code>
              </div>
              <div css={tw`flex-1 ml-4 sm:block `}>
                <div css={tw`flex justify-start mt-8`}>
                    <span css={tw`text-sm ml-2 text-cyan-700`}>ID: </span><code css={tw`text-sm ml-2 text-white`}>{server.id}</code>
                </div>
              </div>
              <div css={tw`flex-1 ml-4 sm:block`}>
                <div css={tw`flex justify-start mt-8`}>
                  <span css={tw`text-sm ml-2 text-cyan-700`}>IP: </span><code css={tw`text-sm ml-2 text-white`}>{
                      server.allocations.filter(alloc => alloc.isDefault).map(allocation => (
                          <React.Fragment key={allocation.ip + allocation.port.toString()}>
                              {allocation.alias || allocation.ip}:{allocation.port}
                          </React.Fragment>
                      ))
                  }
                  </code>
                </div>
              </div>
            </div>
          </React.Fragment>
        }
      </div>
    </StatusIndicatorBox>
  );
};
