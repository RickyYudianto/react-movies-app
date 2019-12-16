import { all } from 'redux-saga/effects'

import { accountSaga } from '../saga/account.saga';
import { movieSaga } from '../saga/movie.saga';

export default function* rootSaga() {
  yield all([movieSaga(), accountSaga()])
}