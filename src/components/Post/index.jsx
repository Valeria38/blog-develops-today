import React from 'react';
import { Section, Text, Title } from './styled';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <>
      <Section>
        <Link style={{ textDecoration: 'none' }} to={`/posts/${post.id}`}>
          <Title>{post.title}</Title>
          <Text>{post.body}</Text>
        </Link>
      </Section>
    </>
  );
};
export default Post;
