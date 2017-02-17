
import * as types from './constants';

export const saveNewUser = (data) => ({
  type: types.SAVE_USER_DATA,
  data
});

export const authenticateUser = (data) => ({
  type: types.AUTHENTICATE_USER,
  data
});

