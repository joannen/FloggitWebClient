import React from 'react';
import Modal from 'react-modal';

import { connect } from 'react-redux';
import { add, remove, setBeingDeleted, showDelete, showEdit,
        setBeingEdited, update, showAddWhiteboard, addWhiteboard, setWhiteBoard } from '../actions';
import StartPage from './startPage';
import AddWhiteBoardForm from './whiteboard/addWhiteboardForm';
import { customStyles } from './component-styles/styles';


const WhiteboardContainer = props => (
  <div>
    <StartPage
      handleAddWhiteboard={props.handleAddWhiteboard}
      showWhiteBoard={props.showWhiteBoard}
      whiteboards={props.whiteboards}
      handleSetWhiteBoard={props.handleSetWhiteBoard}
    />
    <Modal isOpen={props.showAddWhiteBoard} style={customStyles}>
      <AddWhiteBoardForm
        isVisible={props.showAddWhiteBoard}
        handleSaveWhiteBoard={props.handleSaveWhiteBoard}
      />
    </Modal>

  </div>
);

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
    dispatch(showAddWhiteboard(false));
    dispatch(addWhiteboard(wb));
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

WhiteboardContainer.propTypes = {
  showAddWhiteBoard: React.PropTypes.bool,
  whiteboards: React.PropTypes.arrayOf(React.PropTypes.shape),
  showWhiteBoard: React.PropTypes.bool,
  handleAddWhiteboard: React.PropTypes.func,
  handleSaveWhiteBoard: React.PropTypes.func,
  handleSetWhiteBoard: React.PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardContainer);
