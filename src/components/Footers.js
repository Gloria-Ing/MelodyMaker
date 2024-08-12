import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../Styles/Footers.css";
import logo from "../images/2.png";

function Footer() {
  return (
    <div className='footer'>
      <div>
        <img className='log' src={logo} alt="Logo"/>
      </div>
      <div>
        <a href='#'>Audio Music</a>
        <a href='#'>Video Music</a>
        <a href='#'>Filming</a>
      </div>
      <div>
        <a href='#'>Recording</a>
        <a href='#'>Composition and Arranging</a>
        <a href='#'>Mixing and Mastering</a>
      </div>
      <div className='footer-social'>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="mailto:ingloria446@gmail.com">
          <EmailIcon />
        </a>
      </div>
      <div>
        <p>© 2024 MelodyMaker Media</p>
      </div>
    </div>
  );
}

export default Footer;
