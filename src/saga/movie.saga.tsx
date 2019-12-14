import { put, takeEvery } from 'redux-saga/effects'

import * as actions from '../action/movie.action';
import { convertJsonToArrayOfObject } from '../helper/util';
import Movie from '../model/movie.model';
import * as services from '../service/movie.service';
import { FETCH_MOVIE } from '../type/movie.type'

function* fetchMovies() {
  try {
    const response = yield services.getDiscoverMovies();
    const movieList: Array<Movie> = convertJsonToArrayOfObject(Movie, response.data.results);

    yield put(actions.fetchMovieSuccessAction(movieList));
  } catch (error) {
    yield put(actions.fetchMovieFailedAction());
  }
}

export function* movieSaga() {
  yield takeEvery(FETCH_MOVIE, fetchMovies);
}