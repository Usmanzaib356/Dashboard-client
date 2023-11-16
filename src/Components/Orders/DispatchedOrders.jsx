import React, { useEffect } from 'react';
import CommonTable from '../CommonTable';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import AddOrder from '../modal/AddOrder';
import { useAuthenticator } from '../../handlers/tokenHandler';
function DispatchedOrders() {
  const {
    dispatchOrder,
    setDispatchOrder,
    setTotalDispatchOrderCost,
    setAllOrder,
  } = useAuth();

  const { getHeaders } = useAuthenticator();

  // get dispatched-orders
  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, []);

  const handleDelete = async (orderId) => {
    try {
      console.log(orderId);
      const url =
        process.env.REACT_APP_SERVER_URL + `/dispatched-orders/${orderId}`;
      const headers = getHeaders();
      await axios.delete(url, { headers });
      const removeItem = dispatchOrder.filter((item) => item._id !== orderId);
      console.log(removeItem);
      setDispatchOrder(removeItem);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddOrder />
      <CommonTable
        dispatchedOrders
        data={dispatchOrder}
        currentUser
        dispatchedOrdersDelete={handleDelete}
      />
    </>
  );
}

export default DispatchedOrders;
