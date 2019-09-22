import postsReducer, { initialState } from './postsReducer';

describe('postsReducer', () => {
  it('returns default state', () => {
    const defaultState = postsReducer(initialState, { type: 'WRONG_TYPE' });
    expect(defaultState).toEqual(initialState);
  });

  it('updates posts', () => {
    const posts = [{ id: 1, title: 'Title 1', body: 'Body' }];

    const updatedWithPosts = postsReducer(initialState, {
      type: 'SET_POSTS',
      payload: posts
    });
    const newState = { ...initialState, posts };
    expect(updatedWithPosts).toEqual(newState);
  });

  it('updates author', () => {
    const author = 'John Doe';

    const updatedWithPosts = postsReducer(initialState, {
      type: 'SET_AUTHOR',
      payload: author
    });
    const newState = { ...initialState, author };
    expect(updatedWithPosts).toEqual(newState);
  });
});
