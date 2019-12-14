import Movie from '../model/movie.model'
import { MovieActionTypes, FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILED,
         NEXT_PAGE_MOVIE, PREV_PAGE_MOVIE } from '../type/movie.type'

export function fetchMovieAction(): MovieActionTypes {
  return {
    type: FETCH_MOVIE
  }
}

export function fetchMovieSuccessAction(payload: Array<Movie>, maxPage: number, page: number): MovieActionTypes {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload,
    maxPage,
    page
  }
}

export function fetchMovieFailedAction(): MovieActionTypes {
  return {
    type: FETCH_MOVIE_FAILED
  }
}

export function nextPageAction(): MovieActionTypes {
  return {
    type: NEXT_PAGE_MOVIE
  }
}

export function prevPageAction(): MovieActionTypes {
  return {
    type: PREV_PAGE_MOVIE
  }
}
