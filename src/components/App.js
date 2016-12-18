import React from 'react';
import AdContainer from './AdContainer'

let handleButtonSubmit = (event) => {
  event.preventDefault();
  console.log("Form Submitted");
}

let handleButtonClick = (event) => {
  confirm("Are you sure?");
}

const App = props => {
  return (
    <AdContainer
      handleButtonClick={handleButtonClick}
      handleButtonSubmit={handleButtonSubmit}
    />
  );
};

export default App;
