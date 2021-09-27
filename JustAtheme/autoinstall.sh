set -e
echo 🤖 Script Started
sudo su -
php /var/www/pterodactyl/artisan down
cd /var/www/pterodactyl
rm -rf tailwind.config.js
wget https://raw.githubusercontent.com/RTK23-dev/pterodactyl-work/main/JustAtheme/tailwind.config.js
cd
cd /var/www/pterodactyl/assets/css
rm -rf GlobalStylesheet.ts
wget https://raw.githubusercontent.com/RTK23-dev/pterodactyl-work/main/JustAtheme/GlobalStylesheet.ts
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
apt install -y nodejs
npm i -g yarn
cd /var/www/pterodactyl
yarn install
yarn add @emotion/react
yarn build:production
php /var/www/pterodactyl/artisan up
clear
echo "Done theme has been installed thanks for using this script make sure to star the repo!
If the theme isn't installed on your panel run cd /var/www/pterodactyl
yarn build:production  to know the error."
