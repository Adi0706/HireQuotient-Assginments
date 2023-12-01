import React from 'react'
import logonotion from '../Media/notionlogo.png'

function TopBar() {
  return (
    <>
    <div className="navbar">
      <ul className='list-1'>
       <li className='list_1-item'> <img src={logonotion} alt='notion-logo' className='logo-pic'></img> </li>
       <li className='list_1-item'> Product </li>
       <li className='list_1-item'> Download</li>
       <li className='list_1-item'> Solutions </li>
       <li className='list_1-item'> Resources </li>
       <li className='list_1-item'> Pricing </li>
      </ul>
      <ul className='list-2'>
       <li className='list_2-item'> Request a Demo  </li>
       <li className='list_2-item'> Login </li>
       <li className='list_2-item'> <button className='btn'>Get Notion Free</button> </li>
       
      </ul>
    </div>
    </>
  )
}

export default TopBar