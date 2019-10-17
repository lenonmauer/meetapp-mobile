import { all, takeLatest } from 'redux-saga/effects';

import { getMeetups } from '~/store/sagas/dashboard';
import { getProfile, putProfile } from '~/store/sagas/profile';
import { postSignIn } from '~/store/sagas/signin';
import { postSignUp } from '~/store/sagas/signup';
import { getMySubscriptions, postSubscribe } from '~/store/sagas/subscription';

export default function* rootSaga() {
  yield all([
    takeLatest(null, getMeetups),
    takeLatest(null, getProfile),
    takeLatest(null, putProfile),
    takeLatest(null, postSignIn),
    takeLatest(null, postSignUp),
    takeLatest(null, getMySubscriptions),
    takeLatest(null, postSubscribe),
  ]);
}
