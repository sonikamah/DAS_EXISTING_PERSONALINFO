
import { call, put, takeLatest } from 'redux-saga/effects';
import {delay} from 'redux-saga';
import * as actionTypes from './constants';
import * as apiMethod from './api';

// Please implement as per the need
export function* getVerifiedUserData() {
    try {
            let data = yield call(apiMethod.getVerifiedUserData);
            yield [
            put({ type: actionTypes.VERID_VERIFIED_USER_DATA, data: data}),
        ];
    } catch (error) {
       yield put({ type: actionTypes.VERID_VERIFIED_USER_DATA, data: error });
    }
}

export default function* rootSaga() {
    yield takeLatest(actionTypes.GET_VERIFIED_VERID_USER_DATA, getVerifiedUserData);
}