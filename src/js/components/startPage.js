import React from 'react';
import { Link } from 'react-router';

import TitleBar from './titlebar';
import WhiteBoardButton from './whiteboard/whiteBoardButton';

const AddWhiteBoardButton = (props) => {
  function handleAdd() {
    // props.handleAddWhiteboard();
  }
  return (<div>
    <button type="button" className="btn btn-primary" onClick={handleAdd}>Add WhiteBoard</button>
  </div>);
};
AddWhiteBoardButton.propTypes = {
  handleAddWhiteboard: React.PropTypes.func
};

const StartPage = (props) => {
  return (
    <div>
      <TitleBar data={'Floggit'} />
      <AddWhiteBoardButton handleAddWhiteboard={props.handleAddWhiteboard} />
      <ul className="list-group">
        {props.whiteboards.map(item => (
          <Link to={item.whiteboard.name} key={item.id}>
            <WhiteBoardButton
              key={item.id}
              data={item}
              // handleAdd={props.handleAddWhiteboard()}
            />
          </Link>
              ))}
      </ul>
    </div>

);
};

StartPage.propTypes = {
  showWhiteBoard: React.PropTypes.bool,
  handleAddWhiteboard: React.PropTypes.func,
  whiteboards: React.PropTypes.arrayOf(React.PropTypes.shape),
  handleSetWhiteBoard: React.PropTypes.func
};

export default StartPage;
