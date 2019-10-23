import { put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { AuthActions } from '~/store/ducks/auth';

import errorHandler from '~/util/error-handler';
import NavigationService from '~/services/navigation';
import ToastService from '~/services/toast';

export function* postSignUp(action) {
  const { data } = action.payload;

  const response = yield call(api.post, 'users', data);

  if (response.ok) {
    yield put(AuthActions.postSignupSuccess());
    yield call(NavigationService.navigate, 'SignIn');
    yield call(ToastService.show, 'Cadastro realizado. Faça o login.', 3000);
  } else {
    yield errorHandler.handleHttpError(response);
    yield put(AuthActions.postSignupFailure());
  }
}
