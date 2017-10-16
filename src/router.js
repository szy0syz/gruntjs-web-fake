import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from './components/index';
import NotFound from './views/notfound';

const Router = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Redirect from="/*" to="/" />
        {<Route component={NotFound} />}
      </Switch>
    </Router>
  )
}