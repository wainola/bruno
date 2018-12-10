class Troubleshooting {
  static async postTroubleshooting(request, response) {
    return response.status(200).send({ msg: 'ok' });
  }
}

module.exports = Troubleshooting;
