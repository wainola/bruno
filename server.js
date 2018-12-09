const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/auth', async (request, response) => {
  const dataAuth = await fetch('http://localhost:3000/service/auth');
  const responseToSend = await dataAuth.json();
  return response.status(200).send({ msg: responseToSend });
});

app.listen(9000, () => {
  console.log('api listening on port 9000');
});
