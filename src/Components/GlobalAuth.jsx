import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const GlobalAuth = () => {
  const { islogin } = useAuth();
  const authenticated = islogin;
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!authenticated) {
  //     navigate('/login');
  //     console.log('navigate');
  //   }
  // }, [authenticated]);
  // return <Outlet />;
};

export default GlobalAuth;
