import React, { useState, useEffect } from 'react';

import './Carousel.sass';

export function Carousel({slideInterval}) {
    let items = [1,2,3,4,5];
    let duration = slideInterval !== undefined && slideInterval >= 2000 ? slideInterval : 2000

    const [x, setX] = useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (items.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (items.length - 1) ? setX(0) : setX(x - 100);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          goRight();
        }, duration);
        return () => clearInterval(interval);
      });

    return (
        <div className="carousel">
            {items.map((item, index) =>
                <div className="carousel__slide" key={index} style={{ transform: `translateX(${x}%)`}} >
                    <span>{item}</span>
                </div>
            )}
            <button className="carousel__btn carousel__btn--r" onClick={goRight}>Right</button>
            <button className="carousel__btn carousel__btn--l" onClick={goLeft}>Left</button>
        </div>
    )    
}