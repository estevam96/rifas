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
        client_id: process.env.MIX_CLIENT_ID,
        client_secret: process.env.MIX_CLIENT_SECRET,
        username: email,
        password: password
      }
    })
  }
}

export const Auth = new AuthServe();