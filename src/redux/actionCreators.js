import * as types from './types';
import fetchData from '../helpers/fetchData';

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
