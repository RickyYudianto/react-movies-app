import React from 'react';

import { Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';

import * as movieActions from '../../action/movie.action';
import ErrorComponent from '../../component/error-component/error.component';
import LoadingComponent from '../../component/loading-component/loading.component';
import MovieComponent from '../../component/movie-component/movie.component';
import { LabelConstant } from '../../constant/label.constant';
import { AppState } from '../../helper/reducer.index';
import { MovieActionTypes } from '../../type/movie.type';

import './movie.container.css';
import { MenuConstant } from '../../constant/menu.constant';

interface MatchParams {
  menu: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {
  menu: string;
}

const mapStateToProps = (state: AppState, route: MatchProps) => {
  const { list, nowPlaying } = state.movieReducer;
  const { menu } = route;

  return { list, nowPlaying, menu };
}

const mapDispatcherToProps = (dispatch: Dispatch<MovieActionTypes>) => {
  return {
      fetchMovies: () => dispatch(movieActions.fetchMovieAction()),
      nextMoviePage: () => dispatch(movieActions.nextMoviePageAction()),
      prevMoviePage: () => dispatch(movieActions.prevMoviePageAction()),

      fetchNowPlaying: () => dispatch(movieActions.fetchNowPlayingMovieAction()),
      nextNowPlayingPage: () => dispatch(movieActions.nextNowPlayingPageAction()),
      prevNowPlayingPage: () => dispatch(movieActions.prevNowPlayingPageAction())
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

class MovieContainer extends React.Component<ReduxType, MatchProps> {
  componentDidMount() {
    this.isMoviePage() ? this.props.fetchMovies() : this.props.fetchNowPlaying();
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    if (prevProps.menu !== this.props.menu) {
      this.isMoviePage() ? this.props.fetchMovies() : this.props.fetchNowPlaying();
    }
  }

  render() {
    const { movies, page, maxPage, loading } = this.getMovieData();
    
    if (loading) {
      return (<LoadingComponent></LoadingComponent>)
    } else {
      if (movies.length <= 0) { return (<ErrorComponent></ErrorComponent>) }
    }

    const movieList = movies.map((movie) => <MovieComponent key={movie.id} movie={movie}></MovieComponent>);
    return (
      <div className='movie-container'>
        <h2 className='animate'>{this.isMoviePage() ? LabelConstant.LIST : LabelConstant.NOW_PLAYING}</h2>
        <div className='movie-container-body'>
          {movieList}
        </div>
        <div className='pagination-wrapper'>
          <Pagination className='pagination-prev' onClick={() => this.onPrevPage(page <= 1)}>
            <Pagination.Prev disabled={page <= 1}>{LabelConstant.PREV}</Pagination.Prev>
          </Pagination>
          <Pagination className='pagination-next' onClick={() => this.onNextPage(page >= maxPage)}>
            <Pagination.Next disabled={page >= maxPage}>{LabelConstant.NEXT}</Pagination.Next>
          </Pagination>
        </div>
      </div>
    );
  }

  onNextPage(disabled: boolean) {
    if (!disabled) this.isMoviePage() ? this.props.nextMoviePage() : this.props.nextNowPlayingPage();
  }

  onPrevPage(disabled: boolean) {
    if (!disabled) this.isMoviePage() ? this.props.prevMoviePage() : this.props.prevNowPlayingPage();
  }

  getMovieData() {
    const { list, nowPlaying } = this.props;

    return this.isMoviePage() ? list : nowPlaying;
  }

  isMoviePage() {
    const { menu } = this.props;
    return menu === MenuConstant.LIST;
  }

}
export default connect(mapStateToProps, mapDispatcherToProps)(MovieContainer);
