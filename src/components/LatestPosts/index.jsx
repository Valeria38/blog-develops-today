import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostsAction } from '../../redux/actionCreators';

const LatestPosts = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return <>{JSON.stringify(posts)}</>;
};

const mapStateToProps = state => ({
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestPosts);
