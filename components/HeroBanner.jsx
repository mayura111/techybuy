import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroBanner = () => {
 
  return (
        <Carousel
        showThumbs={false} 
        autoPlay
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        >
        <div className='hero-banner-card'>
          <img src="promo-banner.png" alt="promo-banner"/>
          <button className="hero-banner-button">Shop Now</button>
        </div>
        <div className='hero-banner-card'>
          <img src="discount-banner.png" alt="discount-banner" />
          <button className="hero-banner-button">Shop Now</button>
        </div>
        <div className='hero-banner-card'>
          <img src="tripod-banner.png" alt="tripod-banne"/>
          <button className="hero-banner-button">Shop Now</button>
        </div>        
        </Carousel>
  )
}

export default HeroBanner