import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faLayerGroup, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useStoreState } from 'easy-peasy';
import { ApplicationStore } from '@/state';
import SearchContainer from '@/components/dashboard/search/SearchContainer';
import tw, { theme } from 'twin.macro';
import styled from 'styled-components/macro';

const Navigation = styled.div`
    ${tw`left-0 w-20 top-0 flex-col fixed bg-neutral-900`};

    & > div {
        ${tw`mx-auto w-full flex items-center`};
    }

    & #logo {
        ${tw`flex-1`};

        & > a {
            ${tw`text-2xl font-header px-4 no-underline text-neutral-200 hover:text-neutral-100 transition-colors duration-150`};
        }
    }
`;

const RightNavigation = styled.div`
    ${tw`h-full w-20 fixed flex flex-col top-0 bg-neutral-900`};

    & > a, & > .navigation-link {
      font-size: 1.5rem;
      color: white;
      line-height: 2rem;
      padding: 15%;
      margin-top: 17.5%;
      margin-bottom: 17.5%;
      margin-left: auto;
      margin-right: auto;

      &:active, &:hover {
        border-radius: 50%;
        background: rgba(64, 68, 76, 0.5);
        padding: 15%;
        margin-top: 17.5%;
        margin-bottom: 17.5%;
        transition: 300ms ease all;
       }

       &:active, &:hover, &.active {
         border-radius: 50%;
         background: rgba(64, 68, 76, 0.5);
         padding: 15%;
         margin-top: 17.5%;
         margin-bottom: 17.5%;
         transition: 300ms ease all;
       }
    }
`;

export default () => {
  const name = useStoreState((state: ApplicationStore) => state.settings.data!.name);
  const rootAdmin = useStoreState((state: ApplicationStore) => state.user.data!.rootAdmin);

  return (
    <Navigation>
      <div css={tw`mx-auto w-full flex items-center`} style={{ maxWidth: '1200px', height: '3.5rem' }}>
        <RightNavigation>
          <SearchContainer />
          <NavLink to={'/'} exact>
            <svg xmlns="http://www.w3.org/2000/svg" css="color: white; height: 1.5rem; width: 1.5rem;" color="white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
          </NavLink>
          <NavLink to={'/account'}>
            <svg xmlns="http://www.w3.org/2000/svg" css="color: white; height: 1.5rem; width: 1.5rem;" color="white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </NavLink>
          {rootAdmin &&
            <a href={'/admin'} rel={'noreferrer'}>
              <svg xmlns="http://www.w3.org/2000/svg" css="color: white; height: 1.5rem; width: 1.5rem;" color="white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </a>
          }
          <a href={'/auth/logout'}>
            <svg xmlns="http://www.w3.org/2000/svg" css="margin-left: 7%; color: white; height: 1.5rem; width: 1.5rem;" color="white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          </a>
        </RightNavigation>
      </div>
    </Navigation>
  );
};
