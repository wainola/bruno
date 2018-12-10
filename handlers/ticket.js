class TicketHandler {
  static async createTicket(request, response, sequelize) {
    const { ticket } = request.body;
    const insertionQuery = `INSERT INTO tickets (number, city, date) VALUES (?,?,?) RETURNING *`;
    const valuesToInsert = [ticket.number, ticket.city, ticket.date];
    console.log('valuesToInsert', valuesToInsert);
    try {
      const queryExec = await sequelize.query(insertionQuery, {
        replacements: valuesToInsert
      });
      return response.status(200).send({ resultQuery: queryExec });
    } catch (e) {
      console.log('E:::', e);
      return response.status(500).send(false);
    }
  }
}

module.exports = TicketHandler;
