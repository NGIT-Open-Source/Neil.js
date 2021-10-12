FROM node:alpine

COPY . /bot
WORKDIR /bot

RUN npm ci --production

CMD node deploy-commands.js && node index.js
