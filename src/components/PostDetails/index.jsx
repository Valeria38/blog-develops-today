import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getPostAction,
  addCommentAction,
  setAuthorAction
} from '../../redux/actionCreators';
import Comment from '../Comment';
import ArrowBack from '../ArrowBack';
import {
  Header,
  Section,
  Text,
  TextArea,
  Input,
  Button,
  Error,
  CommentContainer,
  Label,
  Line
} from './styled.js';

const PostDetails = props => {
  const { postId } = props.match.params;
  const { showPost, post, addComment, comments } = props;

  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [authorValue, setAuthorValue] = useState('');

  const postComments = comments.filter(comment => comment.postId === postId);

  useEffect(() => {
    showPost(postId);
  }, [showPost, postId]);

  const sendComment = () => {
    if (comment) {
      setError('');

      addComment({ postId, body: comment, author: authorValue });

      setComment('');
      setAuthorValue('');
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
      <CommentContainer>
        <Label htmlFor='authorField'>Your name:</Label>
        <Input
          value={authorValue}
          onChange={event => setAuthorValue(event.target.value)}
          id='authorField'
        />
        <Label htmlFor='commentField'>Leave comment:</Label>
        <TextArea
          value={comment}
          onChange={event => setComment(event.target.value)}
          id='commentField'
        ></TextArea>
        <Button onClick={sendComment}>Add comment</Button>
      </CommentContainer>
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
