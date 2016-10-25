import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router, Route, browserHistory } from 'react-router';

import Root from './components/root';

// import WhiteboardContainer from './components/whiteboard-container';
import store from './store';

// const myWhiteBoard = (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/(:filter)" component={WhiteboardContainer} />
//     </Router>
//   </Provider>
// );

// ReactDOM.s(top, document.querySelector('.header'));
ReactDOM.render(
  <Root store={store} />, document.querySelector('#container')
);
