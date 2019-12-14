import React from 'react';
import { connect } from 'react-redux';

import { Pagination } from 'react-bootstrap';
import { Dispatch } from 'redux';

import * as movieActions from '../action/movie.action';
import ErrorComponent from '../component/error.component';
import LoadingComponent from '../component/loading.component';
import MovieComponent from '../component/movie.component';
import { LabelConstant } from '../constant/label.constant';
import { AppState } from '../helper/reducer.index';
import { MovieActionTypes } from '../type/movie.type';

import './movie.container.css';

const mapStateToProps = (state: AppState) => {
  const { movies, page, maxPage, loading } = state.movieReducer;

  return { movies, page, maxPage, loading };
}

const mapDispatcherToProps = (dispatch: Dispatch<MovieActionTypes>) => {
  return {
      fetchMovies: () => dispatch(movieActions.fetchMovieAction()),
      nextPage: () => dispatch(movieActions.nextPageAction()),
      prevPage: () => dispatch(movieActions.prevPageAction())
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

class MovieContainer extends React.Component<ReduxType> {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { movies, page, maxPage, loading } = this.props;
    
    if (loading) { return (<LoadingComponent></LoadingComponent>) }

    if (movies.length <= 0) { return (<ErrorComponent></ErrorComponent>) }

    const movieList = movies.map((movie) => <MovieComponent key={movie.id} movie={movie}></MovieComponent>);
    return (
      <div className='movie-container'>
        <h2>{LabelConstant.NOW_PLAYING}</h2>
        <div className='movie-container-body'>
          {movieList}
        </div>
        <div className='pagination-wrapper'>
          <Pagination className='pagination-prev' onClick={() => this.onPrevPage()}>
            <Pagination.Prev disabled={page <= 1}>{LabelConstant.PREV}</Pagination.Prev>
          </Pagination>
          <Pagination className='pagination-next' onClick={() => this.onNextPage()}>
            <Pagination.Next disabled={page >= maxPage}>{LabelConstant.NEXT}</Pagination.Next>
          </Pagination>
        </div>
      </div>
    );
  }

  onNextPage() {
    this.props.nextPage();
  }

  onPrevPage() {
    this.props.prevPage();
  }
}
export default connect(mapStateToProps, mapDispatcherToProps)(MovieContainer);
