import { put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { AuthActions } from '~/store/ducks/auth';

import errorHandler from '~/util/error-handler';
import NavigationService from '~/services/navigation';

export function* postSignIn(action) {
  const { data } = action.payload;

  const response = yield call(api.post, 'sessions', data);

  if (response.ok) {
    const { token } = response.data;

    yield put(AuthActions.postSigninSuccess(token));
    NavigationService.navigate('App', { caralho: 123 });
  } else {
    yield errorHandler.handleHttpError(response);
    yield put(AuthActions.postSignupFailure());
  }
}
