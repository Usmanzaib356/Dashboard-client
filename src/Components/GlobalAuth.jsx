import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthenticator, useToken } from '../handlers/tokenHandler';

const GlobalAuth = () => {
  const token = useToken();
  const { validateToken } = useAuthenticator();

  useEffect(() => {
    validateToken();
  }, [token]);
  return <Outlet />;
};

export default GlobalAuth;
