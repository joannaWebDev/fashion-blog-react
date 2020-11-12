import React from 'react';
import Card from '../../../components/UI/Card';

import './style.css';

/**
* @function FeaturedPost
**/

const FeaturedPost = () => {
  return(
    <div className="blogPostContainer">
        <Card style={{ marginBottom: '20px', padding: '20px'}}>
            <div className="postImageWrapper">
                <img src={process.env.PUBLIC_URL + '/image-1.jpg'} alt="An alter me" width="450" height="300"/>
            </div>
            <div className="featured-post">
                <h1>EMMA ROBERTS COVERS 'COSMOPOLITAN'</h1>
                <span>posted on November 21st, 2020</span>
                <p>Following the release of a sneaker on her birthday last month, Reebok is launching the full Club C collection by Cardi B. (The partnership is also on the cover of Footwear News.) The Club C Cardi ($100) and the Cardi Coated Club C Double ($80) come in three colorways — white, red and black — and will be available in both women's and children's sizing on Reebok.com and at Foot Locker starting on Nov. 13.</p>
                <p>Emma Roberts appears on the cover the December/January issue of Cosmopolitan photographed by Sasha Samsonova</p>
                <a href={process.env.PUBLIC_URL + '/post/cardi-b-with-reebok'} className="read-more">Read More</a>
            </div>
        </Card> 
    </div>
    )
}

export default FeaturedPost