import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, CommentText, Span } from './styled';

const Comment = ({ comment, id, comments }) => {
  const author = comments.filter(comment => comment.id === +id)[0].author;

  return (
    <Wrapper>
      <Span>{author}</Span>
      <CommentText>{comment}</CommentText>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  comments: state.posts.comments
});

export default connect(mapStateToProps)(Comment);
