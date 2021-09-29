FROM node:alpine

COPY . /bot
WORKDIR /bot

RUN npm ci
RUN node deploy-commands.js

CMD node index.js