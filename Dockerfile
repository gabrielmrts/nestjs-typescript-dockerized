FROM node:latest
WORKDIR /var/www/app
COPY package.json .
RUN npm install
EXPOSE 3000
CMD npm run start:dev