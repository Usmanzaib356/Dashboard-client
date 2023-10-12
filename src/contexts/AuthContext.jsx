import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [islogin, setIsLogin] = useState(false);
  const [inventoryIn, setInventoryIn] = useState([]);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  );
  useEffect(() => {
    localStorage.setItem('theme', theme ? 'dark' : 'light');
  }, [theme]);

  useEffect(() => {
    const login = Cookies.get('login');
    if (login) {
      setIsLogin(true);
    }
  })



  const [sidebar, setSidebar] = useState(false);
  const [usersGet, setUsersGet] = useState([]);
  const [Products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [dispatchCenter, setDispatchCenter] = useState([]);
  const [dispatchOrder, setDispatchOrder] = useState([]);
  const [remainingOrders, setRemainingOrders] = useState([]);
  const [store, setStore] = useState([]);

  const serverURL = 'https://ill-bee-train.cyclic.cloud/';

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
        usersGet,
        setUsersGet,
        Products,
        setProducts,
        suppliers,
        setSuppliers,
        dispatchCenter,
        setDispatchCenter,
        dispatchOrder,
        setDispatchOrder,
        store,
        setStore,
        remainingOrders,
        setRemainingOrders,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
