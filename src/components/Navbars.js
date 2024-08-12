import React, { useState } from 'react';
import logo from "../images/1.png";
import { Link } from "react-router-dom";
import "../Styles/Navbars.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import Button from '@mui/material/Button';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className='navbar'>
      <div className='leftside'>
        <img className='logo' src={logo} alt="Logo" />
      </div>
      <div className={isMobile ? 'rightside mobile' : 'rightside'}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <div className="dropdown">
          <div className="drop">Services</div>
          <div className="dropdown-content">
            <Link to="/Audio" onClick={toggleMenu}>Audio production</Link>
            <Link to="/Video" onClick={toggleMenu}>Video production</Link>
          </div>
        </div>
        <Link to="/about" onClick={toggleMenu}>About Us</Link>
        <Link to="/Contact" onClick={toggleMenu}>
          Contact Us
        </Link>
      </div>
      <button className="menu-icon" onClick={toggleMenu}>
        <ReorderIcon />
      </button>
    </div>
  );
}

export default Navbar;
