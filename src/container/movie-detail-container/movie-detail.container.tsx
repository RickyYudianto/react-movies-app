import React from 'react';

import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import * as movieActions from '../../action/movie.action';
import ErrorComponent from '../../component/error-component/error.component';
import LoadingComponent from '../../component/loading-component/loading.component';
import { AppState } from '../../helper/reducer.index';
import { MovieActionTypes } from '../../type/movie.type';

import './movie-detail.container.css';
import MovieOverviewComponent from '../../component/movie-overview-component/movie-overview.component';

const mapStateToProps = (state: AppState) => {
  const { movieDetail } = state.movieReducer;

  return { movieDetail };
}

const mapDispatcherToProps = (dispatch: Dispatch<MovieActionTypes>) => {
  return {
      fetchMovieDetail: (movieId: string) => dispatch(movieActions.fetchDetailMovieAction(movieId)),
  }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps> & RouteComponentProps;

class MovieDetailContainer extends React.Component<ReduxType> {
  componentDidMount() {
    const { movieId } = (this.props.match.params as any);

    this.props.fetchMovieDetail(movieId);
  }

  render() {
    const { movie, loading } = this.props.movieDetail;
    const { movieId } = (this.props.match.params as any);
    
    if (loading) {
      return (<LoadingComponent></LoadingComponent>)
    } else {
      if (movie.id.toString() !== movieId) { return (<ErrorComponent></ErrorComponent>) }
    }

    return (
      <div className='movie-container'>
        <div className='movie-container-body'>
          <MovieOverviewComponent movie={movie} />
        </div>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatcherToProps)(MovieDetailContainer));
