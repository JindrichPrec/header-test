import React from 'react';

export function Modal({isOpen, children, onClose}) {
  return isOpen ? (
    <div className="modal">
        {children}
        <button onClick={onClose}>X</button>
    </div>
  ) : null;
}
