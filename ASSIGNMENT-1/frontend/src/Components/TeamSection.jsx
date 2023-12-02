import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Eng from '../Media/Images/TeamImages/Eng.png';
import Design from '../Media/Images/TeamImages/Design.png';
import Product from '../Media/Images/TeamImages/Product.png';
import Operations from '../Media/Images/TeamImages/Operations.png';
import HR from '../Media/Images/TeamImages/HR.png';

function TeamSection() {
    const TeamCard = [
        {
          id: "1",
          CardName: "Engineering",
          Image: 'https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/engineering-v2.png'
        },
        {
          id: "2",
          CardName: "Design",
          Image: 'https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/design-v2.png'
        },
        {
          id: "3",
          CardName: "Product",
          Image: 'https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/product.png'
        },
        {
          id: "4",
          CardName: "Marketing",
          Image: 'https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/marketing.png'
        },
        {
          id: "5",
          CardName: "Operations",
          Image: 'https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/operations.png'
        },
        {
          id: "6",
          CardName: "HR",
          Image: 'https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/hr-v2.png'
        },
      ];
    

  const GalleryImages = [Eng, Design, Product, Operations, HR];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Every Team, side-by-side</h1>
      <div className="Team-Section">
        <div className="card-team">
          {TeamCard.map((item) => (
            <div key={item.id} className="Team-card">
              <img src={item.Image} style={{ width: "70px", height: "70px" }} />
              <h4 style={{ marginTop: "-10px" }}>{item.CardName}</h4>
            </div>
          ))}
        </div>
      </div>

      
      <div className="GalleryView-container">
        <Carousel>
          {GalleryImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default TeamSection;
