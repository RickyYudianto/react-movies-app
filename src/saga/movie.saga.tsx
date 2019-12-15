import { notify } from 'react-notify-toast';
import { all, put, takeEvery, select } from 'redux-saga/effects';

import * as actions from '../action/movie.action';
import { convertJsonToArrayOfObject, convertJsonToObject } from '../helper/util';
import Movie from '../model/movie.model';
import { getListMaxPage, getListPage, getNowPlayingMaxPage, getNowPlayingPage } from '../reducer/movie.reducer';
import * as services from '../service/movie.service';
import * as movieActionTypes from '../type/movie.type'

function* fetchMovies(params: any = {}) {
  try {
    params = yield updateFetchWithPage(params, true);
    const response = yield services.getDiscoverMovies(params);
    const movieList: Array<Movie> = convertJsonToArrayOfObject(Movie, response.data.results);

    yield put(actions.fetchMovieSuccessAction(movieList, response.data.total_pages, response.data.page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

function* fetchNowPlayingMovies(params: any = {}) {
  try {    
    params = yield updateFetchWithPage(params, false);
    const response = yield services.getNowPlayingMovies(params);
    const movieList: Array<Movie> = convertJsonToArrayOfObject(Movie, response.data.results);

    yield put(actions.fetchNowPlayingMovieSuccessAction(movieList, response.data.total_pages, response.data.page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    yield put(actions.fetchNowPlayingMovieFailedAction());
    yield calledError(error.message);
  }
}

export function* nextNowPlayingPageMovies() {
  const page = yield select(getNowPlayingPage);
  const maxPage = yield select(getNowPlayingMaxPage);

  const params = {
    page: page+1 > maxPage ? maxPage : page+1
  };

  yield fetchNowPlayingMovies(params)
}

export function* prevNowPlayingPageMovies() {
  const page = yield select(getNowPlayingPage);
  const params = {
    page: page-1 < 1 ? 1 : page-1
  };

  yield fetchNowPlayingMovies(params)
}

export function* fetchDetailMovie(action: any) {
  try {
    const response = yield services.getMovieDetail(action.movieId);
    const movie: Movie = convertJsonToObject(Movie, response.data);

    yield put(actions.fetchDetailMovieSuccessAction(movie));
  } catch (error) {
    yield put(actions.fetchDetailMovieFailedAction());
    yield calledError(error.message);
  }
}

export function* calledError(message: string) {
  yield notify.show(message, 'error', 2000);
}

export function* updateFetchWithPage(params: any, isMovie: boolean) {
  if (!params.page) {
    const page = isMovie ? yield select(getListPage) : yield select(getNowPlayingPage);
    params = {
      page
    };
  }

  return params;
}

export function* movieSaga() {
  yield all([
    takeEvery(movieActionTypes.FETCH_MOVIE, fetchMovies),
    takeEvery(movieActionTypes.NEXT_PAGE_MOVIE, nextPageMovies),
    takeEvery(movieActionTypes.PREV_PAGE_MOVIE, prevPageMovies),

    takeEvery(movieActionTypes.FETCH_NOW_PLAYING_MOVIE, fetchNowPlayingMovies),
    takeEvery(movieActionTypes.NEXT_NOW_PLAYING_PAGE_MOVIE, nextNowPlayingPageMovies),
    takeEvery(movieActionTypes.PREV_NOW_PLAYING_PAGE_MOVIE, prevNowPlayingPageMovies),

    takeEvery(movieActionTypes.FETCH_DETAIL_MOVIE, fetchDetailMovie)
  ]);
}