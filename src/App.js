import React, { useState } from 'react';

import { Modal } from './components/Modal/Modal';
import { Popup } from './components/Popup/Popup';

export function App() {
    const [isModalOpen, setModalOpen] = useState(true);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [text, setText] = useState("");
    return (
        <>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                asdasdasd
            </Modal>
            <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
                {text}
            </Popup>
            <button onClick={() => setPopupOpen(true)}>Open Popup</button>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </>
    )
}