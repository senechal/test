
# Usage (Dev environment)

##Requirements
[MongoDb] (https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-18-04)

## ui
```
cd ui
yarn install
yarn start
open http://localhost:3000
```

## server
```
cd server
yarn install
yarn start
open http://localhost:3001
```

# Docker
Make shure you have the latest verions of Docker-ce and docker-compose.

To run the project in the background.

```docker-compose up -d```

# Test

```
yarn run test
```
# Tasks

## Frontend Role

- [x] Please add pagination support to the list when there are more than 2 entries
- [x] Please add option to select sex of a friend male/female and display it
- [x] Please add tests using your preferred testing tool (jest, mocha, should.js ...)
