import React from 'react';

import './Input.sass';

export function Input({ type = 'text', ...rest }) {
  return (
    <input className="input" type={type} {...rest} />
  );
}
