import React from 'react';
import './MiscButton.css';

const MiscButton = (props) => {
  return (
    <div className="MiscButton">
      <h2>Click this Button to enter the Danger Zone</h2>
      <button onClick={props.buttonClick}>GO CRAZY</button>
    </div>
  );
}

export default MiscButton
