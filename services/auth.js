const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const auth = async (request, response) => {
  const data = 'nicolas riquelme';
  return response.send(JSON.stringify({ dataToSend: data }));
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/service/auth', auth);

app.listen(3000, () => {
  console.log('auth service listening on port 3000');
});
