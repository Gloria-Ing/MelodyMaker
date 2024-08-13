import React, { useState } from 'react';
import logo from "../images/1.png";
import { Link } from "react-router-dom";
import "../Styles/Navbars.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt="Logo" />
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className='close-menu' onClick={handleMenuToggle}>
          <CloseIcon />
        </button>
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <div className='dropdown'>
          <button className='drop-btn'>Services</button>
          <div className='dropdown-content'>
            <Link to="/Audio" onClick={() => setIsMobileMenuOpen(false)}>Audio Production</Link>
            <Link to="/Video" onClick={() => setIsMobileMenuOpen(false)}>Video Production</Link>
          </div>
        </div>
        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
        <Link to="/Gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
        <Link to="/Contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
      </div>
      <button className='menu-icon' onClick={handleMenuToggle}>
        <ReorderIcon />
      </button>
    </nav>
  );
}

export default Navbar;
