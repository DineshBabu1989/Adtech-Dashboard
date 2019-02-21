import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from './reducers';
import Dashboard from "../src/views/Dashboard/Dashboard";
import "./assets/sass/main.css";

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Dashboard/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
