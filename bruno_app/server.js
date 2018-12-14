require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const fetch = require('node-fetch');
const cors = require('cors');

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL);

// Testing the connection
sequelize
  .authenticate()
  .then(() => console.log('Success connection to the database [BRUNO_API]'))
  .catch(err => console.log('err::', err));

const TroubleshootingHandler = require('./handlers/troubleshooting');
const TicketHandler = require('./handlers/ticket');
const UserHandler = require('./handlers/user');
const AuthHandler = require('./handlers/auth');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/test', (request, response) =>
  response.status(200).send({ status: 'ok' })
);

app.get('/test-service', AuthHandler.testRequestToService);

app.post('/auth', AuthHandler.sendRequestToService);

app.post('/api/v1/register', (request, response) =>
  UserHandler.register(request, response, sequelize)
);

app.post('/api/v1/register-admin', (request, response) =>
  UserHandler.registerAdmin(request, response, sequelize)
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
