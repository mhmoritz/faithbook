import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { controls, content } from './reducers';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import * as serviceWorker from './serviceWorker';
import { fetchInitData } from './actions';

const rootReducer = combineReducers({controls: controls, content: content})
const middleware = applyMiddleware(promise, thunk, logger);
export const store = createStore(rootReducer, middleware);

store.dispatch(fetchInitData());

ReactDOM.render(
  React.createElement(Provider, { store }, React.createElement(App)),
  document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
