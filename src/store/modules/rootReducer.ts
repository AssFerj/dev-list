import { combineReducers } from '@reduxjs/toolkit';

import usersReducer from './usersSlice';
import userReducer from './userSlice';

export default combineReducers({
  usersReducer,
  userReducer
});
