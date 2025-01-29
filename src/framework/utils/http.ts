import axios from 'axios';
import {getToken} from './get-token';
import {API_BASE_URL} from '@constants/endpoint';
const http = axios.create({
  baseURL: API_BASE_URL + '/api',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Change request data/error here
http.interceptors.request.use(
  async (config: any) => {
    const token = await getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ''}`,
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default http;
