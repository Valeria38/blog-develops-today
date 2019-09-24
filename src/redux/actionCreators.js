import * as types from './types';
import { fetchData } from '../helpers';

export const getPostsAction = () => dispatch => {
  fetchData('https://simple-blog-api.crew.red/posts').then(data =>
    dispatch({
      type: types.SET_POSTS,
      payload: data
    })
  );
};

export const getPostAction = postId => dispatch => {
  fetchData(`https://simple-blog-api.crew.red/posts/${postId}`).then(data =>
    dispatch({
      type: types.SET_POST,
      payload: data
    })
  );
};

export const addCommentAction = commentObject => dispatch => {
  fetchData(
    `https://simple-blog-api.crew.red/comments`,
    'POST',
    commentObject
  ).then(data => {
    dispatch({
      type: types.ADD_COMMENT,
      payload: {
        comment: data.body,
        postId: data.postId,
        id: data.id,
        author: data.author
      }
    });
  });
};

export const createPostAction = newPost => dispatch => {
  fetchData(`https://simple-blog-api.crew.red/posts`, 'POST', newPost).then(
    data =>
      dispatch({
        type: types.ADD_NEW_POST,
        payload: data
      })
  );
};

export const setAuthorAction = author => {
  return {
    type: types.SET_AUTHOR,
    payload: author
  };
};
