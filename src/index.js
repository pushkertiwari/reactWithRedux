import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Login from './components/Login';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory as history } from 'history';


ReactDOM.render(
  <Provider store={configureStore()}>
  <Router history={history}>
    <Switch>
      <Route path="/" component={App}  exact/>
      <Route path="/login" component={Login}  exact/>
    </Switch>
  </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
