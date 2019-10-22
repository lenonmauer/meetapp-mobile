import { all, takeLatest } from 'redux-saga/effects';

import { ProfileTypes } from '~/store/ducks/profile';
import { AuthTypes } from '~/store/ducks/auth';
import { MeetupTypes } from '~/store/ducks/meetup';
import { SubscriptionTypes } from '~/store/ducks/subscription';

import { getMeetups } from '~/store/sagas/dashboard';
import { getProfile, putProfile } from '~/store/sagas/profile';
import { postSignIn } from '~/store/sagas/signin';
import { postSignUp } from '~/store/sagas/signup';
import { getMySubscriptions, postSubscribe } from '~/store/sagas/subscription';

export default function* rootSaga() {
  yield all([
    takeLatest(MeetupTypes.GET_MEETUPS_REQUEST, getMeetups),
    takeLatest(ProfileTypes.GET_PROFILE_REQUEST, getProfile),
    takeLatest(ProfileTypes.PUT_PROFILE_REQUEST, putProfile),
    takeLatest(AuthTypes.POST_SIGNIN_REQUEST, postSignIn),
    takeLatest(AuthTypes.POST_SIGNUP_REQUEST, postSignUp),
    takeLatest(SubscriptionTypes.GET_SUBSCRIPTIONS_REQUEST, getMySubscriptions),
    takeLatest(SubscriptionTypes.POST_SUBSCRIBE_REQUEST, postSubscribe),
  ]);
}
