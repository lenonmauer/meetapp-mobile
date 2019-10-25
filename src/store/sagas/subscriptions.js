import { put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { MeetupActions } from '~/store/ducks/meetup';
import { SubscriptionActions } from '~/store/ducks/subscription';

import errorHandler from '~/util/error-handler';

export function* getMySubscriptions() {}
