import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as movieActions from '../action/movie.action';
import { AppState } from '../helper/reducer.index';
import { MovieActionTypes } from '../type/movie.type';
import MovieComponent from '../component/movie.component';

import './movie.container.css';

const mapStateToProps = (state: AppState) => {
  const { movies, loading } = state.movieReducer;

  return { movies, loading };
}

const mapDispatcherToProps = (dispatch: Dispatch<MovieActionTypes>) => {
  return {
      fetchMovies: () => dispatch(movieActions.fetchMovieAction())
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

class MovieContainer extends React.Component<ReduxType> {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { movies, loading } = this.props;
    if (loading) { return (<div>loading...</div>) }
    const movieList = movies.map((movie) => <MovieComponent key={movie.id} movie={movie}></MovieComponent>);
    return (
      <div className='movie-container'>
        <h2>NOW PLAYING</h2>
        <div className='movie-container-body'>
          {movieList}
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatcherToProps)(MovieContainer);
