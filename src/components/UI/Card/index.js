import React from 'react';
import './style.css';

/**
* @function Card
**/

const Card = (props) => {
  return(
    <div className="card" {...props}>
        {props.children}
    </div>
  )

}

export default Card