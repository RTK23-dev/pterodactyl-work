cd /var/www/pterodactyl/resources/scripts/components
rm -rf NavigationBar.tsx
wget https://raw.githubusercontent.com/RTK23-dev/pterodactyl-work/main/navbar/NavigationBar.tsx
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
apt install -y nodejs
npm i -g yarn
cd /var/www/pterodactyl
yarn install
yarn add @emotion/react
yarn build:production
clear
echo "Done theme has been installed thanks for using this script make sure to star the repo!"
