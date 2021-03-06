import Cast from '../model/cast.model'
import Crew from '../model/crew.model'
import Movie from '../model/movie.model'
import * as movieActionTypes from '../type/movie.type'

export function fetchMovieAction(): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.FETCH_MOVIE
  }
}

export function fetchMovieSuccessAction(payload: Array<Movie>, maxPage: number, page: number): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.FETCH_MOVIE_SUCCESS,
    payload,
    maxPage,
    page
  }
}

export function fetchMovieFailedAction(): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.FETCH_MOVIE_FAILED
  }
}

export function nextMoviePageAction(): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.NEXT_PAGE_MOVIE
  }
}

export function prevMoviePageAction(): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.PREV_PAGE_MOVIE
  }
}

export function fetchNowPlayingMovieAction(): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.FETCH_NOW_PLAYING_MOVIE
  }
}

export function fetchNowPlayingMovieSuccessAction(payload: Array<Movie>, maxPage: number, page: number): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.FETCH_NOW_PLAYING_MOVIE_SUCCESS,
    payload,
    maxPage,
    page
  }
}

export function fetchNowPlayingMovieFailedAction(): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.FETCH_NOW_PLAYING_MOVIE_FAILED
  }
}

export function nextNowPlayingPageAction(): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.NEXT_NOW_PLAYING_PAGE_MOVIE
  }
}

export function prevNowPlayingPageAction(): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.PREV_NOW_PLAYING_PAGE_MOVIE
  }
}

export function fetchDetailMovieAction(movieId: string): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.FETCH_DETAIL_MOVIE,
    movieId
  }
}

export function fetchDetailMovieSuccessAction(payload: Movie): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.FETCH_DETAIL_MOVIE_SUCCESS,
    payload
  }
}

export function fetchDetailMovieFailedAction(): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.FETCH_DETAIL_MOVIE_FAILED
  }
}

export function fetchMovieCreditsAction(movieId: string): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.FETCH_MOVIE_CREDITS,
    movieId
  }
}

export function fetchMovieCreditsSuccessAction(casts: Array<Cast>, crews: Array<Crew>): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.FETCH_MOVIE_CREDITS_SUCCESS,
    casts,
    crews
  }
}

export function fetchMovieCreditsFailedAction(): movieActionTypes.MovieActionTypes {
  return {
    type: movieActionTypes.FETCH_MOVIE_CREDITS_FAILED
  }
}
