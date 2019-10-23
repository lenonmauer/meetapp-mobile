import { put, call, select } from 'redux-saga/effects';

import api from '~/services/api';

import { MeetupActions } from '~/store/ducks/meetup';

import errorHandler from '~/util/error-handler';

export function* getMeetups(action) {
  const { limit, clear } = action.payload;

  if (clear) {
    yield put(MeetupActions.clearList());
  }

  const offset = yield select(state => state.meetup.data.length);

  const params = {
    offset,
    limit,
  };

  const response = yield call(api.get, 'meetups', params);

  if (response.ok) {
    yield put(MeetupActions.getMeetupsSuccess(response.data));
  } else {
    yield errorHandler.handleHttpError(response);
    yield put(MeetupActions.getMeetupsFailure());
  }
}
