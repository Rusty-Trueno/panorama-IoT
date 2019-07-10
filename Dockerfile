FROM node:10.15.1

WORKDIR /usr/nodejs2

COPY . .

RUN npm install

EXPOSE 8888

CMD ["npm", "start"]
