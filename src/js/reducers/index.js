import { combineReducers } from 'redux';

import postits from './postit';
import ui from './ui';
import edit from './edit';
import startpage from './startpage';
import whiteboards from './whiteboard';
import currentWhiteboard from './current-whiteboard';

const reducer = combineReducers({
  postits, ui, edit, startpage, whiteboards, currentWhiteboard
});

export default reducer;
