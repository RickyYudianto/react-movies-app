import { notify } from 'react-notify-toast';
import { all, takeEvery } from 'redux-saga/effects';

import * as services from '../service/account.service';
import * as accountActionTypes from '../type/account.type'

function* sendRegistration(params: any = {}) {
  try {
    const response = yield services.postRegistration(params);
    console.log(response);

  } catch (error) {
    yield calledError(error.message);
  }
}

export function* calledError(message: string) {
  yield notify.show(message, 'error', 2000);
}

export function* accountSaga() {
  yield all([
    takeEvery(accountActionTypes.REGISTER, sendRegistration)
  ]);
}