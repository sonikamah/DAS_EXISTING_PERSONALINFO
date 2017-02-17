
import createReducer from '../../utils/createReducer';
import {fromJS} from 'immutable';
import { combineReducers } from 'redux';


function sendUserData(state, action) {
  return Object.assign({},state, action.data);
}

export const verIdUserData = createReducer({}, {
  'VERID_VERIFIED_USER_DATA': sendUserData
});


