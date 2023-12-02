import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import tokyo from '../Media/Images/Images_new/tokyo.png';
import NY from '../Media/Images/Images_new/NY.png';
import SH from '../Media/Images/Images_new/SH.png';
import London from '../Media/Images/Images_new/London.png';

function Section3() {
  const images = [tokyo, NY, SH, London];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const UserData = [
    {
      id: '1',
      CardIcon: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-deborah.png',
      CardName: 'Deborah Mecca',
      CardUsername: '@DebMecca',
      CardDesc: "I used to HATE documenting things. And then I started using @NotionHQ and I document a lot. A LOT A LOT. Now I just realize that it wasn't that I hated documenting, I just hated Google Docs."
    },
    {
      id: '2',
      CardIcon: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-andre.png',
      CardName: 'André Blackman',
      CardUsername: '@mindofandre',
      CardDesc: "One of the most incredible things about @NotionHQ is the dynamic community being built - creating and sharing at its best."
    },
    {
      id: '3',
      CardIcon: 'https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-oliver.png',
      CardName: 'Oliver Peyre',
      CardUsername: '@opeyre',
      CardDesc: "@NotionHQ Truly impressed by the velocity and quality of your work. Making using Notion even more fun week after week!"
    },
  ];

  return (
    <>
      <div className='Section-3'>
        <div className='Section-3-Gallery'>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`slide-${index}`} className="carousel-image" style={{height:"500px",width:"700px"}}/>
              </div>
            ))}
          </Slider>
        </div>
        <div className="comment-section">
          {UserData.map((item) => (
            <div key={item.id} className="comment-card">
              <img src={item.CardIcon} alt={item.CardName} className="card-icon" />
              <div className="card-text">
                <h4>{item.CardName}</h4>
                <p>{item.CardUsername}</p>
                <p>{item.CardDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section3;
