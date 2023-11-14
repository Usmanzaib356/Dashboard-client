import React, { useEffect } from 'react';
import CommonTable from '../CommonTable';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';
import AddORemOrder from '../modal/AddRemOrder';
function RemainingOrders() {

    const { serverURL, remainingOrders, setRemainingOrders, } = useAuth()

    const { getHeaders } = useAuthenticator()


  const handleDelete = async (id) => {
    try {
      const url = serverURL + `/remaining-orders/${id}`;
      const headers = getHeaders();
      await axios.delete(url, { headers });
      const removeItem = remainingOrders.filter((item) => item._id !== id);
      setRemainingOrders(removeItem);
    } catch (error) {
      console.log(error);
      alert('Something went wrong');
    }
  };

  return (
    <>
      <AddORemOrder />
      <CommonTable
        remainingOrders
        remainingOrdersDelete={handleDelete}
        data={remainingOrders}
      />
    </>
  );
}

export default RemainingOrders;
