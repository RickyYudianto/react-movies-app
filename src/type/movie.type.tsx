import { AnyAction } from 'redux';

import Cast from '../model/cast.model';
import Crew from '../model/crew.model';
import Movie from '../model/movie.model';

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

export const FETCH_DETAIL_MOVIE: string = 'FETCH_DETAIL_MOVIE';
export const FETCH_DETAIL_MOVIE_SUCCESS: string = 'FETCH_DETAIL_MOVIE_SUCCESS';
export const FETCH_DETAIL_MOVIE_FAILED: string = 'FETCH_DETAIL_MOVIE_FAILED';

export const FETCH_MOVIE_CREDITS: string = 'FETCH_MOVIE_CREDITS';
export const FETCH_MOVIE_CREDITS_SUCCESS: string = 'FETCH_MOVIE_CREDITS_SUCCESS';
export const FETCH_MOVIE_CREDITS_FAILED: string = 'FETCH_MOVIE_CREDITS_FAILED';

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
  movieDetail: {
    movie: Movie
    loading: boolean
  }
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

interface FetchDetailMovieAction extends AnyAction {
  type: typeof FETCH_DETAIL_MOVIE
  movieId: string
}

interface FetchDetailMovieSuccessAction extends AnyAction {
  type: typeof FETCH_DETAIL_MOVIE_SUCCESS
  payload: Movie
}

interface FetchDetailMovieFailedAction extends AnyAction {
  type: typeof FETCH_DETAIL_MOVIE_FAILED
}

interface FetchMovieCreditsAction extends AnyAction {
  type: typeof FETCH_MOVIE_CREDITS
  movieId: string
}

interface FetchMovieCreditsSuccessAction extends AnyAction {
  type: typeof FETCH_MOVIE_CREDITS_SUCCESS
  casts: Array<Cast>
  crews: Array<Crew>
}

interface FetchMovieCreditsFailedAction extends AnyAction {
  type: typeof FETCH_MOVIE_CREDITS_FAILED
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
  | SetNowPlayingMaxPageMovieAction
  | FetchDetailMovieAction
  | FetchDetailMovieSuccessAction
  | FetchDetailMovieFailedAction
  | FetchMovieCreditsAction
  | FetchMovieCreditsSuccessAction
  | FetchMovieCreditsFailedAction;