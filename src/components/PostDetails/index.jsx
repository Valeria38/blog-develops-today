import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getPostAction,
  addCommentAction,
  setAuthorAction
} from '../../redux/actionCreators';
import Comment from '../Comment';
import ArrowBack from '../ArrowBack';
import CommentForm from '../CommentForm';
import { Header, Section, Text, Error, Line } from './styled.js';

const PostDetails = props => {
  const { postId } = props.match.params;
  const { showPost, post, comments, addComment } = props;

  const [error, setError] = useState('');

  const postComments = comments.filter(comment => comment.postId === postId);

  useEffect(() => {
    showPost(postId);
  }, [showPost, postId]);

  const sendComment = (comment, authorValue) => {
    if (comment) {
      setError('');
      addComment({ postId, body: comment, author: authorValue });
    } else {
      setError("You can't leave an empty comment");
    }
  };

  return post.title || post.body ? (
    <>
      <ArrowBack>Back to posts</ArrowBack>
      <Section>
        <Header>{post.title}</Header>
        <Text>{post.body}</Text>
      </Section>
      <Line />
      <CommentForm sendComment={sendComment} />
      {error && <Error>{error}</Error>}
      {postComments.map(comment => (
        <Comment key={comment.id} comment={comment.comment} id={comment.id} />
      ))}
    </>
  ) : (
    <Error>There is no post with this id.</Error>
  );
};

const mapStateToProps = state => ({
  post: state.posts.activePost,
  comments: state.posts.comments
});

const mapDispatchToProps = dispatch => ({
  showPost: postId => dispatch(getPostAction(postId)),
  addComment: commentObject => dispatch(addCommentAction(commentObject)),
  setAuthor: author => dispatch(setAuthorAction(author))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
