import React, { useEffect, useRef } from 'react';

import './Popup.sass';

function isChildOf(parent, child) {
  while (child !== null && child !== parent) {
    child = child.parentElement;
  }
  return child === parent;
}

export function Popup({isOpen, children, onClose}) {
  const containerRef = useRef();
  useEffect(() => {
    if (isOpen) {
      const onClick = (e) => {
        if (!isChildOf(containerRef.current, e.target)) {
          onClose();
          e.preventDefault();
        }
      };
      window.addEventListener('click', onClick);
      return () => {
        window.removeEventListener('click', onClick);
      };
    }
  }, [isOpen, onClose]);
  return isOpen ? (
    <div className="popup" ref={containerRef}>
      {children}
    </div>
  ) : null;
}
