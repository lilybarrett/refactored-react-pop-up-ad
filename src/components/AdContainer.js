import React from 'react';
import CloseButton from './CloseButton';
import EmailForm from './EmailForm';

const AdContainer = props => {
  return (
    <div className="pink row">
      <div className="small-12 text-right columns">
        <CloseButton />
      </div>
      <div className="row">
        <div className="small-9 small-centered columns">
          <PopUpText />
          <EmailForm handleButtonSubmit={props.handlebuttonSubmit}/>
        </div>
      </div>
    </div>
  );
};

export default AdContainer;
