import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiOutlineFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Techybuy.lk All rights reserverd</p>
      <p className='icons'>
        <Link href=''><AiFillInstagram /></Link>
        <Link href=''><AiOutlineFacebook/></Link>
      </p>
    </div>
  )
}

export default Footer