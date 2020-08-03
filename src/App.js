import React, { useState } from 'react';

import { Carousel } from './components/Carousel/Carousel';
import { TileEditor } from './components/TileEditor/TileEditor';
import { Modal } from './components/Modal/Modal';

export function App() {
    const [isModalOpen, setModalOpen] = useState(true);
    const carouselItems = [
      {
        heading: 'Welcome to our Brandportal',
        buttonText: 'Learn More',
        buttonLink: '#',
        buttonTarget: '_blank'
      },
      {
        heading: 'Hello World!',
        buttonText: 'Learn Less',
        buttonLink: '#',
        buttonTarget: ''
      },
      {
        heading: 'Bye bye Hollywood Hills',
        buttonText: 'Check it out!',
        buttonLink: '#',
        buttonTarget: '_blank'
      },
    ];
    return (
        <>
            <Carousel items={carouselItems} slideInterval={5000} />
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
              <TileEditor />
            </Modal>
        </>
    )
}
