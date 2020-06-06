import { Service } from "./Service";

class PaymentService extends Service {
  constructor() {
    super('api/payment');
  }

  async list() {
    return await this.request({
      method: "GET",
      url: '',
    })
  }

  async show(id) {
    return await this.request({
      method: "GET",
      url: `/${id}`,
    })
  }

  async store(data = new FormData()) {
    return await this.request({
      method: "POST",
      url: '',
      data
    })
  }

  async delete(id) {
    return await this.request({
      method: "DELETE",
      url: `/${id}`,
    })
  }

  async edit(id, data = new FormData()) {
    return await this.request({
      method: "POST",
      url: `/${id}`,
      data
    })
  }
}

export const Payment = new PaymentService();