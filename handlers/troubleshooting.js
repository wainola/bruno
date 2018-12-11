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
      if (Array.isArray(queryExec)) {
        const reply = {
          ...queryExec[0][0],
          ticketCode: (Math.random() * 8)
            .toString(36)
            .split('.')
            .join('')
        };
        return response.status(200).send({ ticket: reply });
      }
      return response.status(204).send({ ticket: {} });
    } catch (e) {
      console.log('E:::', e);
      return response.status(500).send(false);
    }
  }
}

module.exports = Troubleshooting;
