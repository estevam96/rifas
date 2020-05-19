import { Service } from "./Service";

class UserService extends Service {
  constructor() {
    super('api/users')
  }

  async me() {
    return this.request({
      method: 'GET',
      url: '/me',

    })
  }
}

export const User = new UserService();