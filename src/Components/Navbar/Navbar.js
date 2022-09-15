import React from "react";
import { Outlet } from "react-router-dom";
import './navbar.scss'
import { ReactComponent as CrownLogo} from '../../crown.svg'

const Navbar =()=>{
  return (
    <>  
      <div className='navbar'>
        <CrownLogo />
         <div className='link-container'>
          <a href='/'>SHOP</a>
          <a href='/'>CONTACT</a>
          <a href='/'>SIGN IN</a>
         </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar