import { Service } from "./Service";

class OrderService extends Service {
  constructor() {
    super('api/orders')
  }

  async store(data) {
    return await this.request({
      method: 'POST',
      url: '/',
      data
    })
  }
}

export const Order = new OrderService();