import { Link } from "react-router-dom"
import image from "../images/trumpe.jpg";
import "../Styles/Home.css";
import audio from "../images/m.jpg";
import video from "../images/video.jpg";
import special from "../images/musi.jpg";
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { grey } from "@mui/material/colors";


function Home() {
  return (
    <div>
      <div className='headercontainer'>
      <h6>MelodyMakers Media, affectionately known as 3M, 
        is a cutting-edge studio specializing in audio music
         and video production. Our mission is to create high-quality, 
         captivating content that resonates with audiences worldwide. 
         With a passion for innovation and a commitment to excellence, 
        3M is where creativity meets technology.</h6>
        <div>
          <img className='imag' src={image}/>
        </div>

    </div>
    <div>
      <h1>OUR SERVICES</h1>
    </div>
    <div className='services'>
      <h2>Audio Music Production</h2></div>
      <div className="services">
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

      <div>
      <img className='image2' src={audio}/>
    </div>
    </div>
    <div className='services1'>
      <h2>video Music Production</h2></div>
      <div className="services">
    
      <img className='image3' src={video}/>
      <Box
      height={202}
      width={400}
      my={4}
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

      <div>
    </div>
    </div>
    <div className='services2'>
      <h2>Special Features</h2></div>
      <div className="services">
    <Box
      height={210}
      width={400}
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
            <List><b>●	Creative Collaboration:</b> We work closely with artists, musicians, and filmmakers to understand their unique vision and bring it to fruition.</List>
            <List><b>●	Cutting-Edge Technology: </b>Our studio is equipped with the latest software and hardware to deliver top-notch audio and video quality.</List>
            <List><b>●	Diverse Projects: </b>From music videos and documentaries to commercials and live events, 3M handles a wide range of production projects.</List>

    </Box>
    

      <div>
      <img className='image4' src={special}/>
      </div>
    </div>
    </div>
    
  )
}

export default Home
