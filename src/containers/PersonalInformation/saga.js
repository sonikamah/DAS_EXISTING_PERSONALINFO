
import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actionTypes from './constants';
import * as apiMethod from './api';

// Please implement as per the need
export function* getIntialData() {
    try {
        let data = yield call(apiMethod.getIntialData);
        yield [
            put({ type: actionTypes.GET_INITIAL_DATA_SUCCESS, data: data }),
        ];
    } catch (error) {
        yield put({ type: actionTypes.GET_INITIAL_DATA_ERROR, data: error });
    }
}
export function* verifyWithVerId() {
    try {
        let data = yield call(apiMethod.verifyWithVerId);
        yield [
            put({ type: actionTypes.VERID_VERIFIED, data: data }),
        ];
    } catch (error) {
        yield put({ type: actionTypes.VERID_VERIFIED_ERROR, data: error });
    }
}
export function* getVerifiedUserData() {
    try {
        let data = yield call(apiMethod.getVerifiedUserData);
        yield [
            put({ type: actionTypes.VERIFIED_USER_DATA, data: data }),
        ];
    } catch (error) {
        yield put({ type: actionTypes.VERID_VERIFIED_ERROR, data: error });
    }
}

export default function* rootSaga() {
    yield [
        takeLatest(actionTypes.GET_INITIAL_DATA, getIntialData),
        takeLatest(actionTypes.VERIFY_WITH_VERID, verifyWithVerId),
        takeLatest(actionTypes.GET_VERIFIED_USER_DATA, getVerifiedUserData)
    ]
}