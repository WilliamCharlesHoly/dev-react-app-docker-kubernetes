import React from "react"
import './Navbar.css'
import {Link} from 'react-scroll'


const Navbar = () => {
  return (
    <div className="n-wrapper">
      {/* left */}
      <div className="n-left">
        <div className="n-name">William</div>
        <span>Toggle</span>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul  style={{ listStyleType: "none" }}>
            <Link spy={true} to={Navbar} smooth={true} activeClass="activeClass">
            <li>
                Home
            </li>
            </Link>
            <Link spy={true} to="Service" smooth={true}>
            <li>
                Services
            </li>
            </Link>
            
            <li>
                Technology
            </li>
            <Link spy={true} to="Portfolio" smooth={true}>
            <li>
                Portfolio
            </li>
            </Link>
            <Link spy={true} to="Certificate" smooth={true}>
            <li>
                Certificate
            </li>
            </Link>
          </ul>
        </div>

        <button className="button n-button">Contact</button>

      </div>
    </div>
  );
};

export default Navbar;
