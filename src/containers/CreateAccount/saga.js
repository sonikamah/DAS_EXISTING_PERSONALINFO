
import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actionTypes from './constants';
import * as apiMethod from './api';

// Please implement as per the need
export function* saveUserData(userInfo) {
    try {
        ;
        yield [
            put({ type: actionTypes.SAVE_USER_SAGA_SUCCESS, userInfo: userInfo.data }),
        ];
    } catch (error) {
        yield put({ type: actionTypes.SAVE_USER_SAGA_ERROR, userInfo: error });
    }
}
function* authenticateUser(userLogin) {
    try {
        let userInfo = yield call(apiMethod.isUserAuthenticated, userLogin.data);
        yield [
            put({ type: actionTypes.AUTHENTICATE_USER_RESPONSE, isUserAuthenticated: userInfo }),
        ];
    } catch (error) {
        yield put({ type: actionTypes.AUTHENTICATE_USER_RESPONSE, isUserAuthenticated: error });
    }
}

export default function* rootSaga() {
    yield [takeLatest(actionTypes.SAVE_USER_DATA, saveUserData), takeLatest(actionTypes.AUTHENTICATE_USER, authenticateUser)];
}