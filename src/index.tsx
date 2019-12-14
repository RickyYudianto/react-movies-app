import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'reflect-metadata';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';

import './index.css';
import rootReducer from './helper/reducer.index'
import rootSaga from './helper/saga.index'
import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, thunk];
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
