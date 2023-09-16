import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [islogin, setIsLogin] = useState(false);
  const [inventoryIn, setInventoryIn] = useState([]);
  // const [rolee] = useState("")
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  );
  useEffect(() => {
    localStorage.setItem('theme', theme ? 'dark' : 'light');
  }, [theme]);

  useEffect(() => {
    const check = Cookies.get('islogin');
    if (check === 'true') {
      return setIsLogin(true);
    }
  }, []);

  const [sidebar, setSidebar] = useState(false);

  const serverURL = 'http://localhost:8080';

  return (
    <AuthContext.Provider
      value={{
        serverURL,
        islogin,
        setIsLogin,
        theme,
        setTheme,
        sidebar,
        setSidebar,
        inventoryIn,
        setInventoryIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
