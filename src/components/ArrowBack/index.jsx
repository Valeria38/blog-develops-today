import React from 'react';
import ArrowLeft from '../Arrow';
import { Link } from 'react-router-dom';
import { Arrow } from './styled';

const ArrowBack = ({ children }) => (
  <Arrow>
    <ArrowLeft />
    <Link
      style={{ textDecoration: 'none', color: '#fff', marginLeft: '10px' }}
      to='/'
    >
      {children}
    </Link>
  </Arrow>
);

export default ArrowBack;
