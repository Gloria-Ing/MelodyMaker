import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { grey } from "@mui/material/colors";
import "../Styles/contact.css";
function Contact() {
  return (
    <div className='contact'>
      <div className='leftside'>
      <h3>MelodyMakers Media welcomes clients from all over the world.</h3>
      
      <Box
      height={202}
      width={380}
      my={3}
      display="flex"
      alignItems="center"
      borderRadius={2}
      bgcolor={grey}
      paddingTop={40}
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
            <List><b>○	Recording:</b> State-of-the-art recording facilities equipped with the latest technology to capture pristine sound.</List>
            <List><b>○	Mixing and Mastering:</b> Expert engineers ensure your music sounds polished and professional.</List>
            <List><b>○	Composition and Arranging:</b> Talented composers and arrangers to help bring your musical vision to life.</List>

    </Box>
        

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
