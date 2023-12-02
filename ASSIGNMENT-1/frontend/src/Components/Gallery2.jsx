import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import Candidate_img_1 from '../Media/Images/Candidate_img_1.png';
import Candidate_img_2 from '../Media/Images/Candidate_img_2.png';
import Candidate_img_3 from '../Media/Images/Candidate_img_3.png';
import Candidate_img_4 from '../Media/Images/Candidate_img_4.png';
import Candidate_img_5 from '../Media/Images/Candidate_img_5.png';
import Candidate_img_6 from '../Media/Images/Candidate_img_6.png';
import Candidate_img_7 from '../Media/Images/Candidate_img_7.png';

function Gallery2() {
  const [showNextButton, setShowNextButton] = useState(false);

  return (
    <>
      <div className="Canditate-Section">
        <div className="heading-text">
          <img src='https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekI.png' alt="Header" />
          <h1 style={{ fontSize: "40px" }}>Powerful building blocks</h1>
        </div>

        <div className="GalleryView">
            <p>🔁</p>
         <p><b>Visualize, filter & sort any way you want</b></p>
         <p>Show only tasks assigned to you, or items marked as urgent. Break <br/>down any project in the way that’s most helpful to you.</p>
          <Carousel
            autoPlay={true}
            showThumbs={false}
            onMouseEnter={() => setShowNextButton(true)}
            onMouseLeave={() => setShowNextButton(false)}
          >
            <div className="carousel-item">
              <img src={Candidate_img_1} alt="Candidate Image 1" />
              {showNextButton && (
                <button className="next-button" onClick={() => console.log('Next clicked')}>
                  Next
                </button>
              )}
            </div>
            <div className="carousel-item">
              <img src={Candidate_img_2} alt="Candidate Image 2" />
            </div>
            <div className="carousel-item">
              <img src={Candidate_img_3} alt="Candidate Image 3" />
            </div>
            <div className="carousel-item">
              <img src={Candidate_img_4} alt="Candidate Image 4" />
            </div>
            <div className="carousel-item">
              <img src={Candidate_img_5} alt="Candidate Image 5" />
            </div>
            <div className="carousel-item">
              <img src={Candidate_img_6} alt="Candidate Image 6" />
            </div>
            <div className="carousel-item">
              <img src={Candidate_img_7} alt="Candidate Image 7" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Gallery2;
