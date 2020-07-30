import React from 'react';

export function Modal({isOpen, children, onClose}) {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="modal">
            {children}
            <button onClick={onClose}>X</button>
        </div>
    )
}