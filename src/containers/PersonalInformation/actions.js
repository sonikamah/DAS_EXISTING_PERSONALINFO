
import * as types from './constants';
console.log(types)
export const getInitialData = () => ({
  type: types.GET_INITIAL_DATA
});

export const getVerifiedUserData = () => ({
  type: types.GET_VERIFIED_USER_DATA
});
export const verifyWithVerId = () => ({
  type: types.VERIFY_WITH_VERID
});

