php /var/www/pterodactyl/artisan down
cd /var/www/pterodactyl
rm -rf tailwind.config.js
wget https://raw.githubusercontent.com/fRTK23-dev/pterodactyl-work/main/JustAtheme/autoinstall.sh
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
apt install -y nodejs
npm i -g yarn
cd /var/www/pterodactyl
yarn install
yarn add @emotion/react
yarn build:production
clear
php /var/www/pterodactyl/artisan up
echo "Done Check up your panel!"
