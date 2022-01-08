import React, { useState, useEffect } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from "../../images/logo.png"

/*
Delete contax style
Change font

*/ 

export default function Navbar() {

  const SCREEN_WIDTH = window.innerWidth
  const SCREEN_HEIGHT = window.innerHeight
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  console.log(SCREEN_WIDTH)
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={Logo} style={{objectFit:"contain", position:"absolute", left:0, top:0, height:"100px", width:"200px", marginLeft:"2vh"}}/>
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>

            <AiFillHeart className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu' } >
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/dand'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                D&D
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/painting'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                PAINTINGS
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/tattoo'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                TATTOO
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}