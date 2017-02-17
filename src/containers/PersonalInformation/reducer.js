
import createReducer from '../../utils/createReducer';
import { fromJS } from 'immutable';
import { combineReducers } from 'redux';

function getIntialData(state, action) {
  return Object.assign({}, state, action.data);
}

function userDataResponse(state, action) {
  return Object.assign({}, state, action.data);
}

function verifyWithThirdParty(state, action) {
  return action.data;
}


export const userResponseReducer = createReducer({}, {
  'GET_INITIAL_DATA_SUCCESS': getIntialData
});

export const verifyWithVerId = createReducer(false, {
  'VERID_VERIFIED': verifyWithThirdParty
});

export const getVerifiedUserData = createReducer({}, {
  'VERIFIED_USER_DATA': getIntialData
});

