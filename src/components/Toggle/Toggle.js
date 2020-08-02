import React from 'react';

import './Toggle.sass';

export function Toggle({onChange, isChecked}) {
    return (
        <div onClick={() => onChange(!isChecked)} className={`toggle ${isChecked ? 'toggle--checked' : ''}`}>
            <span className="toggle__slider" />
        </div>
    )
}
