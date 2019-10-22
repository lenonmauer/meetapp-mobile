import apisauce from 'apisauce';
import mockAxios from './mock-api';

const api = apisauce.create({
  baseURL: 'https://api.github.com',
});

mockAxios(api.axiosInstance);

export default api;
