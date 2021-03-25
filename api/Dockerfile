FROM mhart/alpine-node:14.16.0

WORKDIR /api

ENV PATH="./node_modules/.bin:$PATH"

COPY package.json /api/
COPY yarn.lock /api/

RUN yarn install

COPY . /api/

EXPOSE 80

CMD ["npm", "start"]