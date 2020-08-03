import React from 'react';
import { Popup } from '../Popup/Popup';

import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow-down.svg';

import './DropdownBase.sass';

export function DropdownBase({ buttonContent, dropdownContent, isPopupOpen, setPopupOpen, disabled, className }) {
  return (
    <div className={className}>
      <button disabled={disabled} className="dropdown__button" type="button" onClick={() => setPopupOpen(!isPopupOpen)}>
        {buttonContent}
        <ArrowIcon />
      </button>
      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        {dropdownContent}
      </Popup>
    </div>
  )
}
