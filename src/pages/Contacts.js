import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { grey } from '@mui/material/colors';
import '../Styles/Contacts.css';
import location from "../images/3M.png";

function Contact() {
  return (
    <div>
      <div className='contact'>
        <div className='leftside'>
          <h3>MelodyMakers Media welcomes clients from all over the world.</h3>
          <div>
            <img className="imag" src={location} alt="Studio Image" />
          </div>
        </div>
        <div className='rightside'>
          <h1>Contact Us</h1>
          <form id='contact-form' method='POST'>
            <label htmlFor='name'>Full Name</label>
            <input name='name' placeholder='Enter full name...' type='text' />
            <label htmlFor='email'>Email</label>
            <input name='email' placeholder='Enter your email...' type='email' />
            <label htmlFor='message'>Message</label>
            <textarea rows='6' placeholder='Enter message.....' name='message' required></textarea>
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/250781959114?text=Hello%20MelodyMakers%20Media,%20I%20would%20like%20to%20..." 
              className="sms-button"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Send Message
            </a>
          </form>
        </div>
      </div>
      <div className='content'>
        <p>Located at Gisenyi, Rwanda, MelodyMakers Media welcomes clients from all over the world.</p>
        <p>For inquiries, project quotes, or to book a session, please use the button below to contact us:</p>
      </div>
    </div>
  );
}

export default Contact;
