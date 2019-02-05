import { combineReducers } from 'redux';

import { usersReducer } from './usersReducer'
import { currentUserReducer } from './currentUserReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  currentUser: currentUserReducer
})

export default rootReducer;
