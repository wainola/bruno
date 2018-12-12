require('dotenv').config();
const fetch = require('node-fetch');

const { SERVICE_URL } = process.env;

class AuthHandler {
  static async testRequestToService(request, response) {
    try {
      const sendReq = await fetch(`${SERVICE_URL}/test-service`);
      const data = await sendReq.json();
      return response.send(data);
    } catch (e) {
      return response.status(500).send({ error: true });
    }
  }

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
