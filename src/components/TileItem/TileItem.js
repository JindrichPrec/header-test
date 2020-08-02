import React, { useState } from 'react';

import './TileItem.sass';

import { ReactComponent as DragIcon } from '../../assets/svg/drag-icon.svg';
import { ReactComponent as MoreIcon } from '../../assets/svg/more-icon.svg';
import { ReactComponent as DuplicateIcon } from '../../assets/svg/duplicate-icon.svg';
import { ReactComponent as PlusIcon } from '../../assets/svg/plus-icon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/svg/trash-icon.svg';
import { Popup } from '../Popup/Popup';
import { Toggle } from '../Toggle/Toggle';

export function TileItem({onDelete}) {
    const [isPopupOpen, setPopupOpen] = useState(false);
    return (
        <li className="carousel-editor__item">
            <span className="drag-icon">
            <DragIcon />
            </span>
            <input className="custom-input" type="text" name="subheader" placeholder="Subheader"></input>
            <input className="custom-input" type="text" name="heading" placeholder="Heading"></input>
            <Toggle />
            <button className="more-icon" onClick={() => setPopupOpen(true)}>
            <MoreIcon />
            </button>
            <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
                <div className="more-dropdown">
                    <ul>
                        <li>
                        <span className="more-dropdown__icon">
                            <DuplicateIcon />
                        </span>
                        <span>Duplicate</span>
                        </li>
                        <li>
                        <span className="more-dropdown__icon">
                            <PlusIcon />
                        </span>
                        <span>More Options</span>
                        </li>
                        <li>
                        <span className="more-dropdown__icon">
                            <DeleteIcon />
                        </span>
                        <button onClick={onDelete}>Delete</button>
                        </li>
                    </ul>
                </div>
            </Popup>
        </li>
    )
}
