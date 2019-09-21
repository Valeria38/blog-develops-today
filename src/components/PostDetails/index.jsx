import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPostAction, addCommentAction } from '../../redux/actionCreators';
import { Header, Section, Text, TextArea, Button, Comment } from './styled.js';

const PostDetails = props => {
  const { postId } = props.match.params;
  const { showPost, post, addComment, comments } = props;
  const [comment, setComment] = useState('');

  useEffect(() => {
    showPost(postId);
  }, [showPost, postId]);

  const sendComment = () => {
    addComment({ postId, value: comment });
    setComment('');
  };

  return (
    <>
      <Section>
        <Header>Post Details: </Header>
        <Text>
          Title: <span>{post.title}</span>
        </Text>
        <Text>
          Text: <span>{post.body}</span>
        </Text>
        <Text>Comments: </Text>
        <TextArea
          value={comment}
          onChange={event => setComment(event.target.value)}
        ></TextArea>
        <Button onClick={sendComment}>Add comment</Button>
      </Section>
      {comments.map(comment => (
        <Comment key={comment.id}>{comment.value}</Comment>
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  post: state.posts.activePost,
  comments: state.posts.comments
});

const mapDispatchToProps = dispatch => ({
  showPost: postId => dispatch(getPostAction(postId)),
  addComment: comment => dispatch(addCommentAction(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
