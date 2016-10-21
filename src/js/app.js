import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import Root from './components/root';

import Whiteboard from './components/whiteboard';
import store from './store';

// const myWhiteBoard = (
//   <Provider store={store}>
//     <Whiteboard showStart />
//   </Provider>
// );

// ReactDOM.s(top, document.querySelector('.header'));
ReactDOM.render(
  <Root store={store} />, document.querySelector('#container')
);
