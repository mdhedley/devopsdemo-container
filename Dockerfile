FROM node:alpine
COPY app.js app.js
ENTRYPOINT node app.js