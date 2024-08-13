import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { grey } from '@mui/material/colors';
import '../Styles/Contacts.css';

function Contact() {
  return (
    <div >
      <div className='contact'>
      <div className='leftside'>
        <h3>MelodyMakers Media welcomes clients from all over the world.</h3>
        
        <Box
          height={202}
          width='100%' /* Full width for responsiveness */
          maxWidth={380}
          my={3}
          display="flex"
          alignItems="center"
          borderRadius={2}
          bgcolor={grey[200]} /* Use a lighter grey */
          paddingTop={40}
          gap={4}
          p={2}
          sx={{ border: '2px solid grey' }}
        >
          <List><b>○ Recording:</b> State-of-the-art recording facilities equipped with the latest technology to capture pristine sound.</List>
          <List><b>○ Mixing and Mastering:</b> Expert engineers ensure your music sounds polished and professional.</List>
          <List><b>○ Composition and Arranging:</b> Talented composers and arrangers to help bring your musical vision to life.</List>
        </Box>
      </div>
      <div className='rightside'>
        <h1>Contact Us</h1>
        <form id='contact-form' method='POST'>
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Enter full name...' type='text'/>
          <label htmlFor='email'>Email</label>
          <input name='email' placeholder='Enter your email...' type='email'/>
          <label htmlFor='message'>Message</label>
          <textarea rows='6' placeholder='Enter message.....' name='message' required></textarea>
          <a href="sms:+250781959114" className="sms-button">Send Message</a> {/* SMS Button */}
        </form>
      </div>
      </div>
      <div className='content'>
       
        <p>Located at Gisenyi, Rwanda, MelodyMakers Media welcomes clients from all over the world.</p>
        <p>For inquiries, project quotes, or to book a session, please use the button below to contact us:</p>
        <a href="tel:+250781959114" className="contact-button">Contact</a>
      </div>
    </div>
  );
}

export default Contact;
