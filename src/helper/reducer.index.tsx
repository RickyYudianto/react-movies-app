import { combineReducers } from 'redux';

import { movieReducer } from '../reducer/movie.reducer';
import { MovieState } from '../type/movie.type';

export interface AppState {
  movieReducer: MovieState
}

const rootReducer = combineReducers({
  movieReducer
});
export default rootReducer;