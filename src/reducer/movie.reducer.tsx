import { AppState } from '../helper/reducer.index';
import { MovieState, MovieActionTypes, FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILED } from '../type/movie.type'

const initialState: MovieState = {
  movies: [],
  page: 1,
  maxPage: 1,
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
        movies: [...action.payload],
        maxPage: action.maxPage,
        page: action.page,
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

export const getPage = (state: AppState) => state.movieReducer.page;
export const getMaxPage = (state: AppState) => state.movieReducer.maxPage;
