/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/

import {Map} from 'immutable';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
// import browserStorage from './browserStorage'; //used for login 
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';

const routingMiddleware = routerMiddleware(browserHistory)

const sessionMiddleware = _store => next => action => {
  let result = next(action)
  return result
}

export default createStore(
  reducer,
  Map(),
  compose(
    applyMiddleware(thunk, sessionMiddleware, routingMiddleware),
    window && window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
