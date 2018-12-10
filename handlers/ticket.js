class TicketHandler {
  static async createTicket(request, response) {
    const { ticket } = request.body;

    console.log(request.body);
    return response.status(200).send(ticket);
  }
}

module.exports = TicketHandler;
