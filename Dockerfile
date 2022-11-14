FROM node:14

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

ENV NODE_PATH=./build

EXPOSE 8080

RUN npm run build
