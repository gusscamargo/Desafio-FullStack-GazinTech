FROM node:16

RUN npm i cowsay react-scripts serve -g -y

WORKDIR /usr/app

COPY src/frontend /usr/app

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "production" ]