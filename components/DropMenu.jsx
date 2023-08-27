import React from 'react';
import Link from 'next/link';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { useStateContext } from '../context/StateContext';
import { AiOutlineMenu } from 'react-icons/ai';

const DropMenu=() =>{
  const { setShowMenu } = useStateContext();
  return (
    <Dropdown>
      <DropdownTrigger>
        <div className='menu'>
          <button type="button" className="menu-icon" onClick={() => setShowMenu(true)}>
          <AiOutlineMenu/>
          </button>
        </div>
      </DropdownTrigger>

      <DropdownMenu className='drop-down-menu'>

        <DropdownItem className='drop-down-items' key="ctegories"><Link href="/">Categories</Link></DropdownItem>

        <DropdownItem className='drop-down-items'  key="aboutUs"><Link href="/"> About Us </Link></DropdownItem>

        <DropdownItem className='drop-down-items'  key="customerCare"><Link href="/">Customer Care</Link></DropdownItem>

        <DropdownItem className='drop-down-items'  key="trackMyOrder">
        <Link href="/">Track My Order</Link>
        </DropdownItem>

        <DropdownItem className='drop-down-items' key="login" >
        <Link href="/">Login</Link>
        </DropdownItem>

        <DropdownItem className='drop-down-items'  key="signUp" >
        <Link href="/">Sign up</Link>
        </DropdownItem>

        <DropdownItem className='drop-down-items'  key="language" >
        <Link href="/">Language</Link>
        </DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
}

export default DropMenu