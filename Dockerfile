
FROM node:11

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update
RUN apt-get install -y build-essential
RUN apt-get install -y python

RUN yarn install --production

COPY . .

EXPOSE 4000

CMD ["npm", "start"]