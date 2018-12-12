require('dotenv').config();
const fetch = require('node-fetch');

const { SERVICE_URL } = process.env;

class AuthHandler {
  static async sendRequestToService(request, response) {
    console.log('sendRequestToService::', SERVICE_URL);
    try {
      const sendData = await fetch(`http://auth_service:3000/test`);
      const data = await sendData.json();
      console.log(data);
      return response.send(data);
    } catch (e) {
      console.log('error:', e);
      return response.status(500).send({ error: true });
    }
  }
}

module.exports = AuthHandler;
