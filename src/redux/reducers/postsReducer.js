import * as types from '../types';

const initialState = {
  posts: []
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_POSTS:
      return {
        ...state,
        posts: payload
      };
    default:
      return state;
  }
};

export default postsReducer;
