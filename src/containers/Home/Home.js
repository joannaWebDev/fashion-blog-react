/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Card from '../../components/UI/Card';
import FeaturedPost from './FeaturedPost/FeaturedPost';
import blogData from '../../data/blog.json';
import Layout from '../../components/Layout/Layout';
import { Link} from 'react-router-dom';

import './style.css';
const SideImage = (props) => {
    return (       
            <div style={{ height: `${props.height}px` }}>
                <img src={props.src} alt="Featurest Posts image" />
            </div>
    );
}

const ImageGallery = (props) => ( 
    <div className="image-gallery">
        <h2 className="home-title">Most discussed posts</h2>
        <div className="gallery-post" style={props.galleryStyle}>                
                <section className="mainImageWrapper">              
                        <a href="/post/cardi-b-with-reebok">
                            <img src={process.env.PUBLIC_URL + '/image-2.jpg'} alt="Image post" title="CARDI B LAUNCHES COLLECTION WITH REEBOK"/>
                        <p>CARDI B LAUNCHES COLLECTION WITH REEBOK</p>  
                        </a>                  
                </section>                
                <section className={"sideImageWrapper"}  >
                {
                        props.blogArray
                        .filter((index) => (index > 0 && index < 4))
                        .map((blog) => 
                        <Link to={`post/${blog.slug}`}>                        
                            <div className="imageWrapper">
                                <SideImage 
                                    height={props.sideImageHeight}
                                    src={`${process.env.PUBLIC_URL}/${blog.blogImage}`}                                 
                                    key={blog.id}
                                    id={blog.id}                           
                                />
                                <p className="featured-image-title">{blog.blogTitle}</p>  
                            </div> 
                            </Link>                    
                        )                       
                    }                                                                 
                </section>
        </div>
    </div>
);

const Home  = props => {
    const blogArray = blogData.data.map(post => {
        return {
            "blogImage": post.blogImage, 
            "blogTitle": post.blogTitle, 
            "slug": post.slug
        };
    });
    
    return (
        <>
            <Card style={{ marginBottom: '10px', padding: '20px',backgroundColor:' #ecd574'}}>
                <ImageGallery blogArray={blogArray}/>
            </Card>           
            <Layout>
                <FeaturedPost />
            </Layout>
        </>
    );
}

export default Home;