php /var/www/pterodactyl/artisan down
cd /var/www/pterodactyl
rm -rf tailwind.config.js
wget https://raw.githubusercontent.com/RTK23-dev/pterodactyl-work/main/JustAtheme/tailwind.config.js
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
apt install -y nodejs
npm i -g yarn
cd /var/www/pterodactyl
yarn install
yarn add @emotion/react
yarn build:production
php /var/www/pterodactyl/artisan up
clear
echo "Done theme has been installed thanks for using this theme / script make sure to star the repo!"
