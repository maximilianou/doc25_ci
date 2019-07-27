FROM node:alpine AS build
#optional install gyp tools
RUN apk add --update --no-cache python make g++

