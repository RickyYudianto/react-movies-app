import { MovieState, MovieActionTypes, FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILED } from '../type/movie.type'

const initialState: MovieState = {
  movies: [],
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
