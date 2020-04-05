### STAGE 1: Build ###
FROM node:12.16.1-alpine AS build
RUN mkdir -p home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@7.3.9
COPY . .
EXPOSE 4200
CMD npm start

