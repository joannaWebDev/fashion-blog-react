import React from 'react';
import './style.css';

/**
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logo">
        <a href={process.env.PUBLIC_URL}>Fashion Gal</a>
    </div>
  )

}

export default Logo