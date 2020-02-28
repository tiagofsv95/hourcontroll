import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
