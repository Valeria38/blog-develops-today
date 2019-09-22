import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPostAction, setAuthorAction } from '../../redux/actionCreators';
import {
  Form,
  Label,
  Input,
  Button,
  Section,
  Header,
  Text,
  ArrowBack,
  Error
} from './styled';
import ArrowLeft from '../Arrow';

const CreateNewPost = ({
  createPost,
  newPost,
  setAuthorToStore,
  authorFromStore
}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isCreated, setIsCreated] = useState(false);
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (!title || !body) {
      setError("You can't create an empty post");
      setIsCreated(false);
      return;
    }

    createPost({
      title,
      body
    });

    setAuthorToStore(author);

    setTitle('');
    setBody('');
    setAuthor('');
    setError('');
    setIsCreated(true);
  };

  return (
    <>
      <ArrowBack>
        <ArrowLeft />
        <Link
          style={{ textDecoration: 'none', color: '#fff', marginLeft: '10px' }}
          to='/'
        >
          Back to posts
        </Link>
      </ArrowBack>
      <Form onSubmit={handleSubmit}>
        <Label>
          Author:
          <Input
            type='text'
            value={author}
            onChange={event => setAuthor(event.target.value)}
          />
        </Label>
        <Label>
          Post title:
          <Input
            type='text'
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </Label>
        <Label>
          Post text:
          <Input
            type='text'
            value={body}
            onChange={event => setBody(event.target.value)}
          />
        </Label>
        <Button>Add post</Button>
      </Form>
      {error && <Error>{error}</Error>}
      {isCreated && newPost && (
        <Section>
          <Header>
            New post was successfully created with the following data:{' '}
          </Header>
          <Text>Title: {newPost.title}</Text>
          <Text>Body: {newPost.body}</Text>
          <Text>Author: {authorFromStore}</Text>
          <Text>Publish Date: {new Date().toUTCString()}</Text>
        </Section>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  newPost: state.posts.posts[state.posts.posts.length - 1],
  authorFromStore: state.posts.author
});

const mapDispatchToProps = dispatch => ({
  createPost: newPost => dispatch(createPostAction(newPost)),
  setAuthorToStore: author => dispatch(setAuthorAction(author))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewPost);
