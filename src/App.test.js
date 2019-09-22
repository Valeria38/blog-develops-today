import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';

describe('App component', () => {
  it('should render', () => {
    const mountedApp = mount(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    const blog = mountedApp.find('LatestPosts');
    expect(mountedApp).toHaveLength(1);
    expect(blog).toHaveLength(1);
  });

  it('should render ErrorPage while pathname is incorrect', () => {
    const mountedApp = mount(
      <MemoryRouter initialEntries={['/wrong-path']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    const ErrorPage = mountedApp.find('ErrorPage');
    expect(ErrorPage).toHaveLength(1);
  });
});
