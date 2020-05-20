import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/modal.css";

function DrinkModal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>IM A SEXY MODAL</h3>
      <button 
      type="button"
      onClick={() => {
          console.log("typeof setshowmodal", typeof setShowModal);
        props.setShowModal(false)
      }}
      >Close</button>
      </div>
    </div>
  );
}

function DrinkModalPortal(props) {
  return ReactDOM.createPortal(DrinkModal(props), document.body);
}

export default DrinkModalPortal;
