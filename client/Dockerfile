FROM mhart/alpine-node:14.16.0 as build-step

WORKDIR /client

ENV PATH="./node_modules/.bin:$PATH"

COPY package.json /client
COPY yarn.lock /client

RUN yarn install

COPY . /client

EXPOSE 3000

CMD ["npm", "start"]