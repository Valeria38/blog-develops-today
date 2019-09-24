import React from 'react';
import { Section, Text, Title, DeleteIcon } from './styled';
import { Link } from 'react-router-dom';

const Post = ({ post, handleDelete }) => {
  return (
    <>
      <Section>
        <Link style={{ textDecoration: 'none' }} to={`/posts/${post.id}`}>
          <Title>{post.title}</Title>
        </Link>
        <Text>{post.body}</Text>
        <DeleteIcon onClick={() => handleDelete(post.id)}> X </DeleteIcon>
      </Section>
    </>
  );
};

export default Post;
