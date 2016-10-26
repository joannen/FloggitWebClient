import React from 'react';
import TitleBar from '../titlebar';
import AddPostItButton from '../postit/addPostItButton';

const WhiteboardHeader = props => (
  <div>
    <TitleBar data={`${props.currentWhiteboard.whiteboard.name} Whiteboard`} />
    <AddPostItButton onAddPostIt={props.onAddPostIt} currentWhiteboard={props.currentWhiteboard} />
  </div>);
WhiteboardHeader.propTypes = {
  onAddPostIt: React.PropTypes.func,
  currentWhiteboard: React.PropTypes.shape
};
export default WhiteboardHeader;
