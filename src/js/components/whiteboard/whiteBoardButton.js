import React from 'react';

const WhiteBoardButton = (props) => {
  function handleClick() {
    props.handleSetWhiteBoard(props.data);
  }
  return (
    <li className="post-it">
      <div className="panel-body" onClick={handleClick}>
        <h3>{props.data.whiteboard.name}</h3>
      </div>
    </li>
);
};

WhiteBoardButton.propTypes = {
  data: React.PropTypes.shape,
  handleSetWhiteBoard: React.PropTypes.func
};
export default WhiteBoardButton;
