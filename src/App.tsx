import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from './helper/reducer.index';
import * as movieActions from './action/movie.action';
import logo from './logo.svg';
import './App.css';
import { MovieActionTypes } from './type/movie.type';

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

class App extends React.Component<ReduxType> {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatcherToProps)(App);
