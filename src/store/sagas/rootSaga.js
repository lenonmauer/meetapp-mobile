import { all, takeLatest, takeEvery } from 'redux-saga/effects';

import { ProfileTypes } from '~/store/ducks/profile';
import { AuthTypes } from '~/store/ducks/auth';
import { MeetupTypes } from '~/store/ducks/meetup';
import { SubscriptionTypes } from '~/store/ducks/subscription';

import { getMeetups, postSubscribe } from '~/store/sagas/dashboard';
import { getProfile, putProfile, logout } from '~/store/sagas/profile';
import { postSignIn } from '~/store/sagas/signin';
import { postSignUp } from '~/store/sagas/signup';
import {
  getMySubscriptions,
  cancelSubscription,
} from '~/store/sagas/subscriptions';

export default function* rootSaga() {
  yield all([
    takeLatest(MeetupTypes.GET_MEETUPS_REQUEST, getMeetups),
    takeLatest(ProfileTypes.GET_PROFILE_REQUEST, getProfile),
    takeLatest(ProfileTypes.PUT_PROFILE_REQUEST, putProfile),
    takeLatest(AuthTypes.LOGOUT, logout),
    takeLatest(AuthTypes.POST_SIGNIN_REQUEST, postSignIn),
    takeLatest(AuthTypes.POST_SIGNUP_REQUEST, postSignUp),
    takeLatest(SubscriptionTypes.GET_SUBSCRIPTIONS_REQUEST, getMySubscriptions),
    takeEvery(SubscriptionTypes.POST_SUBSCRIBE_REQUEST, postSubscribe),
    takeEvery(
      SubscriptionTypes.DELETE_SUBSCRIPTION_REQUEST,
      cancelSubscription,
    ),
  ]);
}
