import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [show,setshow]=useState(false);
  const contref =useRef(null);
  const linkref=useRef(null);

  useEffect(()=>{
    const {height}= linkref.current.getBoundingClientRect();
    console.log(height);
    if(show){
      contref.current.style.height=`${height}px`
    }
    else{
      contref.current.style.height='0px';
    }
    
  },[show]);

  return <>
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={()=>{setshow(!show)}} >
            <FaBars />
          </button>
        </div>
        <div ref={contref}
         className= 'links-container' >
          <ul className='links'  ref={linkref}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  </>
}

export default Navbar
