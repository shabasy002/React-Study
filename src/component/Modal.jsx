// components/Modal.js
import React from "react";
import "./../Modal.css"; // optional styling

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
