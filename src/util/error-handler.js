import ToastUtil from '~/util/toast';

function* handleHttpError(response) {
  console.log(
    'http error',
    response.config.method,
    response.config.url,
    response.status,
    response.data,
  );
}

export default {
  handleHttpError,
};
