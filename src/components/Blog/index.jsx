import React from 'react';
import { Route } from 'react-router-dom';
import LatestPosts from '../LatestPosts';
import PostDetails from '../PostDetails';
import CreateNewPost from '../CreateNewPost';
import ErrorPage from '../ErrorPage';

const Blog = () => {
  return (
    <>
      <Route exact path='/' component={LatestPosts} />
      <Route exact path='/create-post' component={CreateNewPost} />
      <Route exact path='/posts/:postId' component={PostDetails} />
      <Route exact path='/:wrongRoute' component={ErrorPage} />
    </>
  );
};

export default Blog;
