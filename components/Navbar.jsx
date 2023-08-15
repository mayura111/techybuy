import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {AiOutlineShopping, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import { AiFillInstagram, AiOutlineFacebook } from 'react-icons/ai'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div>

      <div className='top-header'>
        <span>
          <p>Follow Us&nbsp; &nbsp; &nbsp;| </p>
          <div className='fb-icon'><Link href=''> <AiOutlineFacebook/></Link></div>
          <div className='insta-icon'><Link href=''><AiFillInstagram /></Link></div>
        </span>
        <ul className='navbar-list'>
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
          <Link href="/">
            <Image
              src='/logo-icon.png'
              width={35}
              height={38.5}
              alt='logo'
            />
          </Link>
        </div>
        <div className='logo-text'>
          <Link href="/">
            <Image
              src='/logo-text.png'
              width={200}
              height={20}
              alt='logo text'
            />
          </Link>
        </div>
      </div>

      <div className='small-logo'>
        <div className='logo-icon'>
          <Link href="/">
            <Image
              src='/logo-icon.svg'
              width={28}
              height={30.8}
              alt='logo'
            />
          </Link>
        </div>
        <div className='logo-text'>
          <Link href="/">
            <Image
              src='/logo-text.svg'
              width={150}
              height={15}
              alt='logo text'
            />
          </Link>
        </div>
      </div>


      <div className="search-box">
        <form>
          <input type ="text" placeholder="Search.."/>
          <button type ="submit"><AiOutlineSearch className='search-icon'/></button>
        </form>
      </div>

      <div className='menu'><button type="button" className="menu-icon" onClick={() => setShowCart (true)}>
        <AiOutlineMenu/>
       </button>
      </div>

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