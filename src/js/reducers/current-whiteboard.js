import * as types from '../constants/action_types';

const initialState = {
  showWhiteBoard: false,
  whiteboard: {},
  postIts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_WHITEBOARD : {
      return Object.assign({}, state, { showWhiteBoard: action.data });
    }
    case types.SET_WHITEBOARD: {
      return Object.assign({}, state, { showWhiteBoard: true,
                                        whiteboard: action.data,
                                        postIts: action.data.whiteboard.postIts });
    }
    case types.ADD_POSTIT: {
      const postit = Object.assign({}, action.data);
      return Object.assign({}, state, { postIts: [...state.postIts, postit] });
    }
    case types.UPDATE_POSTIT: {
      return Object.assign({}, state, { postIts: [...action.data] });
    }
    case types.REMOVE_POSTIT: {
      const id = action.data;
      return Object.assign({}, state, { postIts: state.postIts.filter(postit => postit.id !== id) });
    }


    default: {
      return state;
    }
  }
};


export default reducer;
