import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import "../Styles/contact.css";
function Contact() {
  return (
    <div className='contact'>
      <div className='leftside'>
      <h3>MelodyMakers Media welcomes clients from all over the world.</h3>
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
      <div className='rightside'>
        <h1>Contact Us</h1>
        <form id='contact-form' method='POST'>
          <label htmlFor='namr'>Full Name</label>
          <input name='name' placeholder='Enter full name...' type='text'/>
          <label htmlFor='nemail'>Email</label>
          <input name='name' placeholder='Enter your email...' type='email'/>
          <label htmlFor='message'>Message</label>
          <textarea rows='6'
          placeholder='enter message.....'
          name='message'
          required></textarea>
          <button type='submit'>Send Message</button>
        </form>
        
      </div>
     
    </div>
  )
}

export default Contact
