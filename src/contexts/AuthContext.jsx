import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useAuthenticator, useToken } from '../handlers/tokenHandler';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [islogin, setIsLogin] = useState(false);
  const [inventoryIn, setInventoryIn] = useState([]);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  );
  const { getHeaders } = useAuthenticator();
  const token = useToken();

  useEffect(() => {
    localStorage.setItem('theme', theme ? 'dark' : 'light');
  }, [theme]);

  useEffect(() => {
    const login = Cookies.get('login');
    if (login) {
      setIsLogin(true);
    }
  });

  const [sidebar, setSidebar] = useState(false);
  const [usersGet, setUsersGet] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [Products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [dispatchCenter, setDispatchCenter] = useState([]);
  const [dispatchOrder, setDispatchOrder] = useState([]);
  const [remainingOrders, setRemainingOrders] = useState([]);
  const [store, setStore] = useState([]);

  const serverURL = process.env.REACT_APP_SERVER_URL;

  // get dispatched-centers
  useEffect(() => {
    const fetchData = async () => {
      const url = serverURL + '/dispatched-centers/dispatched-centers';
      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setDispatchCenter(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);
  // get dispatched-orders
  useEffect(() => {
    const fetchData = async () => {
      const url = serverURL + '/dispatched-orders/dispatched-orders';
      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setDispatchOrder(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);

  // get remaining-orders
  useEffect(() => {
    const fetchData = async () => {
      const url = serverURL + '/remaining-orders/remaining-orders';
      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setRemainingOrders(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);

  // get stores
  useEffect(() => {
    const fetchData = async () => {
      const url = serverURL + '/stores/stores';
      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setStore(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);

  // get supplier
  useEffect(() => {
    const fetchData = async () => {
      const url = serverURL + '/supplier/supplier';
      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setSuppliers(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);

  // get inventory

  useEffect(() => {
    const fetchData = async () => {
      const url = serverURL + '/inventory/inventories';

      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setInventoryIn(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);
  // get products
  useEffect(() => {
    const fetchData = async () => {
      const url = serverURL + '/products/product';

      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [token]);

  //  Get user
  useEffect(() => {
    const fetchData = async () => {
      const url = serverURL + '/user/get-users';

      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setUsersGet(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [token]);

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
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
