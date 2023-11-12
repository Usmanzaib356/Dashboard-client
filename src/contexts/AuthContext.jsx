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
  });

  // const serverURL = process.env.REACT_APP_SERVER_URL

  const [sidebar, setSidebar] = useState(false);
  const [usersGet, setUsersGet] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [Products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [dispatchCenter, setDispatchCenter] = useState([]);
  const [dispatchOrder, setDispatchOrder] = useState([]);
  const [remainingOrders, setRemainingOrders] = useState([]);
  const [faultyInventory, setfaultyInventory] = useState([]);
  const [returnInventory, setReturnInventory] = useState([]);
  const [store, setStore] = useState([]);
  const [role, setRole] = useState('');
  const [totalInventory, setTotalInventory] = useState(0);
  const [totalInventoryCost, setTotalInventoryCost] = useState(0);
  const [totalDispatchOrderCost, setTotalDispatchOrderCost] = useState(0);
  const [allOrder, setAllOrder] = useState(0);

  useEffect(() => {
    const userRole = Cookies.get('role');
    setRole(userRole);
  }, []);

  return (
    <AuthContext.Provider
      value={{
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
        currentUser,
        setCurrentUser,
        role,
        setRole,
        faultyInventory,
        setfaultyInventory,
        returnInventory,
        setReturnInventory,
        totalInventory,
        setTotalInventory,
        totalInventoryCost,
        setTotalInventoryCost,
        totalDispatchOrderCost,
        setTotalDispatchOrderCost,
        allOrder,
        setAllOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
