import React from 'react';

import './CarouselItem.sass';
import TestBgImage from '../../assets/images/main-bg.jpg';

export function CarouselItem({heading, buttonText, buttonLink, buttonTarget}) {
  return (
    <div className="carousel-item">
      <img className="carousel-item__background" src={TestBgImage} alt="Background" />
      <div className="carousel-item__wrapper">
        <h1 className="carousel-item__heading">{heading}</h1>
        <a className="carousel-item__button" href={buttonLink} target={buttonTarget}>
          {buttonText}
        </a>
      </div>
    </div>
  )
}
