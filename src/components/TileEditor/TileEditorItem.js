import React, { useState } from 'react';

import { BackgroundDropdown } from '../BackgroundDropdown/BackgroundDropdown';
import { Dropdown } from '../Dropdown/Dropdown';
import { Input } from '../Input/Input';
import { Popup } from '../Popup/Popup';
import { Toggle } from '../Toggle/Toggle';

import { ReactComponent as DragIcon } from '../../assets/svg/drag-icon.svg';
import { ReactComponent as MoreIcon } from '../../assets/svg/more-icon.svg';
import { ReactComponent as DuplicateIcon } from '../../assets/svg/duplicate-icon.svg';
import { ReactComponent as PlusIcon } from '../../assets/svg/plus-icon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/svg/trash-icon.svg';

import './TileEditorItem.sass';

const buttonModes = [
  'New Window',
  'Same Window'
];

export function TileEditorItem({ colors, images, data, onChange, onDuplicate, onDelete }) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isMoreShown, setShowMore] = useState(false);

  const toggleMore = () => setShowMore(!isMoreShown);

  const setHeader = e => onChange({
    ...data,
    header: e.target.value
  });

  const setSubHeader = e => onChange({
    ...data,
    subHeader: e.target.value
  });

  const setIsEnabled = isEnabled => onChange({
    ...data,
    isEnabled
  });

  const setBackground = background => onChange({
    ...data,
    background
  });

  const setButtonText = e => onChange({
    ...data,
    buttonText: e.target.value
  });

  const setButtonLink = e => onChange({
    ...data,
    buttonLink: e.target.value
  });

  const setButtonMode = buttonMode => onChange({
    ...data,
    buttonMode
  });

  return (
    <li className="tile-editor__item">
      <DragIcon />
      <Input placeholder="Heading" value={data.header} onChange={setHeader} />
      <Input placeholder="Subheader" value={data.subHeader} onChange={setSubHeader} />
      <Toggle isChecked={data.isEnabled} onChange={setIsEnabled} />
      <BackgroundDropdown
        colors={colors}
        images={images}
        selection={data.background}
        onChange={setBackground}
      />
      {isMoreShown ? (
        <div className="tile-editor__more">
          <Input placeholder="Button Text" value={data.buttonText} onChange={setButtonText} />
          <Input placeholder="Button Link" value={data.buttonLink} onChange={setButtonLink} />
          <Dropdown items={buttonModes} selectedIndex={data.buttonMode} onChange={setButtonMode} />
        </div>
      ) : null}
      <div className="tile-editor__item__popup-wrapper">
        <button type="button" className="tile-editor__item__popup-open" onClick={() => setPopupOpen(true)}>
          <MoreIcon />
        </button>
        <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
          <div className="more-dropdown">
            <ul>
              <li>
                <button onClick={() => {
                    onDuplicate();
                    setPopupOpen(false);
                  }}>
                  <DuplicateIcon />
                  Duplicate
                </button>
              </li>
              <li>
                <button onClick={() => {
                    toggleMore();
                    setPopupOpen(false);
                  }}>
                  <PlusIcon />
                  More Options
                </button>
              </li>
              <li>
                <button onClick={() => {
                    onDelete();
                    setPopupOpen(false);
                  }}>
                  <DeleteIcon />
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </Popup>
      </div>
    </li>
  );
}
