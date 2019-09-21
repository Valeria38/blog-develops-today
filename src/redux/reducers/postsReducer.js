import * as types from '../types';

const initialState = {
  posts: [],
  activePost: {},
  comments: [],
  author: ''
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_POSTS:
      return {
        ...state,
        posts: payload
      };
    case types.SET_POST:
      return {
        ...state,
        activePost: payload
      };
    case types.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, payload]
      };
    case types.ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, payload]
      };
    case types.SET_AUTHOR:
      return {
        ...state,
        author: payload
      };
    default:
      return state;
  }
};

export default postsReducer;
