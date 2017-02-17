
import { call, put, takeLatest } from 'redux-saga/effects';
import {delay} from 'redux-saga';
import * as actionTypes from './constants';

// Please implement as per the need
export function* expireVerifyWithVerId() {
    try {
        yield [
            put({ type: actionTypes.VERID_VERIFIED, data: false }),
        ];
    } catch (error) {
        yield put({ type: actionTypes.VERID_VERIFIED, data: error });
    }
}

export default function* rootSaga() {
    yield takeLatest(actionTypes.EXPIRE_VERIFY_WITH_VERID, expireVerifyWithVerId)
}