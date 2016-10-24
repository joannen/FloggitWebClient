import React from 'react';

const TitleBar = props => (
  <h1>{props.data}</h1>
);

TitleBar.propTypes = {
  data: React.PropTypes.string
};
export default TitleBar;
