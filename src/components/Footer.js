import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../Styles/Footer.css";
import logo from "../images/2.png";
import List from '@mui/material/List';

function Footer() {
  return (
    
    <div>
      <div className='footer'>
         <div>
            <img  className='log'src={logo}/></div>
        <div>
          <a href='#'>Audio Music</a>
          <a href='#'> Video Music</a>
          <a href='#'>Filming</a>
        </div>
        <div>
          <a>Recording</a>
          <a>Composition and Arranging</a>
          <a>Mixing and Mastering</a>
        </div>
        
        
      <div>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="ingloria446@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon />
        </a>
      </div>
      <div> <p>© 2024 MelodyMaker Media</p></div>
      </div>
      

      </div>
      
      
      

      


    
    
     
  );
}

export default Footer;
