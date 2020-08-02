import React from 'react';

import { Carousel } from './components/Carousel/Carousel';
import { TileEditor } from './components/TileEditor/TileEditor';

export function App() {
    
    return (
        <>
            <Carousel items={[ 1, 2, 3, 4, 5 ]} slideInterval={5000} />
            <TileEditor />
        </>
    )
}
