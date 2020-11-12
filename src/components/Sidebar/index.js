/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

import './style.css';

/**
* @function Sidebar
**/

const Sidebar = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);

    return(
        <div className="sidebarContainer" style={{ marginLeft:'2%'}}>
            <Card style={{ marginBottom: '20px', padding: '20px'}}>
                <div className="cardHeader">
                    <h3>About</h3>
                </div>
                <div className="profileImageContainer">
                    <img src={process.env.PUBLIC_URL + '/about-me.jpg'} alt="Me" />
                </div>
                <div className="cardBody">
                    <h6>THE STORY BEHIND DOJO GIRL</h6>
                    <p className="personalBio">This blog is not going to be about how to get a job as a web developer so much as it’s going to encourage you to not give up on your quest.</p>
                    <p className="personalBio">I like learning the latest cool stuff. I worked as an administrative assistant for a long time. My decision to follow my passion and change carrers from administration to software development began with my interest in new things and advancing technology. I started from scratch, learning how to code in 2019.</p>
                    <p className="personalBio">Don’t give up! Keep following up! Keep doing what you are doing, and eventually you’ll find your break.</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px'}}>
                <div className="cardHeader">
                    <h3>Follow</h3>
                    <ul className="headerMenu inlineSocialLinks">                       
                        <li><a href="https://www.linkedin.com/in/joannasmerea/" className="fa fa-linkedin" target="_blank" rel="noreferrer" title="LinkedIn"></a></li>
                        <li><a href="https://github.com/joannaWebDev" className="fa fa-github" target="_blank" rel="noreferrer" title="GitHub"></a></li>
                        <li><a href="https://joannasmerea.com/" className="fa fa-globe" target="_blank" rel="noreferrer" title="Portfolio"></a></li>
                    </ul>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px'}}>
                <div className="cardHeader">
                    <h3>Recent Posts</h3>
                </div>

                <div className="FeaturedPost">
                    {
                        posts
                        .filter((i, index) => (index < 4))
                        .map(post => {
                            return (
                                <NavLink key={post.id} to={`${process.env.PUBLIC_URL}/post/${post.slug}`}/* {`/post/${post.slug}`} */>
                                    <div className="recentPost">
                                        <h5>{post.blogTitle}</h5>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>
            </Card>
        </div>
    )
}

export default Sidebar
