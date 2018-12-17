class AuthHandler {
  static async authenticate(body) {
    console.log('request.body', body);
    // we generate the jwt token, and we send back to the user
  }
}

module.exports = AuthHandler;
