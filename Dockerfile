FROM node:alpine

COPY . /bot
WORKDIR /bot

RUN npm ci --production
RUN rm package.json package-lock.json

RUN node deploy-commands.js

CMD node index.js