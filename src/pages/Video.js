import React from 'react';
import audio from "../images/video.jpg";
import "../Styles/Audio.css";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { grey } from "@mui/material/colors";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Audio() {
  return (
    <Box className='audio' sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Video Music Production
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        sx={{ maxWidth: 600, margin: '0 auto', border: '2px solid grey', borderRadius: 2, padding: 2, bgcolor: grey[200] }}
      >
        <List sx={{ padding: 0 }}>
          <ListItem disableGutters>
            <Typography variant="body1">
              <b>● Pre-Production:</b> Comprehensive planning, storyboarding, and scripting to ensure a smooth production process.
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <Typography variant="body1">
            
               <b>● Filming: </b>High-definition filming with professional-grade cameras and equipment.

            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <Typography variant="body1">
              <b>● Post-Production: </b>Advanced editing, color grading, and special effects to create visually stunning videos.
            </Typography>
          </ListItem>
        </List>
      </Box>

      <Box className='rightside' sx={{ marginTop: 3 }}>
        <img className='image2' src={audio} alt="Audio production" style={{ maxWidth: '50%', height: 'auto' }} />
      </Box>

      <Box sx={{ mt: 4, maxWidth: 600, margin: '0 auto' }}>
        <Typography variant="h5" gutterBottom>
          We Offer You Special Features Here
        </Typography>
        <Stack spacing={2}>
          <Item><Typography variant="body1"><b>●	Creative Collaboration:</b> We work closely with artists, musicians, and filmmakers to understand their unique vision and bring it to fruition.</Typography></Item>
          <Item><Typography variant="body1"><b>●	Cutting-Edge Technology: </b>Our studio is equipped with the latest software and hardware to deliver top-notch audio and video quality.</Typography></Item>
          <Item><Typography variant="body1"><b>●	Diverse Projects:</b> From music videos and documentaries to commercials and live events, 3M handles a wide range of production projects.</Typography></Item>
        </Stack>
      </Box>
      <div className='content'>
       
       <p>Located at Gisenyi, Rwanda, MelodyMakers Media welcomes clients from all over the world.</p>
       <p>For inquiries, project quotes, or to book a session, please use the button below to contact us:</p>
       <a href="tel:+250781959114" className="contact-button">Contact</a>
     </div>
      </Box>
  );
}

export default Audio;
