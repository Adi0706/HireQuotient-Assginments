
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import AIimage from '../Media/Images/AIimage.png';
import Docs from '../Media/Images/Docs.png';
import Projects from '../Media/Images/Projects.png';
import Wiki from '../Media/Images/Wiki.png';



const GalleryView = () => {
  const [showNextButton, setShowNextButton] = useState(false);

  return (
    <div className="GalleryView-container">
      <Carousel
        autoPlay={true} 
        showThumbs={false}
        onMouseEnter={() => setShowNextButton(true)}
        onMouseLeave={() => setShowNextButton(false)}
      >
        <div className="carousel-item">
          <img src={AIimage} alt="AI Image" />
          {showNextButton && (
            <button className="next-button" onClick={() => console.log('Next clicked')}>
              Next
            </button>
          )}
        </div>
        <div className="carousel-item">
          <img src={Docs} alt="Docs Image" />
        </div>
        <div className="carousel-item">
          <img src={Projects} alt="Projects Image" />
        </div>
        <div className="carousel-item">
          <img src={Wiki} alt="Wiki Image" />
        </div>
      </Carousel>
    </div>
  );
};

export default GalleryView;
