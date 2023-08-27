import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrFormNext } from 'react-icons/gr'

const Categories = () => {
  return (
    <div className='categories-section'>
        <p><span className='cat-menu'><AiOutlineMenu/></span>Categories</p>
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
  )
}

export default Categories