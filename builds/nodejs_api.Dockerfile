FROM node:16

RUN npm i -g -y nodemon mysql2 express express-generator

RUN mkdir /usr/data
COPY src/api/package.json /usr/data

WORKDIR /usr/data

RUN npm i
ENV NODE_PATH="/usr/data/node_modules"

WORKDIR /usr/app

COPY src/api /usr/app

EXPOSE 3000

# ENTRYPOINT [ "npm", "run", "start" ]
ENTRYPOINT [ "nodemon", "--legacy-watch", "app.js" ]
