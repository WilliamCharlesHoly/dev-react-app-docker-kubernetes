import React from 'react';
import './Button.css';
import {Link} from 'react-scroll'

export function Button() {
  return (
    <Link spy={true} to="Contact" smooth={true}>
      <button className='btn'>Contact</button>
    </Link>
  );
}
