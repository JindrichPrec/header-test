import React from 'react';

import './Carousel.sass'

export function Carousel({children, duration, }) {
    const items = [1,2,3,4,5];
    return (
        <div className="carousel">
            {items.map((item) =>
                <div className="carousel__slide" key={item.toString()}>
                    <span>{item}</span>
                </div>
            )}
            <button className="carousel__btn carousel__btn--r">Right</button>
            <button className="carousel__btn carousel__btn--l">Left</button>
        </div>
    )    
}