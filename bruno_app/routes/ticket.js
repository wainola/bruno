class TicketRouter {
  static createTicket(response, ticket) {
    return response.status(200).send(true);
  }
  static getTickets(response, ticket){
    return response.status(200).send(true)
  }
  static updateTicket(response, ticket){
    return response.status(200).send(true)
  }
  static deleteTicket(response, ticket){
    return response.status(200)send(true)
  }
}

module.exports = Ticket;
