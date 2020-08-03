import React, { useState } from 'react';
import { DropdownBase } from '../DropdownBase/DropdownBase';

function defaultRenderItem(item) {
  return typeof item === 'string' ? item : null;
}

export function Dropdown({items, selectedIndex, renderItem = defaultRenderItem, onChange, disabled}) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const selectedItem = items[selectedIndex];
  return (
    <DropdownBase
      className="dropdown"
      dropdownContent={(
        <ol>
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                onChange(index);
                setPopupOpen(false);
              }}
            >
              {renderItem(item)}
            </li>
          ))}
        </ol>
      )}
      buttonContent={selectedItem === undefined ? null : renderItem(selectedItem)}
      isPopupOpen={isPopupOpen}
      setPopupOpen={setPopupOpen}
      disabled={disabled}
    />
  );
}
