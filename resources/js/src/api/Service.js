import axios from 'axios';

export class Service {
  constructor(baseUrl){
    this.access_token = localStorage.getItem('app-token');
    this.request = axios.create({
      baseURL: [process.env.MIX_URL_BASE, baseUrl].join('/')
    })

    this.request.defaults.headers.common['Authorization'] = `Bearer ${this.access_token}`;
  }
}