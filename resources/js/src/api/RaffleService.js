import { Service } from "./Service";

class RaffleService extends Service {
  constructor() {
    super('api/raffle');
  }

  async listValiable(page = 1, perPage = 10) {
    return await this.request({
      method: "GET",
      url: '/avaliable',
      params: { page, perPage}
    })
  }

}

export const Raffle = new RaffleService();