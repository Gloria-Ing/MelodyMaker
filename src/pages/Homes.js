import { Link } from "react-router-dom";
import image from "../images/trumpe.jpg";
import "../Styles/Homes.css";
import audio from "../images/m.jpg";
import video from "../images/video.jpg";
import special from "../images/musi.jpg";
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { grey } from "@mui/material/colors";
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <div className="container">
      <div className="headercontainer">
        <h6>
          MelodyMakers Media, affectionately known as 3M, is a cutting-edge studio 
          specializing in audio music and video production. Our mission is to create 
          high-quality, captivating content that resonates with audiences worldwide. 
          With a passion for innovation and a commitment to excellence, 3M is where 
          creativity meets technology.
        </h6>
        <div>
          <img className="imag" src={image} alt="Studio Image" />
        </div>
      </div>
      
      <h1>OUR SERVICES</h1>

      <div>
        <h2>Audio Music Production</h2>
      </div>
      
      <div className="services">
        <Box
          height={210}
          width={400}
          my={1}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          borderRadius={2}
          bgcolor={grey[200]}
          gap={2}
          p={2}
          sx={{ border: '2px solid grey' }}
        >
          <List sx={{ padding: 0 }}>
            <ListItem disableGutters>
              <Typography variant="body7">
                <b>● Recording:</b> State-of-the-art recording facilities equipped with the latest technology to capture pristine sound.
              </Typography>
            </ListItem>
            <ListItem disableGutters>
              <Typography variant="body7">
                <b>● Mixing and Mastering:</b> Expert engineers ensure your music sounds polished and professional.
              </Typography>
            </ListItem>
            <ListItem disableGutters>
              <Typography variant="body7">
                <b>● Composition and Arranging:</b> Talented composers and arrangers to help bring your musical vision to life.
              </Typography>
            </ListItem>
          </List>
        </Box>
        <img className="image2" src={audio} alt="Audio Production" />
      </div>

      <div>
        <h2>Video Music Production</h2>
      </div>

      <div className="services1">
        <img className="image3" src={video} alt="Video Production" />
        <Box
          height={210}
          width={400}
          my={1}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          borderRadius={2}
          bgcolor={grey[200]}
          gap={2}
          p={2}
          sx={{ border: '2px solid grey' }}
        >
          <List sx={{ padding: 0 }}>
            <ListItem disableGutters>
              <Typography variant="body7">
                <b>● Pre-Production:</b> Comprehensive planning, storyboarding, and scripting to ensure a smooth production process.
              </Typography>
            </ListItem>
            <ListItem disableGutters>
              <Typography variant="body7">
                <b>● Filming:</b> High-definition filming with professional-grade cameras and equipment.
              </Typography>
            </ListItem>
            <ListItem disableGutters>
              <Typography variant="body7">
                <b>● Post-Production:</b> Advanced editing, color grading, and special effects to create visually stunning videos.
              </Typography>
            </ListItem>
          </List>
        </Box>
      </div>

      <div>
        <h2>Special Features</h2>
      </div>

      <div className="services2">
        <Box
          height={210}
          width={400}
          my={1}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          borderRadius={2}
          bgcolor={grey[200]}
          gap={2}
          p={2}
          sx={{ border: '2px solid grey' }}
        >
          <List sx={{ padding: 0 }}>
            <ListItem disableGutters>
              <Typography variant="body7">
                <b>● Creative Collaboration:</b> We work closely with artists, musicians, and filmmakers to understand their unique vision and bring it to fruition.
              </Typography>
            </ListItem>
            <ListItem disableGutters>
              <Typography variant="body7">
                <b>● Cutting-Edge Technology:</b> Our studio is equipped with the latest software and hardware to deliver top-notch audio and video quality.
              </Typography>
            </ListItem>
            <ListItem disableGutters>
              <Typography variant="body7">
                <b>● Diverse Projects:</b> From music videos and documentaries to commercials and live events, 3M handles a wide range of production projects.
              </Typography>
            </ListItem>
          </List>
        </Box>
        <img className="image4" src={special} alt="Special Features" />
      </div>
    </div>
  );
}

export default Home;
