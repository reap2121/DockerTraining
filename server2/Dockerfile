FROM node:10

COPY src ./src
COPY resources ./resources
COPY package*.json ./

RUN npm install

CMD node src/server.js