import * as types from '../types';

const initialState = {
  posts: [],
  activePost: {}
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
    default:
      return state;
  }
};

export default postsReducer;
