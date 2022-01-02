FROM node:16

# Instalando npx
RUN npm i cowsay react-scripts serve -g -y

RUN mkdir /usr/data
COPY src/frontend/package.json /usr/data/package.json
WORKDIR /usr/data
RUN npm i -g -y

WORKDIR /usr/app

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "production" ]