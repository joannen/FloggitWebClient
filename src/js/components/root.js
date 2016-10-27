import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import WhiteboardContainer from './whiteboard-container';
import PostitContainer from './postit-container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={WhiteboardContainer} />
      <Route path="/:name" component={PostitContainer} />
    </Router>
  </Provider>
);

// Root.propTypes = {
//   store: React.PropTypes.
// };

export default Root;
