FROM node:alpine AS build
#optional install gyp tools
RUN apk add --update --no-cache python make g++
ADD ./src
WORKDIR /src
RUN npm install
RUN npm run lint
RUN npm run test
RUN npm run build 
RUN npm prune --production


