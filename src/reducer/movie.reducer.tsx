import { AppState } from '../helper/reducer.index';
import * as movieActionTypes from '../type/movie.type'
import Movie from '../model/movie.model';

const initialState: movieActionTypes.MovieState = {
  list: {
    movies: [],
    page: 1,
    maxPage: 1,
    loading: false
  },
  nowPlaying: {
    movies: [],
    page: 1,
    maxPage: 1,
    loading: false
  },
  movieDetail: {
    movie: new Movie(),
    loading: false
  }
}

export function movieReducer(state = initialState, action: movieActionTypes.MovieActionTypes): movieActionTypes.MovieState {
  switch (action.type) {
    case movieActionTypes.FETCH_MOVIE: {
      return Object.assign({}, state, {
        list: Object.assign({}, state.list, {
          loading: true
        })
      });
    }
    case movieActionTypes.FETCH_MOVIE_SUCCESS: {
      return Object.assign({}, state, {
        list: Object.assign({}, state.list, {
          movies: [...action.payload],
          maxPage: action.maxPage,
          page: action.page,
          loading: false
        })
      });
    }
    case movieActionTypes.FETCH_MOVIE_FAILED: {
      return Object.assign({}, state, {
        list: Object.assign({}, state.list, {
          loading: false
        })
      });
    }
    case movieActionTypes.FETCH_NOW_PLAYING_MOVIE: {
      return Object.assign({}, state, {
        nowPlaying: Object.assign({}, state.nowPlaying, {
          loading: true
        })
      });
    }
    case movieActionTypes.FETCH_NOW_PLAYING_MOVIE_SUCCESS: {
      return Object.assign({}, state, {
        nowPlaying: Object.assign({}, state.nowPlaying, {
          movies: [...action.payload],
          maxPage: action.maxPage,
          page: action.page,
          loading: false
        })
      });
    }
    case movieActionTypes.FETCH_NOW_PLAYING_MOVIE_FAILED: {
      return Object.assign({}, state, {
        nowPlaying: Object.assign({}, state.nowPlaying, {
          loading: false
        })
      });
    }
    case movieActionTypes.FETCH_DETAIL_MOVIE: {
      return Object.assign({}, state, {
        movieDetail: Object.assign({}, state.movieDetail, {
          loading: true
        })
      });
    }
    case movieActionTypes.FETCH_DETAIL_MOVIE_SUCCESS: {
      return Object.assign({}, state, {
        movieDetail: Object.assign({}, state.movieDetail, {
          movie: Object.assign(new Movie(), action.payload),
          loading: false
        })
      });
    }
    case movieActionTypes.FETCH_DETAIL_MOVIE_FAILED: {
      return Object.assign({}, state, {
        movieDetail: Object.assign({}, state.movieDetail, {
          loading: false
        })
      });
    }
    default:
      return state
  }
}

export const getListPage = (state: AppState) => state.movieReducer.list.page;
export const getListMaxPage = (state: AppState) => state.movieReducer.list.maxPage;
export const getNowPlayingPage = (state: AppState) => state.movieReducer.nowPlaying.page;
export const getNowPlayingMaxPage = (state: AppState) => state.movieReducer.nowPlaying.maxPage;
export const getDetailMovie = (state: AppState) => state.movieReducer.movieDetail;
