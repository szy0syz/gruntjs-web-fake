import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import home from './components/index';

const Router = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={index} />

        <Redirect from="/*" to="/" />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  )
}