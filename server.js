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

const TroubleshootingHandler = require('./handlers/troubleshooting');
const TicketHandler = require('./handlers/ticket');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/auth', async (request, response) => {
  const dataAuth = await fetch('http://localhost:3000/service/auth');
  const responseToSend = await dataAuth.json();
  return response.status(200).send({ msg: responseToSend });
});

app.post('/api/v1/create-ticket', TicketHandler.createTicket);
app.post('/api/v1/troubleshooting', TroubleshootingHandler.postTroubleshooting);

app.listen(9000, () => {
  console.log('api listening on port 9000');
});

module.exports = {
  sequelize
};
