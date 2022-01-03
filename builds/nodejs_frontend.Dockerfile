FROM node:16

# Instalando npx
RUN npm i cowsay react-scripts serve -g -y

RUN mkdir /usr/data
COPY src/frontend/package.json /usr/data

WORKDIR /usr/data

RUN npm i
ENV NODE_PATH="/usr/data/node_modules"

WORKDIR /usr/app

COPY src/frontend /usr/app

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "production" ]