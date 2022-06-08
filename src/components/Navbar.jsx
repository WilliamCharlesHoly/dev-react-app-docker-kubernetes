import React from "react"
import './Navbar.css'


import { useState } from 'react';
import { Button } from './Button';
import {Link} from 'react-scroll'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          William
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link spy={true} to="Service" smooth={true} activeClass="activeClass" className='nav-links' onClick={closeMobileMenu}>
              Service
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              spy={true} to="Technology" smooth={true}
              className='nav-links'
              onClick={closeMobileMenu}>
              Technology
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              spy={true} to="Portfolio" smooth={true}
              className='nav-links'
              onClick={closeMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              spy={true} to="Certificate" smooth={true}
              className='nav-links'
              onClick={closeMobileMenu}>
              Certificate
            </Link>
          </li>
          <li>
            <Link
              spy={true} to="Contact" smooth={true}
              className='nav-links-mobile'
              onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;