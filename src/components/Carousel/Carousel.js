import React, { useEffect, useReducer } from 'react';

import './Carousel.sass';
import {ReactComponent as ArrowThin } from '../../assets/svg/arrow-left-thin.svg';
import { CarouselItem } from '../CarouselItem/CarouselItem';

function carouselReducer(state, action) {
  switch (action.type) {
    case 'go-left':
      return state - 1;
    case 'go-right':
      return state + 1;
    default:
      return state;
  }
}

export function Carousel({ items, slideInterval = 2000 }) {
  const m = items.length;
  const [ x, dispatch ] = useReducer(carouselReducer, 0);
  const goLeft = () => dispatch({ type: 'go-left' });
  const goRight = () => dispatch({ type: 'go-right' });

  useEffect(() => {
    const handle = setTimeout(goRight, Math.max(slideInterval, 2000));
    return () => clearTimeout(handle);
  }, [x, slideInterval]);

  let offset = x % m;
  if (offset < 0) {
    offset += m;
  }

  return (
    <div className="carousel">
      {items.map((item, index) =>
        <div
          key={index}
          className="carousel__slide"
          style={{ transform: `translate3d(${-offset * 100}%, 0, 0)` }}
        >
          <CarouselItem 
            heading={item.heading}
            buttonText={item.buttonText}
            buttonLink={item.buttonLink}
            buttonTarget={item.buttonTarget} 
          />
        </div>
      )}
      <button
        className="carousel__button carousel__button--right"
        onClick={goRight}
      >
        <ArrowThin />
      </button>
      <button
        className="carousel__button carousel__button--left"
        onClick={goLeft}
      >
        <ArrowThin />
      </button>
    </div>
  )
}
