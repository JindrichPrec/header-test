import React, { useState } from 'react';

import { DropdownBase } from '../DropdownBase/DropdownBase';
import { BackgroundDropdownContent } from './BackgroundDropdownContent';
import { BackgroundDropdownIcon } from './BackgroundDropdownIcon';

export function BackgroundDropdown(props) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  return (
    <DropdownBase
      dropdownContent={(<BackgroundDropdownContent {...props} onClose={() => setPopupOpen(false)} />)}
      buttonContent={(<BackgroundDropdownIcon {...props.selection} />)}
      isPopupOpen={isPopupOpen}
      setPopupOpen={setPopupOpen}
    />
  );
}
