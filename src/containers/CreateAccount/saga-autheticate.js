
import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actionTypes from './constants';
import apiMethod from './api';

// Please implement as per the need
function* authenticateUser() {
  try {
    let userInfo = yield call(apiMethod);
    yield [
      put({ type: actionTypes.AUTHENTICATE_USER_RESPONSE, userInfo: userInfo }),
    ];
  } catch (error) {
    yield put({ type: actionTypes.AUTHENTICATE_USER_RESPONSE, userInfo: error });
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(actionTypes.AUTHENTICATE_USER, authenticateUser)];
}