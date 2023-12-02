import React from 'react'

function PreFooter() {
  return (
    <>
    <div className='pre-footer'>
        <p style={{fontSize:"40px",fontWeight:"bolder"}}>Get started for free</p>
        <p style={{marginTop:"-30px"}}>Play around with it first. Pay and add your team later.</p>
      <span style={{marginTop:"20px",margin:"5px"}}><button className='btn'>Try Notion free</button> <a href="" style={{marginLeft:"20px"}}>Request Free Demo</a></span>
      <br/>  
      <img src='https://www.notion.so/cdn-cgi/image/format=webp,width=750/front-static/pages/home/notion-parade.png' alt='image-footer' style={{width:"500px",height:"300px"}}></img>

    </div>
    <hr></hr>
    </>
  )
}

export default PreFooter