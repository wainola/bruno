require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const Sequelize = require('sequelize');

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL);

// Testing the connection
sequelize
  .authenticate()
  .then(() => console.log('Success connection to the database'))
  .catch(err => console.log('err::', err));

sequelize
  .query('select now()')
  .then(r => console.log(r))
  .catch(e => console.log(e));

const TroubleshootingHandler = require('./handlers/troubleshooting');
const TicketHandler = require('./handlers/ticket');
const UserHandler = require('./handlers/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/auth', async (request, response) => {
  const dataAuth = await fetch('http://localhost:3000/service/auth');
  const responseToSend = await dataAuth.json();
  return response.status(200).send({ msg: responseToSend });
});

app.post('/api/v1/register', (request, response) =>
  UserHandler.register(request, response, sequelize)
);

app.post('/api/v1/create-ticket', (request, response) =>
  TicketHandler.createTicket(request, response, sequelize)
);
app.post('/api/v1/troubleshooting', (request, response) =>
  TroubleshootingHandler.postTroubleshooting(request, response, sequelize)
);

app.listen(9000, () => {
  console.log('api listening on port 9000');
});

const db = {
  sequelize,
  Sequelize
};

module.exports = db;
