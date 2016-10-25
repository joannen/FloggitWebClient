import React from 'react';
import { Link } from 'react-router';

import TitleBar from './titlebar';
import WhiteBoardButton from './whiteboard/whiteBoardButton';

const AddWhiteBoardButton = (props) => {
  function handleAdd() {
    props.handleAddWhiteboard();
  }
  return (<div>
    <button type="button" className="btn btn-primary" onClick={handleAdd}>Add WhiteBoard</button>
  </div>);
};
AddWhiteBoardButton.propTypes = {
  handleAddWhiteboard: React.PropTypes.func
};

const StartPage = (props) => {
  if (!props.showWhiteBoard) {
    return (
      <div>
        <TitleBar data={'FLOGGIT WHITEBOARDS'} />
        <AddWhiteBoardButton handleAddWhiteboard={props.handleAddWhiteboard} />
        <ul className="list-group">
          {props.whiteboards.map(item => (
            <Link to={item.whiteboard.name}>
              <WhiteBoardButton
                key={item.id}
                data={item}
                handleSetWhiteBoard={props.handleSetWhiteBoard}
              />
            </Link>
              ))}
        </ul>
      </div>
      // <div>
      //   <TitleBar data={'FLOGGIT WHITEBOARDS'} />
      //   <AddWhiteBoardButton handleAddWhiteboard={props.handleAddWhiteboard} />
      //   <div className="post-its-container">
          // <ul className="list-group">
          //   {props.whiteboards.map(item => (
          //     <WhiteBoardButton
          //       key={item.id}
          //       data={item}
          //       handleSetWhiteBoard={props.handleSetWhiteBoard}
          //     />
          //   ))}
          // </ul>
      //     <ul>
      //       {props.whiteboards.map(item => (
      //         <Link to="whiteboard">{item.whiteboard.name} </Link>
      //       ))}
      //     </ul>
      //   </div>
      // </div>
);
  }
  return null;
};

StartPage.propTypes = {
  showWhiteBoard: React.PropTypes.bool,
  handleAddWhiteboard: React.PropTypes.func,
  whiteboards: React.PropTypes.arrayOf(React.PropTypes.shape),
  handleSetWhiteBoard: React.PropTypes.func
};

export default StartPage;
