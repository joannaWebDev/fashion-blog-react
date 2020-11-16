import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

import './style.css';

/**
* @function Layout
**/

const Layout = (props) => {

  return(
      <div className="container">
          {props.children}
          <Sidebar />
      </div>
    )

}

export default Layout