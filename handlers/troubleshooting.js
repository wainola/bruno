class Troubleshooting {
  static async postTroubleshooting(request, response, sequelize) {
    const { troubleshooting } = request.body;
    const insertIntoTroubleshootings = `INSERT INTO troubleshootings (flight_code, username, info) VALUES (?,?,?) RETURNING *`;
    const valuesToInsert = [
      troubleshooting.flight_code,
      troubleshooting.user,
      troubleshooting.info
    ];
    try {
      const queryExec = await sequelize.query(insertIntoTroubleshootings, {
        replacements: valuesToInsert
      });
      return response.status(200).send({ resultQuery: queryExec });
    } catch (e) {
      console.log('E:::', e);
      return response.status(500).send(false);
    }
  }
}

module.exports = Troubleshooting;
