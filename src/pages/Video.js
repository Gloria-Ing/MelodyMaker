import React from 'react'
import video from "../images/video.jpg";
import "../Styles/Video.css";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { grey } from "@mui/material/colors";

function Audio() {
  return (
    <div>
      <div className='video'>
      <div className='leftside'>
      <h3>Video Music Production</h3>
      <Box
      height={202}
      width={400}
      my={1}
      display="flex"
      borderRadius={2}
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
            <List><b>○	Pre-Production:</b>  Comprehensive planning, storyboarding, and scripting to ensure a smooth production process</List>
            <List><b> ○	Filming:</b> High-definition filming with professional-grade cameras and equipment.</List>
            <List><b> ○	Post-Production:</b> Advanced editing, color grading, and special effects to create visually stunning videos.</List>

    </Box>
          <button>Show More</button>
        
        
      </div>
       <div className='rightside'>
       <img className='image2' src={video}/>
     </div>
    </div>
  
    <div className='offer'>
        <h4>We Offer you a special features here</h4>
        <p>●	Creative Collaboration: We work closely with artists, musicians, and filmmakers to understand their unique vision and bring it to fruition.
           ●	Cutting-Edge Technology: Our studio is equipped with the latest software and hardware to deliver top-notch audio and video quality.
           ●	Diverse Projects: From music videos and documentaries to commercials and live events, 3M handles a wide range of production projects.
      </p>
      <button>Contact Us</button>
    
    </div>
    </div>
  )
}

export default Audio