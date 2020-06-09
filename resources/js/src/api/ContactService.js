import { Service } from './Service'

class ContactService extends Service {
  constructor() {
    super('api/contacts');
  }

  async list(title) {
    return await this.request({
      url: '',
      method: "GET",
      params: { title }
    })
  }

  async footer() {
    return await this.request({
      url: '/footer',
      method: "GET",
    })
  }

  async show(id) {
    return await this.request({
      url: `/${id}`,
      method: 'GET'
    })
  }

  async update(id, data) {
    return await this.request({
      url: `/${id}`,
      method: 'PUT',
      data
    })
  }

  async delete(id) {
    return await this.request({
      url: `/${id}`,
      method: 'DELETE',
    })
  }

  async store(data) {
    return await this.request({
      url: '',
      method: 'POST',
      data
    })
  }
}

export const Contact = new ContactService();