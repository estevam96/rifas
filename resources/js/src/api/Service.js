import axios from 'axios';

export class Service {
  constructor(baseUrl) {
    this.request = axios.create({
      baseURL: [process.env.MIX_URL_BASE, baseUrl].join('/')
    })
    this.request.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    this.applyToken();
  }

  applyToken() {
    this.request.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('app_token')}`;
  }
}