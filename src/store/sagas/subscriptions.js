import { put, call, select } from 'redux-saga/effects';

import api from '~/services/api';

import { SubscriptionActions } from '~/store/ducks/subscription';

import errorHandler from '~/util/error-handler';
import Toast from '~/util/toast';

export function* getMySubscriptions(action) {
  const { limit } = action.payload;

  const offset = yield select(state => state.subscription.data.length);

  const params = {
    offset,
    limit,
  };

  const response = yield call(api.get, 'subscriptions', params);

  if (response.ok) {
    yield put(SubscriptionActions.getSubscriptionsSuccess(response.data));
  } else {
    yield call(errorHandler.handleHttpError, response);
    yield put(SubscriptionActions.getSubscriptionsFailure());
  }
}

export function* cancelSubscription(action) {
  const { id } = action.payload;

  const response = yield call(api.delete, `/subscriptions/${id}`);

  if (response.ok) {
    yield put(SubscriptionActions.deleteSubscriptionSuccess(id));
    yield call(Toast.show, 'Inscrição cancelada.');
  } else {
    yield call(errorHandler.handleHttpError, response);
    yield put(SubscriptionActions.deleteSubscriptionFailure(id));
  }
}
