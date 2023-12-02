import React from 'react'
import image_2 from '../Media/Images/images_2.png';

function Section2() {
  return (
    <>
    <div className="logo-container">
        <p style={{color:"black",fontSize:"50px",fontWeight:"bolder"}}>Millions run on Notion every day</p>
        <p style={{marginTop:"-50px",fontSize:"18px"}}>Powering the world’s best teams, from next-generation startups <br/>to established enterprises.</p>
        <p style={{color:"blue"}}><a href=''>Read Customer stories</a></p>
        <img src={image_2} alt='logos'></img>
    </div>
    
    </>
  )
}

export default Section2