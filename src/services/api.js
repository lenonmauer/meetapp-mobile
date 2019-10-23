import apisauce from 'apisauce';
import SessionHelper from '~/util/session';
import mockAxios from './mock-api';

const api = apisauce.create({
  baseURL: 'https://api.github.com',
});

api.addAsyncRequestTransform(request => async () => {
  const token = await SessionHelper.getToken();

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
});

mockAxios(api.axiosInstance);

export default api;
