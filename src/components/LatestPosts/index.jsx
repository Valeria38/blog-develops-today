import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostsAction } from '../../redux/actionCreators';
import Post from '../Post';
import { NavLink } from 'react-router-dom';
import { Section, Posts } from './styled';

const LatestPosts = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Section>
      <Posts>
        {posts.map(post => (
          <Post key={post.id} post={post} />
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
          border: '1px solid #ccc',
          borderRadius: '5px',
          background: '#ddd',
          cursor: 'pointer',
          textShadow: '2px 4px 4px #fff'
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
  getPosts: () => dispatch(getPostsAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestPosts);
