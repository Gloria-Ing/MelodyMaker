import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../Styles/Abouts.css";
import p1 from "../images/R-Image_7.jpg";
import p2 from "../images/R-Image_9.jpg";
import p3 from "../images/R-Image_2.jpg";
import p4 from "../images/R-Image_4.jpg";

function About() {
  return (
    <div className='section-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h1 className='section-title'>OUR TEAM</h1>
            <p className='section-subtitle'>
              Our team of seasoned professionals includes audio engineers, video producers, directors, editors, and creative consultants. 
              Each member of the 3M family brings a wealth of experience and a passion for storytelling, ensuring that every project is 
              executed with precision and creativity.
            </p>
            <h1>MISSION STATEMENT</h1>
            <p>
              At MelodyMakers Media, our mission is to transform ideas into compelling audio and visual experiences. 
              We strive to be a beacon of creativity and innovation in the media production industry, 
              dedicated to delivering content that entertains, inspires, and connects people.
            </p>
          </div>
        </div>
        <div className="all">
          <Card className='card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={p1}
                alt="Milla"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Milla - Producer@3M
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A man should hear a little music, read a little poetry, and see a fine picture every day of his life.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className='card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={p2}
                alt="Sigrid"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sigrid - Producer@3M
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I would have made a rule to read some poetry and listen to some music at least once every week.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className='card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={p3}
                alt="Gloria"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Gloria - Editor@3M
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I think music in itself is healing. It’s an explosive expression of humanity. Like it, love it and hear it and let be together.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className='card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={p4}
                alt="Linda"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Linda - Eng@3M
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  If music be the food of love, play on, Give me excess of it; that surfeiting.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
