import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LatestPosts from '../LatestPosts';
import PostDetails from '../PostDetails';
import CreateNewPost from '../CreateNewPost';
import ErrorPage from '../ErrorPage';

const Blog = () => {
  return (
    <Switch>
      <Route exact path='/' component={LatestPosts} />
      <Route exact path='/create-post' component={CreateNewPost} />
      <Route exact path='/posts/:postId' component={PostDetails} />
      <Route exact path='/:wrongRoute' component={ErrorPage} />
    </Switch>
  );
};

export default Blog;
