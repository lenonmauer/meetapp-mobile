import { dispatch } from 'redux';
import apisauce from 'apisauce';
import ToastUtil from '~/util/toast';
import { AuthActions } from '~/store/ducks/auth';

function handleHttpError(response) {
  const { status, problem, data } = response;

  console.log(
    'http error',
    response.config.method,
    response.config.url,
    response.status,
    response.data,
  );

  if (problem !== apisauce.CLIENT_ERROR && problem !== apisauce.SERVER_ERROR) {
    ToastUtil.show('Erro de conexão com a internet.');
    return;
  }

  if (status === 401) {
    ToastUtil.show('A sua sessão expirou.');
    dispatch(AuthActions.logout());
    return;
  }

  if (problem === apisauce.SERVER_ERROR) {
    ToastUtil.show('Ocorreu um erro no servidor.');
    return;
  }

  const message =
    data && data.error ? data.error : 'Ocorreu um erro nesta requisição.';

  ToastUtil.show(message);
}

export default {
  handleHttpError,
};
