import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Route } from 'react-router';
import Navigation from '../Navigation';

// dev-tool
import Root from '../../helpers/Root';

// routes
import About from '../../components/About';
import BeerList from '../../components/BeerList';
import SingleBeer from '../../components/SingleBeer';
import { cartStore } from '../../stores';

// App component
export default hot(module)(props => {
  return (
    <Root>
      <Router history={props.history}>
        <>
          <Navigation cartStore={cartStore} />
          <Route exact={true} path="/" component={BeerList} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/beer/:id" component={SingleBeer} />
        </>
      </Router>
    </Root>
  )
});