import React from 'react';

import MovieContainer from './container/movie.container';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MovieContainer></MovieContainer>
      </div>
    );
  }
}
