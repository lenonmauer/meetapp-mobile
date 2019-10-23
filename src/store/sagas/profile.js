import { put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { ProfileActions } from '~/store/ducks/profile';

import ToastService from '~/services/toast';
import NavigationService from '~/services/navigation';

import SessionHelper from '~/util/session';
import errorHandler from '~/util/error-handler';

export function* getProfile() {
  const response = yield call(api.get, 'users');

  if (response.ok) {
    yield put(ProfileActions.getProfileSuccess(response.data));
  } else {
    yield errorHandler.handleHttpError(response);
    yield put(ProfileActions.getProfileFailure());
  }
}

export function* putProfile(action) {
  const { data } = action.payload;

  const response = yield call(api.put, 'users', data);

  if (response.ok) {
    yield put(ProfileActions.putProfileSuccess());
    yield call(ToastService.show, 'Perfil atualizado.', 3000);
  } else {
    yield errorHandler.handleHttpError(response);
    yield put(ProfileActions.putProfileFailure());
  }
}

export function* logout() {
  yield call(SessionHelper.clearToken);
  yield call(NavigationService.navigate, 'SignIn');
}
