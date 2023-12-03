import React from 'react';
import logonotion from '../Media/notionlogo.png';

function TopBar() {
  return (
    <>
      <div className="navbar">
        <ul className='list-1'>
          <li className='list_1-item'> <img src={logonotion} alt='notion-logo' className='logo-pic'></img> </li>
          <li className='list_1-item dropdown'>
            <span className='dropdown-btn'>Product </span>
            <div className='dropdown-content'>
              <a href='#' className='dropdown-link'>Projects</a>
              <a href='#' className='dropdown-link'>Wikis</a>
              <a href='#' className='dropdown-link'>Docs</a>
              <a href='#' className='dropdown-link'>Notion AI</a>
            </div>
          </li>
          <li className='list_1-item dropdown'>
            <span className='dropdown-btn'>Download </span>
            <div className='dropdown-content'>
              <a href='#' className='dropdown-link'>IOS and Android</a>
              <a href='#' className='dropdown-link'>Mac and Windows</a>
              <a href='#' className='dropdown-link'>Web Clipper</a>
            </div>
          </li>
          <li className='list_1-item dropdown'>
            <span className='dropdown-btn'>Solutions </span>
            <div className='dropdown-content'>
              <a href='#' className='dropdown-link'>Enterprise</a>
              <a href='#' className='dropdown-link'>Small Business</a>
              <a href='#' className='dropdown-link'>Personal</a>
            </div>
          </li>
          <li className='list_1-item dropdown'>
            <span className='dropdown-btn'>Resources </span>
            <div className='dropdown-content'>
              <a href='#' className='dropdown-link'>Blog</a>
              <a href='#' className='dropdown-link'>Guides and Travels</a>
              <a href='#' className='dropdown-link'>Webinar</a>
              <a href='#' className='dropdown-link'>Help Center</a>
              <a href='#' className='dropdown-link'>API Docs</a>
              <a href='#' className='dropdown-link'>Community</a>
              <a href='#' className='dropdown-link'>Hire a Consultant</a>
            </div>
          </li>
          <li className='list_1-item dropdown'>
            <span className='dropdown-btn'>Pricing </span>
         
          </li>
        </ul>
        <ul className='list-2'>
          <li className='list_2-item'> Request a Demo </li>
          <li className='list_2-item'> Login </li>
          <li className='list_2-item'> <button className='btn'>Get Notion free</button> </li>
        </ul>
      </div>
    </>
  );
}

export default TopBar;
