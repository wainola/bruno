class Troubleshooting {
  static async postTroubleshooting(request, response) {
    return response.status(200).send({ msg: 'ok' });
  }

  static async createFlighTicket(request, response) {
    let isValidData = request.body;
    console.log('request.body', isValidData);
  }
}

module.exports = Troubleshooting;
