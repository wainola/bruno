class AuthHandler {
  static async authenticate(request, response, sequelize) {
    console.log('request.body', request.body);
    return response
      .status(200)
      .send({ auth: true, msg: 'you hit the auth endpoint' });
  }
}

module.exports = AuthHandler;
