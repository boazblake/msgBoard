import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './app';
import SplashPage from './splashPage';

const Horizon = require('@horizon/client');
const horizon = Horizon({ authType: 'unauthenticated' });


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App} />
  </Router>
  ), document.querySelector('.app'));