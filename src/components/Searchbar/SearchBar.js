import React, { useState } from 'react';
import blogPost from '../../data/blog.json';

import './style.css';

/**
* @function SearchBar
**/

const SearchBar = (props) => {
    const [search, setSearch] = useState(false);

    const submitSearch = (event) => {
       /*  console.log(event.target.value, blogPost.data); */
        const filteredData = blogPost.data.filter(post => {
           /*  console.log(post); */
            return post.blogTitle.toLowerCase().includes(event.target.value.toLowerCase()) || post.blogCategory.toLowerCase().includes(event.target.value.toLowerCase());
        });             
            console.log('Searched', filteredData);
        }

    const openSearch = (event) => {
        event.preventDefault();
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

    return(
        <div className="submenu">

            <div className="submenuSlogan">
                <p>Making the journey great</p>
            </div>

            <div className="search">
                <form>
                    <input type="text" onChange={submitSearch}  className={searchClass} placeholder="Search posts" />
                    <button onClick={openSearch} className="searchIcon"><i className="fa fa-search"></i></button> 
                </form>            
            </div>
        </div>
)
}

export default SearchBar