import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createPostAction } from '../../redux/actionCreators';

const CreateNewPost = ({ createPost, newPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isCreated, setIsCreated] = useState(false);
  console.log(newPost);

  useEffect(() => {
    if (newPost) {
      setIsCreated(true);
    }
  }, [newPost]);

  const handleSubmit = event => {
    event.preventDefault();
    createPost({
      title,
      body
    });
    setTitle('');
    setBody('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </label>
        <label>
          <input
            type='text'
            value={body}
            onChange={event => setBody(event.target.value)}
          />
        </label>
        <button>Add post</button>
      </form>
      {isCreated && (
        <>
          <h1>New post was successfully created with following data: </h1>
          <p>Title: {newPost.title}</p>
          <p>Body: {newPost.body}</p>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  newPost: state.posts.posts[state.posts.posts.length - 1]
});

const mapDispatchToProps = dispatch => ({
  createPost: newPost => dispatch(createPostAction(newPost))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewPost);
