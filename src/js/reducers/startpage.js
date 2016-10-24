import { SHOW_START_PAGE, SHOW_ADD_WHITEBOARD } from '../constants/action_types';

const initialState = {
  showStart: true,
  showAddWhiteBoard: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_START_PAGE: {
      return Object.assign({}, state, { showStart: action.data });
    }
    case SHOW_ADD_WHITEBOARD: {
      return Object.assign({}, state, { showAddWhiteBoard: action.data });
    }
    default: {
      return state;
    }
  }
};

export default reducer;
