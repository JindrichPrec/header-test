import React, { useEffect, useRef } from 'react';

import './Popup.sass';

export function Popup({isOpen, children, onClose}) {
    const containerRef = useRef();
    useEffect(() => {
        if (isOpen) {
            const onPointerDown = (e) => {
                if (e.target !== containerRef.current) {
                    onClose();
                }
            };
            window.addEventListener('pointerdown', onPointerDown);
            return () => {
                window.removeEventListener('pointerdown', onPointerDown);
            };
        }
    }, [isOpen, onClose]);
    return isOpen ? (
        <div className="popup" ref={containerRef}>
            {children}
        </div>
    ) : null;
}