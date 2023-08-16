import React from 'react';
import Link from 'next/link';
import {AiOutlineMenu } from 'react-icons/ai'
import { GrFormNext } from "react-icons/gr";
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="body-container">
      <div className='categories-section'>
        <p><span className='cat-menu' id='chk1'><AiOutlineMenu/></span>Categories</p>
        <ul className='cat-list'>
          <li>Mobile Accessories<span><GrFormNext/></span></li>
          <li>Audio <span><GrFormNext/></span></li>
          <li>Video <span><GrFormNext/></span></li>
          <li>Storage <span><GrFormNext/></span></li>
          <li>Printers <span><GrFormNext/></span></li>
          <li>Computer Accessories <span><GrFormNext/></span></li>
          <li>Network Components <span><GrFormNext/></span></li>
          <li>Console Accessories<span><GrFormNext/></span></li>
          <li>Camera Accessories<span><GrFormNext/></span></li>
          <li>Wearable <span><GrFormNext/></span></li>
        </ul>
      </div>
      <div className="hero-banner-container">
        <div className='left-side'>
          <p className="small-text">{heroBanner.smallText}</p>
          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText1}</h1>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
        <div className='right-side'>
          <img src={urlFor(heroBanner.image)} alt="techybuy.lk" className="hero-banner-image" />
          <div className="desc">
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner