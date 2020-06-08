import axios from 'axios';
import { applyAuthHeader } from '../api'
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
    if (!this._hasInterceptors) {
      this._hasInterceptors = true;
      this.request.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          const originalRequest = error.config;
          const refresh_token = localStorage.getItem('app_token');
          if (error.response.status === 401 && !originalRequest._retry && refresh_token) {
            originalRequest._retry = true;
            return axios.post(`${process.env.MIX_URL_BASE}/api/auth/refresh`, {}, {
              headers: {
                Authorization: `Bearer ${refresh_token}`
              }
            }).then(res => {
              if (res.status === 200) {
                localStorage.setItem('app_token', res.data.access_token);
                applyAuthHeader();
                originalRequest.headers.Authorization = `Bearer ${res.data.access_token}`;
                return axios(originalRequest);
              }
            }).catch(() => {
              localStorage.removeItem('app_token');
              localStorage.removeItem('reflesh_token');
              localStorage.removeItem('user');
              router.push({ path: '/login' });
            });
          }
          return Promise.reject(error);
        }
      );
    }
  }
}