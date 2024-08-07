import React from 'react'
import { Link } from "react-router-dom"
import image from "../images/trumpe.jpg";
import "../Styles/Home.css";
import audio from "../images/m.jpg";
import video from "../images/video.jpg";
import special from "../images/musi.jpg";

function Home() {
  return (
    <div>
      <div className='home'></div>
      <div className='headercontainer'>
      <h2>MelodyMakers Media, affectionately known as 3M, 
        is a cutting-edge studio specializing in audio music
         and video production. Our mission is to create high-quality, 
         captivating content that resonates with audiences worldwide. 
         With a passion for innovation and a commitment to excellence, 
        3M is where creativity meets technology.</h2>
        <Link to="/Service">
        <button>Show More</button>
        </Link>
        <div className='image'>
          <img src={image}/>
        </div>

    </div>
    <div>
      <h1>OUR SERVICES</h1>
    </div>
    <div className='services'>
      <h2>Audio Music Production</h2>
      <ul>
        <li> 	Recording: State-of-the-art recording facilities equipped 
        with the latest technology to capture pristine sound.</li>
        <li> Mixing and Mastering: Expert engineers ensure your music 
        sounds polished and professional.</li>
        <li> 	Composition and Arranging: Talented composers and arrangers
        to help bring your musical vision to life.</li>
      </ul>
      <div>
      <img className='image2' src={audio}/>
    </div>
    </div>
    <div className='services'>
      <h2>video Music Production</h2>
      <ul>
        <li> 	Pre-Production: Comprehensive planning, storyboarding, and scripting 
          to ensure a smooth production process.</li>
        <li>	Filming: High-definition filming with professional-grade 
          cameras and equipment.</li>
        <li> Post-Production: Advanced editing, color grading, and special
           effects to create visually stunning videos.</li>
      </ul>
      <div>
      <img className='image3' src={video}/>
    </div>
    </div>
    <div className='services'>
      <h2>Special Features</h2>
      <ul>
        <li>	Creative Collaboration: We work closely with artists, musicians, and filmmakers to understand their unique vision and bring it to fruition.</li>
        <li>	Cutting-Edge Technology: Our studio is equipped with the latest software and hardware to deliver top-notch audio and video quality.</li>
        <li>  Diverse Projects: From music videos and documentaries to commercials and live events, 3M handles a wide range of production projects.</li>
      </ul>
      <div>
      <img className='image4' src={special}/>
    </div>
    </div>
    
   
    </div>
    
  )
}

export default Home
