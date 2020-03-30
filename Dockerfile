### STAGE 1: Build ###
FROM node:12.16.1-alpine AS build
WORKDIR /user/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /user/src/app /user/share/nginx/html
