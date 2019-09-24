import React, { useState } from 'react';
import { CommentContainer, Label, Input, TextArea, Button } from './styled';

const CommentForm = ({ sendComment, addComment }) => {
  const [authorValue, setAuthorValue] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    sendComment(comment, authorValue);
    setComment('');
    setAuthorValue('');
  };

  return (
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
      <Button onClick={handleSubmit}>Add comment</Button>
    </CommentContainer>
  );
};

export default CommentForm;
