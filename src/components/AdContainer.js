import React from 'react';
import CloseButton from './CloseButton';
import EmailForm from './EmailForm';
import PopUpText from './PopUpText';

const AdContainer = props => {
  return (
    <div className="pink row">
      <div className="small-12 text-right columns">
        <CloseButton handleButtonClick={props.handleButtonClick}/>
      </div>
      <div className="row">
        <div className="small-9 small-centered columns">
          <PopUpText />
          <EmailForm handleButtonSubmit={props.handleButtonSubmit}/>
        </div>
      </div>
    </div>
  );
};

export default AdContainer;
