import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPostAction, addCommentAction } from '../../redux/actionCreators';
import './style.css';

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
      <h2>Post Details: </h2>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <p>Comments: </p>
      <textarea
        value={comment}
        onChange={event => setComment(event.target.value)}
      ></textarea>
      <br />
      <button onClick={sendComment}>Add comment</button>
      {comments.map(comment => (
        <div className='post-details__comment' key={comment.id}>
          {comment.value}
        </div>
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
