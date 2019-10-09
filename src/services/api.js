import axios from 'apisauce';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
