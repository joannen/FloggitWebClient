import axios from 'axios';
import socketIOclient from 'socket.io-client';
import * as types from '../constants/action_types';

const internalAddPostIt = postit => ({
  type: types.ADD_POSTIT,
  data: postit
});

const internalRemove = id => ({
  type: types.REMOVE_POSTIT,
  data: id
});

const internalUpdatePostits = postits => ({
  type: types.UPDATE_POSTIT,
  data: postits
});

const internalUpdateWhiteboards = whiteboards => ({
  type: types.UPDATE_WHITEBOARDS,
  data: whiteboards
});


const internalError = errorText => ({
  type: types.ERROR,
  data: errorText
});
export const getAllPostits = id => (dispatch) => {
  axios.get(`http://localhost:8080/api/v1/whiteboards/${id}`)
              .then((response) => {
                console.log('getAll', response.data);
                dispatch(internalUpdatePostits(response.data));
              });
};

export const add = (postit, whiteboardId) => (dispatch) => {
  axios.post(`http://localhost:8080/api/v1/whiteboards/${whiteboardId}/postits`, postit)
        .then((response) => {
          const newPostit = {
            id: response.data.id,
            postIt: postit
          };
          dispatch(internalAddPostIt(newPostit));
          dispatch(getAllPostits(whiteboardId));
        }).catch((error) => {
          dispatch(internalError('Could not add postit'));
        });
};

export const remove = (whiteboardId, id) => (dispatch) => {
  axios.delete(`http://localhost:8080/api/v1/whiteboards/${whiteboardId}/postits/${id}`)
        .then((response) => {
          dispatch(internalRemove(id));
          dispatch(getAllPostits(whiteboardId));
        }).catch((error) => {
          dispatch(internalError('Could not remove postit'));
        });
};

// export const startSocket = () => (dispatch) => {
//   console.log('SOCKET STARTED');
//   const socket = socketIOclient('http://localhost:8080');
//
//   socket.on('whiteboard-update', (data) => {
//     console.log('update', data);
//     const postits = data;
//     dispatch(internalUpdatePostits(postits));
//   });
// };

export const update = (id, postit) => (dispatch) => {
  axios.put(`http://localhost:8080/api/v1/postits/${id}`, postit)
        .then((response) => {
          dispatch(getAllPostits());
        });
};

export const showDelete = show => ({
  type: types.SHOW_CONFIRM_DELETE_DIALOG,
  data: show
});

export const setBeingDeleted = id => ({
  type: types.SET_BEING_DELETED,
  data: id
});

export const showEdit = show => ({
  type: types.SHOW_EDIT_DIALOG,
  data: show
});

export const setBeingEdited = id => ({
  type: types.SET_BEING_EDITED,
  data: id
});

export const showStartPage = show => ({
  type: types.SHOW_START_PAGE,
  data: show
});

export const showAddWhiteboard = show => ({
  type: types.SHOW_ADD_WHITEBOARD,
  data: show
});

export const internalAddWhiteboard = item => ({
  type: types.ADD_WHITEBOARD,
  data: item
});

export const addWhiteboard = whiteboard => (dispatch) => {
  axios.post('http://localhost:8080/api/v1/whiteboards', whiteboard)
        .then((response) => {
          const wb = {
            id: response.data.id,
            whiteboard

          };
          dispatch(internalAddWhiteboard(wb));
          dispatch(getAllPostits());
        });
};

export const getAllWhiteboards = () => (dispatch) => {
  axios.get('http://localhost:8080/api/v1/whiteboards')
        .then((response) => {
          dispatch(internalUpdateWhiteboards(response.data));
        });
};

export const showWhiteBoard = data => ({
  type: types.SHOW_WHITEBOARD,
  data
});

export const setWhiteBoard = whiteboard => ({
  type: types.SET_WHITEBOARD,
  data: whiteboard
});
