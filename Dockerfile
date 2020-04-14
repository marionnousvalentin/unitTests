FROM node:10-stretch

WORKDIR /src

COPY . /src
RUN yarn

EXPOSE 3000
CMD [ "yarn", "launch" ]
