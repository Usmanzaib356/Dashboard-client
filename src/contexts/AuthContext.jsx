import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
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
    }
})

  const [sidebar, setSidebar] = useState(false);
  const [usersGet, setUsersGet] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [Products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [dispatchCenter, setDispatchCenter] = useState([]);
  const [dispatchOrder, setDispatchOrder] = useState([]);
  const [remainingOrders, setRemainingOrders] = useState([]);
  const [store, setStore] = useState([]);

  const serverURL = 'https://ill-bee-train.cyclic.cloud';


    // get dispatched-centers
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = serverURL + '/dispatched-centers/dispatched-centers'
                const response = await axios.get(url)
                setDispatchCenter(response.data.data) 
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])


     // get dispatched-orders
     useEffect(() => {
      const fetchData = async () => {
          try {
              const url = serverURL + '/dispatched-orders/dispatched-orders'
              const response = await axios.get(url)
              setDispatchOrder(response.data.data)
          } catch (error) {
              console.log(error);
          }
      }
      fetchData()
  }, [])




  // get remaining-orders
  useEffect(() => {
    const fetchData = async () => {
        try {
            const url = serverURL + '/remaining-orders/remaining-orders'
            const response = await axios.get(url)
            setRemainingOrders(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    fetchData()
}, [])


// get stores
useEffect(() => {
  const fetchData = async () => {
      try {
          const url = serverURL + '/stores/stores'
          const response = await axios.get(url)
          setStore(response.data.data)
      } catch (error) {
          console.log(error);
      }
  }
  fetchData()
}, [])


  // get supplier
  useEffect(() => {
    const fetchData = async () => {
        try {
            const url = serverURL + '/supplier/supplier'
            const response = await axios.get(url)
            setSuppliers(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    fetchData()
}, [])


  // get inventory

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = serverURL + '/inventory/inventories';
        const token = Cookies.get('token');
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(url, { headers });

        setInventoryIn(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])


  
  // get products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = serverURL + '/products/product';
        const response = await axios.get(url);

        setProducts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [serverURL]);


  //  Get user
  useEffect(() => {
    const fetchData = async () => {
        try {
            const url = serverURL + '/user/get-users'
            const response = await axios.get(url)
            setUsersGet(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    fetchData()
}, [])


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
