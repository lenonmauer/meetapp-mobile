import { put, call, select } from 'redux-saga/effects';

import api from '~/services/api';

import { MeetupActions } from '~/store/ducks/meetup';
import { SubscriptionActions } from '~/store/ducks/subscription';

import errorHandler from '~/util/error-handler';
import Toast from '~/util/toast';

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
    yield call(errorHandler.handleHttpError, response);
    yield put(MeetupActions.getMeetupsFailure());
  }
}

export function* postSubscribe(action) {
  const { id } = action.payload;

  yield put(MeetupActions.setSubscribing(id, true));

  const response = yield call(api.post, `/meetups/${id}/subscriptions`);

  if (response.ok) {
    yield put(SubscriptionActions.postSubscribeSuccess(response.data));
    yield put(MeetupActions.removeMeetup(id));
    yield call(Toast.show, 'Inscrição realizada.');
  } else {
    yield call(errorHandler.handleHttpError, response);
    yield put(SubscriptionActions.postSubscribeFailure());
  }

  yield put(MeetupActions.setSubscribing(id, false));
}
