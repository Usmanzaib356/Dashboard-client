import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useAuthenticator } from '../handlers/tokenHandler';
import axios from 'axios';

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
      fetchDataOnLogin()
    }
  },[]);

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

  const { getHeaders } = useAuthenticator();

  const fetchDataOnLogin = async () => {
    try {
      await fetchDataUser();
      await fetchDataproducts();
      await fetchDatainventory();
      await fetchDataFaultyInventory();
      await fetchDataReturnInventory();
      await fetchDataGetSuppliers();
      await fetchDataRemainingOrders();
      await fetchDatastores();
      await fetchDataremainingOrders();
      await fetchDatadispatchedOrders();
      await fetchDatadispatchedCenters();

    } catch (error) {
      console.error('Error fetching data on login:', error);
    }
  };

  //  Get user
  
    const fetchDataUser = async () => {
      const url = process.env.REACT_APP_SERVER_URL + '/user/get-users';

      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setUsersGet(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

  // get products
    const fetchDataproducts = async () => {
      const url = process.env.REACT_APP_SERVER_URL + '/products/product';

      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        // Calculate total stock
        const totalInventory = response.data.data.reduce(
          (acc, itemquantity) => {
            return acc + itemquantity.quantity;
          },
          0
        );
        setTotalInventory(totalInventory);
        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

  // get inventory
    const fetchDatainventory = async () => {
      const url = process.env.REACT_APP_SERVER_URL + '/inventory/inventories';

      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setInventoryIn(response.data.data);
        const totalInventoryCost = response.data.data.reduce(
          (acc, itemCost) => {
            return acc + itemCost.total_price;
          },
          0
        );
        setTotalInventoryCost(totalInventoryCost);
      } catch (error) {
        console.log(error);
      }
    };

    

  //  Get Faulty Inventory
    const fetchDataFaultyInventory = async () => {
      const url =
        process.env.REACT_APP_SERVER_URL +
        '/faulty-inventory/faulty-inventories';

      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setfaultyInventory(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };

  //  Get Return Inventory
    const fetchDataReturnInventory = async () => {
      const url =
        process.env.REACT_APP_SERVER_URL +
        '/return-inventory/return-inventories';
      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setReturnInventory(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };

    // Get Remaning Orders
    const fetchDataRemainingOrders = async () => {
      const url =
        process.env.REACT_APP_SERVER_URL + '/remaining-orders/remaining-orders';
      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setRemainingOrders(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

  //  Get Suppliers
    const fetchDataGetSuppliers = async () => {
      const url = process.env.REACT_APP_SERVER_URL + '/supplier/supplier';
      try {
        const headers = getHeaders();
        const res =  await axios.get(url, { headers });
        setSuppliers(res.data.data)
      } catch (error) {
        console.log(error);
      }
    };

  // get stores
    const fetchDatastores = async () => {
      const url = process.env.REACT_APP_SERVER_URL + '/stores/stores';
      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setStore(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

  // get remaining-orders
    const fetchDataremainingOrders = async () => {
      const url =
        process.env.REACT_APP_SERVER_URL + '/remaining-orders/remaining-orders';
      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setRemainingOrders(response.data.data)
      } catch (error) {
        console.log(error.response.data.message);
      }
    };


  // get dispatched-orders
    const fetchDatadispatchedOrders = async () => {
      const url =
        process.env.REACT_APP_SERVER_URL +
        '/dispatched-orders/dispatched-orders';
      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        const totalDispatchOrderCost = response.data.data.reduce(
          (acc, itemCost) => {
            return acc + itemCost.total_amount;
          },
          0
        );
        setTotalDispatchOrderCost(totalDispatchOrderCost);
        setAllOrder(response.data.data.length);
        setDispatchOrder(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

  // get dispatched-centers
    const fetchDatadispatchedCenters = async () => {
      const url =
        process.env.REACT_APP_SERVER_URL +
        '/dispatched-centers/dispatched-centers';
      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setDispatchCenter(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

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
