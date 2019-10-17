import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import meetup from './meetup';
import subscription from './subscription';

const reducers = combineReducers({
  auth,
  user,
  meetup,
  subscription,
});

export default reducers;
