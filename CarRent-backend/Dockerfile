# docker file for server
FROM node:20-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY . .


RUN npm install

EXPOSE 4000

CMD [ "npm", "start"]







