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
    <div className="tile-editor__item">
      <div className="tile-editor__column tile-editor__column--1">
        <span className="tile-editor__drag-icon">
          <DragIcon />
        </span>
      </div>
      <div className="tile-editor__column tile-editor__column--2">
        <Input placeholder="Heading" value={data.header} onChange={setHeader} />
      </div>
      <div className="tile-editor__column tile-editor__column--3">
        <Input placeholder="Subheader" value={data.subHeader} onChange={setSubHeader} />
      </div>
      <div className="tile-editor__column tile-editor__column--4">
        <Toggle isChecked={data.isEnabled} onChange={setIsEnabled} />
      </div>
      <BackgroundDropdown
        colors={colors}
        images={images}
        selection={data.background}
        onChange={setBackground}
      />
      <div className="tile-editor__item__popup-wrapper">
        <button type="button" className="tile-editor__item__popup-open" onClick={() => setPopupOpen(true)}>
          <MoreIcon />
        </button>
        <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
          <div className="more-dropdown">
            <ul className="more-dropdown__ul">
              <li>
                <button 
                  className="more-dropdown__button"
                  onClick={() => {
                    onDuplicate();
                    setPopupOpen(false);
                  }}>
                  <DuplicateIcon />
                  Duplicate
                </button>
              </li>
              <li>
                <button
                  className="more-dropdown__button"
                  onClick={() => {
                    toggleMore();
                    setPopupOpen(false);
                  }}>
                  <PlusIcon />
                  More Options
                </button>
              </li>
              <li>
                <button 
                  className="more-dropdown__button"
                  onClick={() => {
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
      {isMoreShown ? (
        <div className="tile-editor__more">
          <div className="tile-editor__column tile-editor__column--1"></div>
          <div className="tile-editor__column tile-editor__column--2">
            <h3 className="tile-editor__label">Btn text</h3>
            <Input placeholder="Button Text" value={data.buttonText} onChange={setButtonText} />
          </div>
          <div className="tile-editor__column tile-editor__column--3">
          <h3 className="tile-editor__label">Btn link</h3>
            <Input placeholder="Button Link" value={data.buttonLink} onChange={setButtonLink} />
          </div>
          <div className="tile-editor__column tile-editor__column--4">
            <Dropdown items={buttonModes} selectedIndex={data.buttonMode} onChange={setButtonMode} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
