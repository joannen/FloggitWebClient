import React from 'react';

const AddWhiteBoardForm = (props) => {
  let name;
  function saveWhiteBoard() {
    props.handleSaveWhiteBoard(name.value);
  }
  if (props.isVisible) {
    return (
      <div className="form-horizontal">
        <form>
          <div className="form-group">
            <label htmlFor="name" className="col-lg-2 control-label"> Name </label>
            <div className="col-lg-10" >
              <input
                className="form-control"
                type="text"
                placeholder="Whiteboard name"
                ref={(c) => { name = c; }}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-10 col-lg-offset-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveWhiteBoard}
              >
            Save
              </button>
            </div>
          </div>
        </form>
      </div>
);
  }
  return null;
};

AddWhiteBoardForm.propTypes = {
  isVisible: React.PropTypes.bool,
  handleSaveWhiteBoard: React.PropTypes.func

};


export default AddWhiteBoardForm;
