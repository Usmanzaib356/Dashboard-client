import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import CommonTable from './CommonTable';
import { Button } from 'react-bootstrap';
import { useAuthenticator } from '../handlers/tokenHandler';
function InventoryIn() {
  //   Fetch Data from API
  const { serverURL, inventoryIn, setInventoryIn,setTotalInventoryCost } = useAuth();

  const { getHeaders } = useAuthenticator()


// get inventory
useEffect(() => {
  const fetchData = async () => {
    const url = process.env.REACT_APP_SERVER_URL + '/inventory/inventories';

    try {
      const headers = getHeaders();
      const response = await axios.get(url, { headers });
      setInventoryIn(response.data.data);
      const totalInventoryCost = response.data.data.reduce((acc, itemCost) => {
        return acc + itemCost.total_price
      }, 0)
      setTotalInventoryCost(totalInventoryCost)
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);



  const handleDelete = async (deleteInnventoryIn) => {
    try {
      const headers = getHeaders()
      const url = serverURL + `/inventory/${deleteInnventoryIn}`;
      await axios.delete(url, { headers });
      const updatedInventory = inventoryIn.filter((Inventory) => {
        return Inventory._id !== deleteInnventoryIn;
      });
      setInventoryIn(updatedInventory);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <div className="mb-3 d-flex justify-content-end">
        <Button variant="primary">
          <Link
            to="/add-inventory"
            className="text-light text-decoration-none"
          >
            Create New
          </Link>
        </Button>
      </div>
      {inventoryIn ? (
        <CommonTable
          inventoryIn
          data={inventoryIn}
          deleteInnventoryIn={handleDelete}
        />
      ) : (
        'loading'
      )}
    </>
  );
}

export default InventoryIn;
