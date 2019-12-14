import React from 'react';

import Notifications from 'react-notify-toast';

import MovieContainer from './container/movie.container';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MovieContainer></MovieContainer>
        <Notifications></Notifications>
      </div>
    );
  }
}
