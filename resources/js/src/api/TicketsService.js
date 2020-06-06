import { Service } from "./Service";

class TicketsService extends Service {
  constructor() {
    super('api/tickets');
  }

  async store(data) {
    return await this.request({
      method: "POST",
      url: '',
      data
    })
  }
  async ReserveTickets(riffle_id) {
    return await this.request({
      method: "GET",
      url: `/raffle/${riffle_id}`,
    })
  }
}

export const Ticket = new TicketsService();