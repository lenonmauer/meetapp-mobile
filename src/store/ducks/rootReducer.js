import { combineReducers } from 'redux';

import auth from './auth';
import profile from './profile';
import meetup from './meetup';
import subscription from './subscription';

const reducers = combineReducers({
  auth,
  meetup,
  profile,
  subscription,
});

export default reducers;
