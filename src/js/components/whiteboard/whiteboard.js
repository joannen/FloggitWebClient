import React from 'react';
import Modal from 'react-modal';
import WhiteboardHeader from './whiteboardHeader';
import ConfirmDeletePostIt from '../postit/confirmDeleteDialog';
import PostIt from '../postit/postit';
import EditDialogue from '../postit/editDialogue';

const confirmDialogStyles = {
  content: {
    top: '40%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const editDialogStyles = {
  content: {
    position: 'fixed',
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%'
  }
};

const WhiteBoard = (props) => {
  if (props.showWhiteBoard) {
    return (< div >
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
); }
  return null;
};

WhiteBoard.propTypes = {
//   handleAdd: React.PropTypes.func,
  postits: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    postIt: React.PropTypes.shape
  })),
  currentWhiteboard: React.PropTypes.shape
//   confirmIsVisible: React.PropTypes.bool,
//   handleEdit: React.PropTypes.func,
//   beingDeleted: React.PropTypes.bool,
//   handleDeletePostIt: React.PropTypes.func,
//   showEdit: React.PropTypes.bool,
//   editing: React.PropTypes.shape,
//   handleUpdatePostIt: React.PropTypes.func,
//   handleUpdateClick: React.PropTypes.func,
//   closeEditDialog: React.PropTypes.func,
//   handleDeleteClick: React.PropTypes.func
};

export default WhiteBoard;
