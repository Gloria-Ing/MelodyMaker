import React, { useState } from 'react'
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={logo}/>
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
            <Link to="/contact">Contact Us</Link>
            <button>
            <ReorderIcon/>
            </button>
        </div> 
    </div>
  )
}
export default Navbar
 
