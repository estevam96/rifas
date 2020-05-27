import { Service } from "./Service";

class PaymentService extends Service {
  constructor() {
    super('api/payment');
  }

  async list() {
    return await this.request({
      method: "GET",
      url: '/',
    })
  }

  async store(data = new FormData()) {
    return await this.request({
      method: "POST",
      url: '/',
      data
    })
  }

  async delete(id){
    return await this.request({
      method: "DELETE",
      url: `/${id}`,
    })
  }
}

export const Payment = new PaymentService();