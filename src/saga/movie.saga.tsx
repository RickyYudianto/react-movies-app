import { notify } from 'react-notify-toast';
import { all, put, takeEvery, select } from 'redux-saga/effects';

import * as actions from '../action/movie.action';
import { convertJsonToArrayOfObject } from '../helper/util';
import Movie from '../model/movie.model';
import { getListMaxPage, getListPage } from '../reducer/movie.reducer';
import * as services from '../service/movie.service';
import { FETCH_MOVIE, NEXT_PAGE_MOVIE, PREV_PAGE_MOVIE } from '../type/movie.type'

function* fetchMovies(params: any = {}) {
  try {
    const response = yield services.getDiscoverMovies(params);
    const movieList: Array<Movie> = convertJsonToArrayOfObject(Movie, response.data.results);

    yield put(actions.fetchMovieSuccessAction(movieList, response.data.total_pages, response.data.page));
  } catch (error) {
    yield put(actions.fetchMovieFailedAction());
    yield calledError(error.message);
  }
}

export function* nextPageMovies() {
  const page = yield select(getListPage);
  const maxPage = yield select(getListMaxPage);
  const params = {
    page: page+1 > maxPage ? maxPage : page+1
  };

  yield fetchMovies(params)
}

export function* prevPageMovies() {
  const page = yield select(getListPage);
  const params = {
    page: page-1 < 1 ? 1 : page-1
  };

  yield fetchMovies(params)
}

export function* calledError(message: string) {
  yield notify.show(message, 'error', 2000);
}

export function* movieSaga() {
  yield all([
    takeEvery(FETCH_MOVIE, fetchMovies),
    takeEvery(NEXT_PAGE_MOVIE, nextPageMovies),
    takeEvery(PREV_PAGE_MOVIE, prevPageMovies)
  ]);
}