import { Service } from "./Service";

class AuthServe extends Service {
  constructor() {
    super('oauth/token')
  }

  async login(email, password) {
    return await this.request({
      method: 'POST',
      url: '/',
      data: {
        grant_type: "password",
        client_id: 2,
        client_secret: "PC8Hx05NaVCpDy3O7SUwE38JtyJYXVVjfOExZH7E",
        username: email,
        password: password
      }
    })
  }
}

export const Auth = new AuthServe();