FROM node:18-bullseye

WORKDIR /workspace

COPY package*.json ./
COPY yarn.lock ./

RUN apt-get update && apt-get install -y git
RUN yarn install

COPY . .

CMD [ "yarn", "dev" ]
