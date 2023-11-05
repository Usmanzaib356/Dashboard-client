import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useAuthenticator, useToken } from '../handlers/tokenHandler';
const GlobalAuth = () => {
  const { islogin } = useAuth();
  const navigate = useNavigate();
  const token = useToken();
  const { validateToken } = useAuthenticator();

  useEffect(() => {
    validateToken();
    if (!islogin) {
      navigate('/login');
    }
  }, [islogin, token]);
  return <Outlet />;
};

export default GlobalAuth;
