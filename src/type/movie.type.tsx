import Movie from '../model/movie.model';
import { AnyAction } from 'redux';

export const FETCH_MOVIE: string = 'FETCH_MOVIE';
export const FETCH_MOVIE_SUCCESS: string = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILED: string = 'FETCH_MOVIE_FAILED';
export const PREV_PAGE_MOVIE: string = 'PREV_PAGE_MOVIE';
export const NEXT_PAGE_MOVIE: string = 'NEXT_PAGE_MOVIE';
export const MAX_PAGE_MOVIE: string = 'MAX_PAGE_MOVIE';

export const FETCH_NOW_PLAYING_MOVIE: string = 'FETCH_NOW_PLAYING_MOVIE';
export const FETCH_NOW_PLAYING_MOVIE_SUCCESS: string = 'FETCH_NOW_PLAYING_MOVIE_SUCCESS';
export const FETCH_NOW_PLAYING_MOVIE_FAILED: string = 'FETCH_NOW_PLAYING_MOVIE_FAILED';
export const PREV_NOW_PLAYING_PAGE_MOVIE: string = 'PREV_NOW_PLAYING_PAGE_MOVIE';
export const NEXT_NOW_PLAYING_PAGE_MOVIE: string = 'NEXT_NOW_PLAYING_PAGE_MOVIE';
export const MAX_NOW_PLAYING_PAGE_MOVIE: string = 'MAX_NOW_PLAYING_PAGE_MOVIE';

export interface MovieState {
  list: {
    movies: Array<Movie>
    page: number
    maxPage: number
    loading: boolean
  }
  nowPlaying: {
    movies: Array<Movie>
    page: number
    maxPage: number
    loading: boolean
  }
  movieDetail: Movie
}

interface FetchMovieAction extends AnyAction {
  type: typeof FETCH_MOVIE
}

interface FetchMovieSuccessAction extends AnyAction {
  type: typeof FETCH_MOVIE_SUCCESS
  payload: Array<Movie>
  maxPage: number
  page: number
}

interface FetchMovieFailedAction extends AnyAction {
  type: typeof FETCH_MOVIE_FAILED
}

interface PrevPageMovieAction extends AnyAction {
  type: typeof PREV_PAGE_MOVIE
}

interface NextPageMovieAction extends AnyAction {
  type: typeof NEXT_PAGE_MOVIE
}

interface SetMaxPageMovieAction  extends AnyAction {
  type: typeof MAX_PAGE_MOVIE
}

interface FetchNowPlayingMovieAction extends AnyAction {
  type: typeof FETCH_NOW_PLAYING_MOVIE
}

interface FetchNowPlayingMovieSuccessAction extends AnyAction {
  type: typeof FETCH_NOW_PLAYING_MOVIE_SUCCESS
  payload: Array<Movie>
  maxPage: number
  page: number
}

interface FetchNowPlayingMovieFailedAction extends AnyAction {
  type: typeof FETCH_NOW_PLAYING_MOVIE_FAILED
}

interface PrevNowPlayingPageMovieAction extends AnyAction {
  type: typeof PREV_NOW_PLAYING_PAGE_MOVIE
}

interface NextNowPlayingPageMovieAction extends AnyAction {
  type: typeof NEXT_NOW_PLAYING_PAGE_MOVIE
}

interface SetNowPlayingMaxPageMovieAction  extends AnyAction {
  type: typeof MAX_NOW_PLAYING_PAGE_MOVIE
}

export type MovieActionTypes =
  FetchMovieAction
  | FetchMovieSuccessAction
  | FetchMovieFailedAction
  | PrevPageMovieAction
  | NextPageMovieAction
  | SetMaxPageMovieAction
  | FetchNowPlayingMovieAction
  | FetchNowPlayingMovieSuccessAction
  | FetchNowPlayingMovieFailedAction
  | PrevNowPlayingPageMovieAction
  | NextNowPlayingPageMovieAction
  | SetNowPlayingMaxPageMovieAction;