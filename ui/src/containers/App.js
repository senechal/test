import React, { Component } from 'react';
import { applyMiddleware, combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const middleware = applyMiddleware(promise(), thunk, createLogger());
const store = createStore(reducer, middleware);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <FriendListApp />
        </Provider>
      </div>
    );
  }
}
