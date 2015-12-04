# Node is the base image
FROM node:4-wheezy
MAINTAINER zedd45

# uncomment to set node environment
# ENV NODE_ENV production
ENV APPFOLDER=/usr/src/app/

COPY index.js package.json $APPFOLDER
COPY test/ ${APPFOLDER}/test
WORKDIR $APPFOLDER

# RUN npm i --production
RUN npm i && npm test

EXPOSE 3000/tcp
