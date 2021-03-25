# Rick & Morty App

This is a example of an React/Redux + Express + MongoDB application. It also fetches data from an external api at https://rickandmortyapi.com.

The repositor has the frontend app and the backend API. You will find each of its implementations in the client and api folder respectevely. In each folder there is a brief explanation of the architectural design desitions and project structure. 

## Quick Start
To run the app with Docker
- Install Docker in your local machine
- Run
```
git clone https://github.com/nurruty/rick-morty.git
cd rick-morty
docker-compose up
```
- Go to http://localhost:3000
Done! 

## Manual instalation
If you prefer to run the client and api manually first you will have to provide a series of env variables. In the .env.dev file you will find the examples.
Also you will need to have some MongoDB instance running and fill the DATABASE_URL env variable with the Mongo's connection  url.

At this point the app does not have a SignUp feature, so you will have to seed the database yourself with some test users.

After all that is done just run:
```
cd client
yarn install
npm run start
```
and for the API, in a new terminal run
```
cd api
yarn install
npm run start
```
