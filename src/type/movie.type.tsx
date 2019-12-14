import Movie from '../model/movie.model';
import { AnyAction } from 'redux';

export const FETCH_MOVIE: string = 'FETCH_MOVIE';
export const FETCH_MOVIE_SUCCESS: string = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILED: string = 'FETCH_MOVIE_FAILED';

export interface MovieState {
  movies: Array<Movie>
  loading: boolean
}

interface FetchMovieAction extends AnyAction {
  type: typeof FETCH_MOVIE
}

interface FetchMovieSuccessAction extends AnyAction {
  type: typeof FETCH_MOVIE_SUCCESS
  payload: Array<Movie>
}

interface FetchMovieFailedAction extends AnyAction {
  type: typeof FETCH_MOVIE_FAILED
  payload?: {}
}

export type MovieActionTypes = FetchMovieAction | FetchMovieSuccessAction | FetchMovieFailedAction;