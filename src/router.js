import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from './views/home';
import Docs from './views/docs';
import NotFound from './views/notfound';
import Plugins from './views/plugins';

// import API from './views/api';
import APIGrunt from './views/api/grunt';

const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/started" component={Docs} />
        <Route exact path="/plugins" component={Plugins} />
        <Route exact path="/docs" component={Docs} />
        <Route exact path="/api" component={APIGrunt} />
        <Route exact path="/api/grunt" component={APIGrunt} />
        {/* <Redirect from="/started" to="/docs" /> */}
        {<Redirect from="/*" to="/" />}
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App;