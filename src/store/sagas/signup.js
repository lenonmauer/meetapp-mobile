import { put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { AuthActions } from '~/store/ducks/auth';

import errorHandler from '~/util/error-handler';
import NavigationUtil from '~/util/navigation';
import ToastUtil from '~/util/toast';

export function* postSignUp(action) {
  const { data } = action.payload;

  const response = yield call(api.post, 'users', data);

  if (response.ok) {
    yield put(AuthActions.postSignupSuccess());
    yield call(NavigationUtil.navigate, 'SignIn');
    yield call(ToastUtil.show, 'Cadastro realizado. Faça o login.', 3000);
  } else {
    yield errorHandler.handleHttpError(response);
    yield put(AuthActions.postSignupFailure());
  }
}
