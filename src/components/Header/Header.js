/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

/**
* @author Joanna
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <ul className="headerMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        </ul>
        <ul className="headerMenu">
          <li><a href="https://www.linkedin.com/in/joannasmerea/" className="fa fa-linkedin" target="_blank" rel="noreferrer" title="LinkedIn"></a></li>
          <li><a href="https://github.com/joannaWebDev" className="fa fa-github" target="_blank" rel="noreferrer" title="GitHub"></a></li>
          <li><a href="https://joannasmerea.com/" className="fa fa-globe" target="_blank" rel="noreferrer" title="Portfolio"></a></li>
        </ul>
    </header>
  )

}

export default Header