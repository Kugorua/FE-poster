import CONFIG from '@/config';
import { logout } from '@/utilities';
import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'universal-cookie';

const httpRequest = axios.create({
  baseURL: CONFIG.http.baseURL + 'api/admin',
});

httpRequest.interceptors.request.use(
  function (config) {
    const cookies = new Cookies();
    const storagedToken = cookies.get('userToken');

    if (storagedToken) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${storagedToken as string}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

httpRequest.interceptors.response.use(
  function (res) {
    return res.data;
  },
  function (error) {
    console.log(error);
    if (error.response.status === 401) {
      logout();
    }
    return Promise.reject(error);
  },
);

export default httpRequest;