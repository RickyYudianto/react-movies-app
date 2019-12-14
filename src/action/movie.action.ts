import Movie from '../model/movie.model'
import { MovieActionTypes, FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILED } from '../type/movie.type'

export function fetchMovieAction(): MovieActionTypes {
  return {
    type: FETCH_MOVIE
  }
}

export function fetchMovieSuccessAction(payload: Array<Movie>): MovieActionTypes {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload
  }
}

export function fetchMovieFailedAction(): MovieActionTypes {
  return {
    type: FETCH_MOVIE_FAILED
  }
}