import { put, call, select } from 'redux-saga/effects';

import api from '~/services/api';

import { MeetupActions } from '~/store/ducks/meetup';

import errorHandler from '~/util/error-handler';

export function* getMeetups(action) {
  const { date, limit, clearPrevious } = action.payload;

  if (clearPrevious) {
    yield put(MeetupActions.clearMeetups());
  }

  const offset = yield select(state => state.meetup.data.length);

  const params = {
    date,
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
