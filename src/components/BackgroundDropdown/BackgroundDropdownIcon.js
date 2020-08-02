import React from 'react';

import './BackgroundDropdownIcon.sass';

export function BackgroundDropdownIcon({type, value, onClick}) {
    let style;
    switch (type) {
        case 'color':
            style = {backgroundColor: value};
            break;
        case 'image':
            style = {backgroundImage: `url('${value}')`};
            break;
    }
    return (
        <span className="background-dropdown__icon" style={style} onClick={onClick}/>
    )
}
