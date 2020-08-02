import React from 'react';

import './MultiSwitch.sass';

export function MultiSwitch({ onChange, options, selectedIndex }) {
    return (
        <ol className="multi-switch">
            {options.map((option, index) => (
                <li
                    key={option}
                    className={`multi-switch__option${index === selectedIndex ?
                        ' multi-switch__option--selected' : ''}`}
                    onClick={() => onChange(index)}>
                    {option}
                </li>
            ))}
        </ol>
    );
}