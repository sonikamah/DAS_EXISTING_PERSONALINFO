
import createReducer from '../../utils/createReducer';
import {fromJS} from 'immutable';
import { combineReducers } from 'redux';

function successHandler(state , action) {
  return Object.assign({},state, action.userInfo);
}
function errorHandler(state, action) {
  return Object.assign({},state, action.userInfo);
  return action.userInfo
}


function sendAuthenticatedUser(state, action) {
  return action.isUserAuthenticated;
}
 export const userInfoReducer = createReducer({}, {
  'SAVE_USER_SAGA_ERROR': errorHandler,
  'SAVE_USER_SAGA_SUCCESS': successHandler,
});

export const authenticateUser = createReducer(false, {
  'AUTHENTICATE_USER_RESPONSE': sendAuthenticatedUser
});

