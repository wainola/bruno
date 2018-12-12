class AuthHandler {
  static async authenticate(request, response, sequelize) {
    return response.status(200).send({ auth: true });
  }
}
