import { Service } from "./Service";

class AuthServe extends Service {
  constructor() {
    super('api/auth/')
  }

  async login(email, password) {
    return await this.request({
      method: 'POST',
      url: '/',
      data: {
        email: email,
        password: password
      }
    })
  }
}

export const Auth = new AuthServe();