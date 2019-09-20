import React from 'react';
import { Route } from 'react-router-dom';
import LatestPosts from '../LatestPosts';
import PostDetails from '../PostDetails';

const Blog = () => {
  return (
    <>
      <Route exact path='/posts' component={LatestPosts} />
      <Route exact path='/posts/:postId' component={PostDetails} />
    </>
  );
};

export default Blog;
