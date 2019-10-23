import ToastService from '~/services/toast';

function* handleHttpError(response) {
  console.log('http error', response.status, response.data);
}

export default {
  handleHttpError,
};
