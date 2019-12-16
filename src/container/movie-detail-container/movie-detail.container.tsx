import React from 'react';

import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import * as movieActions from '../../action/movie.action';
import CreditComponent from '../../component/credit-component/credit.component';
import ErrorComponent from '../../component/error-component/error.component';
import LoadingComponent from '../../component/loading-component/loading.component';
import MovieOverviewComponent from '../../component/movie-overview-component/movie-overview.component';
import { LabelConstant } from '../../constant/label.constant';
import { AppState } from '../../helper/reducer.index';
import Crew from '../../model/crew.model';
import { MovieActionTypes } from '../../type/movie.type';

import './movie-detail.container.css';

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
      if (movie.id.toString() !== movieId) { return (<ErrorComponent message={LabelConstant.SOMETHING_WENT_WRONG} />) }
    }

    const casts = movie.casts.map((cast) => <CreditComponent key={cast.id} name={cast.name}
                                              job={cast.character} profilePath={cast.profile_path}></CreditComponent>);


    const crews = this.getUniqueCrews(movie.crews)
                      .map((crew) => <CreditComponent key={crew.id} name={crew.name}
                                        job='' profilePath={crew.profile_path}></CreditComponent>);

    return (
      <div className='movie-container'>
        <div className='movie-container-body'>
          <MovieOverviewComponent movie={movie} />
          <div className='credit-content-wrapper'>
            <div className='credit-type-wrapper'><h2>{LabelConstant.ACTORS}</h2></div>
            {casts}
          </div>
          <div className='credit-content-wrapper'>
            <div className='credit-type-wrapper'><h2>{LabelConstant.CREWS}</h2></div>
            {crews}
          </div>
        </div>
      </div>
    );
  }

  getUniqueCrews(crews: Array<Crew>) {
    const unique = crews.sort((a, b) => a.id - b.id).map(e => e['id'])
          .map((e, i, final) => ((i === 0) || (final.indexOf(e) === i && i)) ? i : -1).filter(e => crews[e]).map(e => crews[e]);

    return unique;
  }
}
export default withRouter(connect(mapStateToProps, mapDispatcherToProps)(MovieDetailContainer));
