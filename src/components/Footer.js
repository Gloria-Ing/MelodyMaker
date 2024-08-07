import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import "../Styles/Footer.css";
import logo from "../images/log.png";

function Footer() {
  return (
    <div className="footer">
            <img  className='log'src={logo}/>
        
        <p>© 2024 MelodyMaker Media</p>
        
      <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="ingloria446@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon />
        </a>
      </div>
      <div>
        <ul>
          <li>Audio Production</li>
          <li>Video Production</li>
          <li>Filming</li>

        </ul>
      </div>
      <div>
        <ul>
          <li>Recording</li>
          <li>Mixing and Mastering</li>
          <li>Composition and Arranging</li>

        </ul>
      </div>
    
    </div>
     
  );
}

export default Footer;
