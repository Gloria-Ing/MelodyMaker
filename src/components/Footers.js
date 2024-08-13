import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../Styles/Footers.css";
import logo from "../images/2.png";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-logo'>
          <img className='logo' src={logo} alt="Logo"/>
        </div>
        <div className='footer-links'>
          <h4>Services</h4>
          <ul>
            <li><a href='#'>Audio Music</a></li>
            <li><a href='#'>Video Music</a></li>
            <li><a href='#'>Filming</a></li>
          </ul>
        </div>
        <div className='footer-links'>
          <h4>Production</h4>
          <ul>
            <li><a href='#'>Recording</a></li>
            <li><a href='#'>Composition and Arranging</a></li>
            <li><a href='#'>Mixing and Mastering</a></li>
          </ul>
        </div>
        <div className='footer-social'>
          <h4>Connect with Us</h4>
          <div className='social-icons'>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="mailto:ingloria446@gmail.com">
              <EmailIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>© 2024 MelodyMaker Media. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
