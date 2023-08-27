import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { Cart, DropMenu } from './';
import { AiFillInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext';


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, showMenu, setShowMenu } = useStateContext();

  return (
    <div>

      <div className='top-header'>
        <span>
          <p>Follow Us&nbsp; &nbsp; &nbsp;| </p>
          <div className='fb-icon'><Link href=''> <AiOutlineFacebook/></Link></div>
          <div className='insta-icon'><Link href=''><AiFillInstagram /></Link></div>
        </span>
        <ul className='header-list'>
          <Link href="/"><li>About Us</li></Link>
          <Link href="/"><li>Customer Care</li></Link>
          <Link href="/"><li>Track My Order</li></Link>
          <Link href="/"><li>Login</li></Link>
          <Link href="/"><li>Sign up</li></Link>
          <Link href="/"><li>Language</li></Link>
        </ul>
      </div>

      <div className="navbar-container">
      <div className='logo'>
        <div className='logo-icon'>
          <a href="/"><img src='logo-icon.png' width={35} height={38.5}/></a>
        </div>
        <div className='logo-text'>
        <a href="/"><img src='logo-text.png' width={200} height={20}/></a>
        </div>
      </div>

      <div className="search-box">
        <form>
          <input type ="text" placeholder="Search.."/>
          <button type ="submit"><AiOutlineSearch className='search-icon'/></button>
        </form>
      </div>

      <DropMenu/>

      <div className='cart-button'><button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
       </button>
      </div>
      

      {showCart && <Cart />}
      
      
      </div>
    </div>
  )
}

export default Navbar