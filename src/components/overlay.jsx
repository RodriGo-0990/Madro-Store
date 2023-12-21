import React from 'react';
import '../css/overlay.css';

const Overlay = ({ isOpen }) => {
  return isOpen ? <div className="overlay"></div> : null;
};

export default Overlay;