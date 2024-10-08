import React from 'react';
import './FloatingButton.css';

function FloatingButton() {
  const handleClick = () => {
    // Send a message to content script to start connecting
    window.postMessage({ type: 'START_CONNECTING' }, '*');
  };

  return (
    <button className="floating-button" onClick={handleClick}>
      Connect with All
    </button>
  );
}

export default FloatingButton;
