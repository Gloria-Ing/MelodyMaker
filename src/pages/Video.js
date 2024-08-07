import React from 'react'
import video from "../images/video.jpg";
import "../Styles/Video.css";

function Audio() {
  return (
    <div className='video'>
      <div className='leftside'>
      <h3>Audio Music Production</h3>
        <form id='contact-form' method='POST'>
         <label>○	Pre-Production: Comprehensive planning, storyboarding, and scripting to ensure a smooth production process.
                ○	Filming: High-definition filming with professional-grade cameras and equipment.
                ○	Post-Production: Advanced editing, color grading, and special effects to create visually stunning videos.
</label>
          <button>Show More</button>
        </form>
        
      </div>
       <div className='rightside'>
       <img className='image2' src={video}/>
     
    </div>
    <div>
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