import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, CommentText, Span } from './styled';

const Comment = ({ comment, author }) => (
  <Wrapper>
    <Span>{author}</Span>
    <CommentText>{comment}</CommentText>
  </Wrapper>
);

const mapStateToProps = state => ({
  author: state.posts.author
});

export default connect(mapStateToProps)(Comment);
