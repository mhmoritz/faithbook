import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { controls, content } from './reducers';
import App from './App';
import { fetchInitData } from './actions';

const rootReducer = combineReducers({ controls, content });
const middleware = applyMiddleware(promise, thunk);
const store = createStore(rootReducer, middleware);

store.dispatch(fetchInitData());

ReactDOM.render(
  React.createElement(Provider, { store }, React.createElement(App)),
  document.getElementById('root'),
);
