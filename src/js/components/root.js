import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import WhiteBoard from './whiteboard';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={WhiteBoard} />
    </Router>
  </Provider>
);

export default Root;
