import { AppState } from '../helper/reducer.index';
import { MovieState, MovieActionTypes, FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILED } from '../type/movie.type'
import Movie from '../model/movie.model';

const initialState: MovieState = {
  list: {
    movies: [],
    page: 1,
    maxPage: 1
  },
  nowPlaying: {
    movies: [],
    page: 1,
    maxPage: 1
  },
  movieDetail: new Movie(),
  loading: false
}

export function movieReducer(state = initialState, action: MovieActionTypes): MovieState {
  switch (action.type) {
    case FETCH_MOVIE: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case FETCH_MOVIE_SUCCESS: {
      return Object.assign({}, state, {
        list: Object.assign({}, state.list, {
          movies: [...action.payload],
          maxPage: action.maxPage,
          page: action.page
        }),
        loading: false
      });
    }
    case FETCH_MOVIE_FAILED: {
      return Object.assign({}, state, {
        loading: false
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
