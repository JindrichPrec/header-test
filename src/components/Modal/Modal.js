import React from 'react';

import { ReactComponent as Cross} from '../../assets/svg/cross-soft.svg';

import './Modal.sass';

export function Modal({isOpen, children, onClose}) {
  return isOpen ? (
    <div className="modal">
        <button className="modal__button" onClick={onClose}>
          <Cross />
        </button>
        {children}
    </div>
  ) : null;
}
