import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostsAction } from '../../redux/actionCreators';
import Post from '../Post';

const LatestPosts = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
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
