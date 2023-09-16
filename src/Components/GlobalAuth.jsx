import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const GlobalAuth = () => {
  const navigate = useNavigate();
  const authenticated = true;

  if (!authenticated) {
    navigate('/login');
  }
  return <Outlet />;
};

export default GlobalAuth;
