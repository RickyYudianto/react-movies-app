import React from 'react';

import Notifications from 'react-notify-toast';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { MenuConstant } from './constant/menu.constant';
import { PathConstant } from './constant/path.constant';
import MenuComponent from './component/menu-component/menu.component';
import MovieContainer from './container/movie-container/movie.container';
import MovieDetailContainer from './container/movie-detail-container/movie-detail.container';
import RegisterContainer from './container/register-container/register.container';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MenuComponent>
            <Switch>
              <Route path={PathConstant.MOVIE + PathConstant.LIST} render={(props) => <MovieContainer {...props} menu={MenuConstant.LIST} />} />
              <Route path={PathConstant.MOVIE + PathConstant.NOW_PLAYING} render={(props) => <MovieContainer {...props} menu={MenuConstant.NOW_PLAYING} />} />
              <Route path={`${PathConstant.MOVIE}${PathConstant.DETAIL}/:movieId`} render={(props) => <MovieDetailContainer {...props} />} />
              <Route path={PathConstant.REGISTER} render={(props) => <RegisterContainer {...props} />} />

              <Route path={PathConstant.ROOT} render={() => <Redirect to={PathConstant.MOVIE + PathConstant.LIST} /> }/>
            </Switch>
          </MenuComponent>
          <Notifications></Notifications>
          
        </Router>
      </div>
    );
  }
}
