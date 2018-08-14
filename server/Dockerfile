FROM node:9.6.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY server/package.json ./

RUN npm install --silent

# Bundle app source
COPY server/ .

EXPOSE 3001
CMD [ "npm", "start" ]
