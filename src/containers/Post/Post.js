import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost/BlogPost';
import Layout from '../../components/Layout/Layout';


/**
* @function Post
**/

const Post = (props) => {

  return(
        <Layout>
          <BlogPost {...props} />
        </Layout>
    )

}

export default Post;

