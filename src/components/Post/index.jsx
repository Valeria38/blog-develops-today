import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Post = ({ post, showPost }) => {
  return (
    <NavLink to={`/posts/${post.id}`}>
      <div className='post'>
        <p>Title: {post.title}</p>
        <p>Body: {post.body}</p>
      </div>
    </NavLink>
  );
};
export default Post;
