FROM node:10

COPY public ./
COPY package*.json ./

RUN npm install

EXPOSE 8089

CMD npm start