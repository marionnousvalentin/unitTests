FROM node:10-stretch

WORKDIR /server
COPY package.json .
COPY yarn.lock .
RUN yarn

COPY tsconfig.json .

CMD [ "yarn", "launch" ]
