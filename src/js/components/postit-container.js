import React from 'react';
import { connect } from 'react-redux';

import { add, remove, setBeingDeleted, showDelete, showEdit,
        setBeingEdited, update, showAddWhiteboard, addWhiteboard, setWhiteBoard } from '../actions';
import WhiteBoard from './whiteboard/whiteboard';

const PostitContainer = (props) =>
  (
    <WhiteBoard
      currentWhiteboard={props.currentWhiteboard}
      showWhiteBoard={props.showWhiteBoard}
      handleAdd={props.handleAdd}
      postits={props.postits}
      confirmIsVisible={props.confirmIsVisible}
      handleEdit={props.handleEdit}
      beingDeleted={props.beingDeleted}
      handleDeletePostIt={props.handleDeletePostIt}
      showEdit={props.showEdit}
      editing={props.editing}
      handleUpdatePostIt={props.handleUpdatePostIt}
      handleUpdateClick={props.handleUpdateClick}
      closeEditDialog={props.closeEditDialog}
      handleDeleteClick={props.handleDeleteClick}
    />

  );
};

const mapStateToProps = state => ({
  postits: state.currentWhiteboard.postIts,
  confirmIsVisible: state.ui.confirmIsVisible,
  beingDeleted: state.ui.beingDeleted,
  showEdit: state.edit.showEdit,
  editing: state.edit.editing,
  showStart: state.startpage.showStart,
  showAddWhiteBoard: state.startpage.showAddWhiteBoard,
  whiteboards: state.whiteboards,
  showWhiteBoard: state.currentWhiteboard.showWhiteBoard,
  currentWhiteboard: state.currentWhiteboard.whiteboard
});


const mapDispatchToProps = dispatch => ({
  handleAddWhiteboard: () => {
    dispatch(showAddWhiteboard(true));
  },
  handleSaveWhiteBoard: (name) => {
    const wb = { name, postIts: [] };
    dispatch(addWhiteboard(wb));
    dispatch(showAddWhiteboard(false));
  },
  handleSetWhiteBoard: (data) => {
    dispatch(setWhiteBoard(data));
  },
  handleAdd: (postit) => {
    const whiteboardId = postit.whiteboard;
    dispatch(add(postit, whiteboardId));
  },
  handleDeleteClick: (id) => {
    dispatch(setBeingDeleted(id));
    dispatch(showDelete(true));
  },
  handleDeletePostIt: (whiteboardId, id) => {
    if (!id) {
      dispatch(setBeingDeleted(0));
      dispatch(showDelete(false));
    } else {
      dispatch(remove(whiteboardId, id));
      dispatch(setBeingDeleted(0));
      dispatch(showDelete(false));
    }
  },
  handleEdit: (postit) => {
    dispatch(showEdit(true));
    dispatch(setBeingEdited(postit));
  },
  handleUpdatePostIt: (id, postTitle, postText, postColor, postNotes, timeCreated) => {
    let notes = [];
    if (postNotes !== undefined) {
      notes = postNotes;
    }
    const postIt = {
      title: postTitle,
      text: postText,
      timeCreated,
      color: postColor,
      notes
    };
    dispatch(update(id, postIt));
    dispatch(showEdit(false));
    dispatch(setBeingDeleted({}));
  },
  closeEditDialog: () => {
    dispatch(showEdit(false));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostitContainer);
