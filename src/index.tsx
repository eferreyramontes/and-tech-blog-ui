import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./App";
import './index.css';
import * as serviceWorker from './serviceWorker';

// Redux Store
import { Provider } from 'react-redux'
import { configureStore } from './store';
import { loadBlog } from './store/Blog';

import './index.css';

const store = configureStore();
store.dispatch(loadBlog())

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
