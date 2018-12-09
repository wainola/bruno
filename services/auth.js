const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const auth = async (request, response) => {
  console.log('auth services');
  const data = 'nicolas riquelme';
  console.log('data to send', data);
  return response.send(JSON.stringify({ dataToSend: data }));
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/service/auth', auth);

app.listen(3000, () => {
  console.log('auth service listening on port 3000');
});
