import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';
import LatestPosts from '../LatestPosts';
import PostDetails from '../PostDetails';
import CreateNewPost from '../CreateNewPost';

const Blog = () => {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/posts' component={LatestPosts} />
      <Route exact path='/create-post' component={CreateNewPost} />
      <Route exact path='/posts/:postId' component={PostDetails} />
    </>
  );
};

export default Blog;
