import React from 'react';

const EmailForm = props => {
  return (
    <div className="row">
      <form onSubmit={props.handleButtonSubmit}>
        <div className="small-9 columns">
          <input className="email-field" type="text" placeholder="Your email here!" />
        </div>
        <div className="small-3 columns">
          <input className="submit-button" type="submit" value="Claim Your Prize!" />
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
