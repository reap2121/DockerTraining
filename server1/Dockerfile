FROM node:10

COPY src ./src
COPY package*.json ./

RUN npm install

EXPOSE 8088

CMD node src/server.js