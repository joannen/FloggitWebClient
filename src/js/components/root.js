import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import WhiteboardContainer from './whiteboard-container';
import Whiteboard from './whiteboard/whiteboard';
// import StartPage from './startpage';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={WhiteboardContainer} >
        // <Route path="/:name" component={Whiteboard} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.shape.isRequired
};

export default Root;
