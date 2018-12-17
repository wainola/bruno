require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const app = express();

const Router = require('./routes/index');

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL);

// Testing the connection
sequelize
  .authenticate()
  .then(() => console.log('Success connection to the database [SERVICE AUTH]'))
  .catch(e => console.log('err::', e));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test-service', Router.testService);

app.post('/service-auth', Router.authenticate);

app.listen(3000, () => {
  console.log('auth service listening on port 3000');
});
