import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <>
    <NavLink to='/posts'>
      <p>See posts</p>
    </NavLink>
    <NavLink to='/create-post'>
      <p>Create new post</p>
    </NavLink>
  </>
);

export default Home;
