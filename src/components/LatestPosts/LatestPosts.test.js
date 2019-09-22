import React from 'react';
import { mount } from 'enzyme';
import LatestPosts from './index';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('LatestPosts component', () => {
  it('should render correctly', () => {
    const mountedLatestPosts = mount(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <LatestPosts />
        </Provider>
      </MemoryRouter>
    );

    const component = mountedLatestPosts.find('LatestPosts');
    const createPostButton = mountedLatestPosts.find('a[href="/create-post"]');
    expect(component).toHaveLength(1);
    expect(createPostButton).toHaveLength(1);
  });
});
