import { put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { AuthActions } from '~/store/ducks/auth';

import NavigationUtil from '~/util/navigation';
import errorHandler from '~/util/error-handler';
import SessionHelper from '~/util/session';

export function* postSignIn(action) {
  const { data } = action.payload;

  const response = yield call(api.post, 'sessions', data);

  if (response.ok) {
    const { token } = response.data;

    yield put(AuthActions.postSigninSuccess(token));
    yield call(SessionHelper.setToken, token);
    yield call(NavigationUtil.navigate, 'Dashboard');
  } else {
    yield call(errorHandler.handleHttpError, response);
    yield put(AuthActions.postSignupFailure());
  }
}
