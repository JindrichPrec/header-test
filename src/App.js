import React, { useState } from 'react';

import { Modal } from './components/Modal/Modal';
import { Popup } from './components/Popup/Popup';
import { Carousel } from './components/Carousel/Carousel';
// import { TileItem } from './components/TileItem/TileItem';
import { Tiles } from './components/Tiles/Tiles';
import { Dropdown} from './components/Dropdown/Dropdown';
import { BackgroundDropdown } from './components/BackgroundDropdown/BackgroundDropdown';

export function App() {
    const [isModalOpen, setModalOpen] = useState(true);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [text, setText] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selection, setSelection] = useState();

    const colors = ['#ffffff', '#60cefe', '#49e5a5', '#000000', '#808080', '#dadada', '#f5f5f5'];
    const images = [];
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
            <Carousel slideInterval={5000} />
            {/* <ul className="carousel-editor__body">
                <TileItem />
            </ul> */}

            <Tiles />

            <Dropdown
                items={['a', 'b', 'c']}
                selectedIndex={selectedIndex}
                onChange={setSelectedIndex}
            />
            <BackgroundDropdown colors={colors} images={images} onChange={setSelection} selection={selection} />
        </>
    )
}