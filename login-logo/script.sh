php /var/www/pterodactyl/artisan down
cd /var/www/pterodactyl/resources/scripts/components/auth
rm -rf LoginFromContainer.tsx
wget https://raw.githubusercontent.com/RTK23-dev/pterodactyl-work/main/login-logo/LoginFromContainer.tsx
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
apt install -y nodejs
npm i -g yarn
cd /var/www/pterodactyl
yarn install
yarn add @emotion/react
yarn build:production
php /var/www/pterodactyl/artisan up
clear
echo "Done"
