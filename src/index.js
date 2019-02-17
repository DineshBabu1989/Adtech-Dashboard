import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';

import Dashboard from "../src/views/Dashboard/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/main.css";

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Dashboard/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();