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

  async list(page = 1, perPage = 10, search = '') {
    return await this.request({
      method: "GET",
      url: '/',
      params: { page, perPage, search }
    })
  }

  async show(id) {
    return await this.request({
      method: "GET",
      url: `/${id}`,
    })
  }

  async update(id, data = {}) {
    return await this.request({
      method: "PUT",
      url: `/${id}`,
      data
    })
  }

  async delete(id) {
    return await this.request({
      method: "DELETE",
      url: `/${id}`,
    })
  }


}

export const Order = new OrderService();