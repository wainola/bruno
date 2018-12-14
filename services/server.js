require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const app = express();

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL);

const AuthHandler = require('./handlers/auth');

// Testing the connection
sequelize
  .authenticate()
  .then(() => console.log('Success connection to the database [SERVICE AUTH]'))
  .catch(e => console.log('err::', e));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test-service', (request, response) => {
  console.log('punch to the service !!!!');
  return response.status(200).send({ msg: 'Service is alive!' });
});

app.get('/test', (request, response) =>
  response.status(200).send({ test: "I'm alive! " })
);
app.post('/service-auth', (request, response) =>
  AuthHandler.authenticate(request, response, sequelize)
);

app.listen(3000, () => {
  console.log('auth service listening on port 3000');
});
