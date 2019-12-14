import { all } from 'redux-saga/effects'

import { movieSaga } from '../saga/movie.saga';

export default function* rootSaga() {
  yield all([movieSaga(), ])
}