import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPostAction, setAuthorAction } from '../../redux/actionCreators';
import { Form, Label, Input, Button, Section, Header, Text } from './styled';

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

  const handleSubmit = event => {
    event.preventDefault();
    createPost({
      title,
      body
    });

    setAuthorToStore(author);

    setTitle('');
    setBody('');
    setAuthor('');
    setIsCreated(true);
  };

  return (
    <>
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
