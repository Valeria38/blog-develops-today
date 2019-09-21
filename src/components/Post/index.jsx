import React from 'react';
import { Section, Text } from './styled';
import { Link } from 'react-router-dom';

const Post = ({ post, showPost }) => {
  return (
    <>
      <Section>
        <Link style={{ textDecoration: 'none' }} to={`/posts/${post.id}`}>
          <Text>Title: {post.title}</Text>
          <Text>Body: {post.body}</Text>
        </Link>
      </Section>
    </>
  );
};
export default Post;
