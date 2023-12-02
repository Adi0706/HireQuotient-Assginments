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
              <a href='#' className='dropdown-link'>Sub Item 1</a>
              <a href='#' className='dropdown-link'>Sub Item 2</a>
              <a href='#' className='dropdown-link'>Sub Item 3</a>
            </div>
          </li>
          <li className='list_1-item dropdown'>
            <span className='dropdown-btn'>Download </span>
            <div className='dropdown-content'>
              <a href='#' className='dropdown-link'>Sub Item 1</a>
              <a href='#' className='dropdown-link'>Sub Item 2</a>
              <a href='#' className='dropdown-link'>Sub Item 3</a>
            </div>
          </li>
          <li className='list_1-item dropdown'>
            <span className='dropdown-btn'>Solutions </span>
            <div className='dropdown-content'>
              <a href='#' className='dropdown-link'>Sub Item 1</a>
              <a href='#' className='dropdown-link'>Sub Item 2</a>
              <a href='#' className='dropdown-link'>Sub Item 3</a>
            </div>
          </li>
          <li className='list_1-item dropdown'>
            <span className='dropdown-btn'>Resources </span>
            <div className='dropdown-content'>
              <a href='#' className='dropdown-link'>Sub Item 1</a>
              <a href='#' className='dropdown-link'>Sub Item 2</a>
              <a href='#' className='dropdown-link'>Sub Item 3</a>
            </div>
          </li>
          <li className='list_1-item dropdown'>
            <span className='dropdown-btn'>Pricing </span>
            <div className='dropdown-content'>
              <a href='#' className='dropdown-link'>Sub Item 1</a>
              <a href='#' className='dropdown-link'>Sub Item 2</a>
              <a href='#' className='dropdown-link'>Sub Item 3</a>
            </div>
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
