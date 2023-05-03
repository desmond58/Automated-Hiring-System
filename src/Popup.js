import React from "react";
import "./Popup.css";

const Popup = ({ children, handleClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={handleClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
