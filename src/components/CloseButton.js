import React from 'react';

const CloseButton = (props) => {
  return (
    <i
      className="fa fa-times"
      aria-hidden="true"
      onClick={props.handleButtonClick}
    />
  );
};

export default CloseButton;
