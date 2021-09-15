FROM node:alpine

COPY . /bot
WORKDIR /bot

RUN node deploy-commands.js

CMD node index.js