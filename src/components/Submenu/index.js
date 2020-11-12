import React, { useState } from 'react';

import './style.css';

/**
* @function Searchbar
**/

const Searchbar = (props) => {
    const [search, setSearch] = useState(false);

    const submitSearch = (event) => {
       /*  event.filter(post => post.props.slug == props.slug);        */   
        event.preventDefault();
        console.log('Searched');
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

    return(
        <div className="submenu">

            <div className="submenuSlogan">
                <p>Making the journey great</p>
            </div>

            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass} placeholder="Search posts" />
                    <button onClick={openSearch} className="searchIcon" type="submit"><i className="fa fa-search"></i></button> 
                </form>            
            </div>
        </div>
)
}

export default Searchbar