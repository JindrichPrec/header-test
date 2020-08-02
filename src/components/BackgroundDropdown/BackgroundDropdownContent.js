import React from 'react';
import { BackgroundDropdownIcon } from './BackgroundDropdownIcon';

export function BackgroundDropdownContent({ colors, images, onChange, onClose }) {
  return (
    <div>
      {colors.map(color => (
        <BackgroundDropdownIcon
          key={color}
          type="color"
          value={color}
          onClick={() => {
            onChange({type: 'color', value: color});
            onClose();
          }}
        />
      ))}
      {images.map(image => (
        <BackgroundDropdownIcon
          key={image}
          type="image"
          value={image}
          onClick={() => {
            onChange({type: 'image', value: image});
            onClose();
          }}
        />
      ))}
    </div>
  );
}
