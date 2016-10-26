import React from 'react';
import Modal from 'react-modal';
import WhiteboardHeader from './whiteboardHeader';
import ConfirmDeletePostIt from '../postit/confirmDeleteDialog';
import PostIt from '../postit/postit';
import EditDialogue from '../postit/editDialogue';
import { confirmDialogStyles, editDialogStyles } from '../component-styles/styles';

const WhiteBoard = (props) => {
  console.log(props.currentWhiteboard);
  return (
    < div >
      <WhiteboardHeader onAddPostIt={props.handleAdd} currentWhiteboard={props.currentWhiteboard} />
      <div className="post-its-container">
        <ul className="list-group">
          {props.postits.map(item => (<
        PostIt key={item.id}
            id={item.id}
            data={item.postIt}
            confirmIsVisible={props.confirmIsVisible}
            onDelete={props.handleDeleteClick}
            onEdit={props.handleEdit}
          />)) }
        </ul>
      < /div >

      <Modal isOpen={props.confirmIsVisible} style={confirmDialogStyles}>
        <ConfirmDeletePostIt
          isVisible={props.confirmIsVisible}
          id={props.beingDeleted}
          onDelete={props.handleDeletePostIt}
          currentWhiteboard={props.currentWhiteboard}
        />
      </Modal>

      <Modal isOpen={props.showEdit} style={editDialogStyles}>
        <EditDialogue
          isVisible={props.showEdit}
          data={props.editing}
          onUpdatePostIt={props.handleUpdatePostIt}
          onUpdate={props.handleUpdateClick}
          onExit={props.closeEditDialog}
        />
      </Modal>
    </div>
);
};

WhiteBoard.propTypes = {
  handleAdd: React.PropTypes.func,
  postits: React.PropTypes.arrayOf(React.PropTypes.shape()),
  currentWhiteboard: React.PropTypes.shape,
  confirmIsVisible: React.PropTypes.bool,
  handleEdit: React.PropTypes.func,
  beingDeleted: React.PropTypes.shape,
  handleDeletePostIt: React.PropTypes.func,
  showEdit: React.PropTypes.bool,
  editing: React.PropTypes.shape,
  handleUpdatePostIt: React.PropTypes.func,
  handleUpdateClick: React.PropTypes.func,
  closeEditDialog: React.PropTypes.func,
  whiteboards: React.PropTypes.arrayOf(React.PropTypes.shape())
};

export default WhiteBoard;
