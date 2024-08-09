import React from 'react'
import video from "../images/video.jpg";
import "../Styles/Video.css";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { grey } from "@mui/material/colors";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function Audio() {
  return (
    <div>
      <div className='video'>
      <div className='leftside'>
      <h3><b>Video Music Production</b></h3>
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
            <List><b>○	Pre-Production:</b>  Comprehensive planning, storyboarding, and scripting to ensure a smooth production process</List>
            <List><b> ○	Filming:</b> High-definition filming with professional-grade cameras and equipment.</List>
            <List><b> ○	Post-Production:</b> Advanced editing, color grading, and special effects to create visually stunning videos.</List>

    </Box>
        
        
      </div>
       <div className='rightside'>
       <img className='image2' src={video}/>
     </div>
     
    </div>
    <div className='final'>
    <Box sx={{ width: '50%' }}>
      <Stack spacing={2}>
      <h4>We Offer you a special features here</h4>
        <Item><b>Recording: </b>State-of-the-art recording facilities equipped with the latest technology to capture pristine sound.</Item>
        <Item><b>Mixing and Mastering:</b> Expert engineers ensure your music sounds polished and professional.</Item>
        <Item><b>Composition and Arranging: </b>Talented composers and arrangers to help bring your musical vision to life.</Item>
      </Stack>
     
   

    </Box>
    
    </div>
    <div className='contactbutton'>
      <center>
    <Button href="/Contact">
      Contact Us
    </Button>
    </center>
    </div>
    </div>
    
  )
}

export default Audio