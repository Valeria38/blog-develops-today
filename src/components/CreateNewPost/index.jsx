import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPostAction } from '../../redux/actionCreators';
import { Form, Label, Input, Button, Section, Header, Text } from './styled';

const CreateNewPost = ({ createPost, newPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isCreated, setIsCreated] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    createPost({
      title,
      body
    });
    setTitle('');
    setBody('');
    setIsCreated(true);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
        </Section>
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
