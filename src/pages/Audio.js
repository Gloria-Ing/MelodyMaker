import React from 'react'
import audio from "../images/m.jpg";
import "../Styles/Audio.css";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { grey } from "@mui/material/colors";


function Audio() {
  return (
    <div>
    <div className='audio'>
      <div className='leftside'>
      <h3>Audio Music Production</h3>
      <Box
      height={202}
      width={380}
      my={1}
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
          <button>Show More</button>
      
        
      </div>
       <div className='rightside'>
       <img className='image2' src={audio}/>
     
    </div>
    </div>
    <div className='offer'>
        <h4>We Offer you a special features here</h4>
        <p><list>●	Creative Collaboration: We work closely with artists, musicians, and filmmakers to understand their unique vision and bring it to fruition.</list>
           <list>●	Cutting-Edge Technology: Our studio is equipped with the latest software and hardware to deliver top-notch audio and video quality.</list>
           <list>●	Diverse Projects: From music videos and documentaries to commercials and live events, 3M handles a wide range of production projects.</list>
      </p>
      <button>Contact Us</button>
      </div>
    
    </div>
    
  )
}

export default Audio