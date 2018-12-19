class TroubleshootingRouter {
  static createTroubleshooting(response, troubleshooting) {
    return response.status(200).send(true);
  }
  static getTroubleshooting(response, troubleshooting) {
    return response.status(200).send(true);
  }
  static updateTroubleshooting(idTroubleshooting) {
    return response.status(200).send(true);
  }
}

module.exports = TroubleshootingRouter;
