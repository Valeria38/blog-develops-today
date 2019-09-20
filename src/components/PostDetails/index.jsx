import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPostAction } from '../../redux/actionCreators';

const PostDetails = props => {
  const { postId } = props.match.params;
  const { showPost, post } = props;

  useEffect(() => {
    showPost(postId);
  }, [showPost, postId]);
  return (
    <>
      <h2>Post Details: </h2>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  showPost: postId => dispatch(getPostAction(postId))
});

const mapStateToProps = state => ({
  post: state.posts.activePost
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
