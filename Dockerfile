FROM node:alpine

ADD . /tmp

EXPOSE 8080

CMD cd /tmp && node index.js
