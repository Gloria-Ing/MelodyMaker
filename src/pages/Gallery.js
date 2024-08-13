import React from 'react';
import "../Styles/Gallery.css";
import image from "../images/R-Image_2.jpg";
import image1 from "../images/R-Image_4.jpg";
import image2 from "../images/R-Image_7.jpg";
import image3 from "../images/R-Image_9.jpg";

function Gallery() {
  return (
    <div className='container'>
      <div className='content'>
       
        <p>Located at Gisenyi, Rwanda, MelodyMakers Media welcomes clients from all over the world.</p>
        <p>For inquiries, project quotes, or to book a session, please use the button below to contact us:</p>
        <a href="tel:+250781959114" className="contact-button">Contact</a>
      </div>
      <div className='images'>
        <img className='image' src={image} alt="image" />
        <img className='image1' src={image1} alt="image1" />
        <img className='image2' src={image2} alt="image2" />
        <img className='image3' src={image3} alt="image3" />
      </div>
    </div>
  );
}

export default Gallery;
