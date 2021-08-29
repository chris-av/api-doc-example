import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { Router, Route, Switch } from 'react-router';

import Home from './pages/Home';
import Documentation from './pages/Documentation';

import { history } from './history';


const App = () => {
  return (
    <div>
      <Router history={history}>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/documentation" component={Documentation} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;

