import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
        </div>
        <div className="gpt3__navbar-links_container">
          <p className="hover-underline-animation"><a href="/">Home</a></p>
          <p className="hover-underline-animation"><a href="/about">ABOUT</a></p>
          <p className="hover-underline-animation"><a href="/feedback">FEEDBACK</a></p>
          <p className="hover-underline-animation"><a href="/prediction">PREDICTION</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      <p><a href="/creat" className='LOG hover-underline-animation'>LOGIN</a></p>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p ><a href="/">Home</a></p>
          <p><a href="/about">ABOUT</a></p>
          <p><a href="/feedback">FEEDBACK</a></p>
          <p><a href="/prediction">PREDICTION</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <p><a href="/creat"  className='LOG hover-underline-animation'>LOGIN</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
