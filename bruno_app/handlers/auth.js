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
    const { body } = request;
    console.log('sendRequestToService::', body);
    try {
      const sendData = await fetch(`${SERVICE_URL}/service-auth`, {
        method: 'POST',
        body: JSON.stringify(body)
      });
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
