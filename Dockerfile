FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm update

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
