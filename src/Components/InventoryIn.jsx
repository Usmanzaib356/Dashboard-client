import React  from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import CommonTable from './CommonTable';
import { Button } from 'react-bootstrap';
import { useAuthenticator } from '../handlers/tokenHandler';
function InventoryIn() {
  //   Fetch Data from API
  const {  inventoryIn, setInventoryIn } = useAuth();

  const { getHeaders } = useAuthenticator()





  const handleDelete = async (deleteInnventoryIn) => {
    try {
      const headers = getHeaders()
      const url = process.env.REACT_APP_SERVER_URL + `/inventory/${deleteInnventoryIn}`;
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
