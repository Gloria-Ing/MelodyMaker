import React, { useState } from 'react'
import logo from "../images/1.png";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img className='logo' src={logo}/>
        </div>
        <div className='rightside'>
            <Link to="/">Home</Link>
            <div class="dropdown">
  <div class="drop">Sevices</div>

  <div class="dropdown-content">
  <a href="/Audio">Audio production</a>
  <a href="/Video">Video production</a>
 </div>

</div>
            <Link to="/about">About Us</Link>
            <Button  className='navcontact' href="/Contact">
      Contact Us
    </Button>
            <button>
            <ReorderIcon/>
            </button>
        </div> 
    </div>
  )
}
export default Navbar
 
