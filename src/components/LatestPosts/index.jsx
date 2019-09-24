import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostsAction, deletePostAction } from '../../redux/actionCreators';
import Post from '../Post';
import { NavLink } from 'react-router-dom';
import { Section, Posts } from './styled';

const LatestPosts = ({ posts, getPosts, deletePost }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handleDelete = postId => {
    deletePost(postId);
  };

  return (
    <Section>
      <Posts>
        {posts.map(post => (
          <Post key={post.id} post={post} handleDelete={handleDelete} />
        ))}
      </Posts>
      <NavLink
        style={{
          textDecoration: 'none',
          color: '#7b68ee',
          fontSize: '20px',
          height: '40px',
          lineHeight: '40px',
          width: '180px',
          textAlign: 'center',
          background: '#ddd',
          cursor: 'pointer'
        }}
        to='create-post'
      >
        Create new post
      </NavLink>
    </Section>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPostsAction()),
  deletePost: postId => dispatch(deletePostAction(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestPosts);
