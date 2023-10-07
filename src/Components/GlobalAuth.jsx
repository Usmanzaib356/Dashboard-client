import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth"
const GlobalAuth = () => {
  const { islogin } = useAuth()
  const navigate = useNavigate();
  const authenticated = islogin;
  console.log(authenticated);

  useEffect(()=>{
    if (!authenticated) {
      navigate('/login');
      console.log('navigate');
    }
  },[authenticated])
  return <Outlet />;
};

export default GlobalAuth;
