import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import CommonTable from './CommonTable';
import { Button } from 'react-bootstrap';
import { useAuthenticator } from '../handlers/tokenHandler';
import axios from 'axios';

function FaultyInventoryMechanism() {
  const {  faultyInventory, setfaultyInventory } = useAuth();

  const { getHeaders } = useAuthenticator();



  const handleDelete = async (deleteFaulty) => {
    try {
      const url = process.env.REACT_APP_SERVER_URL + `/faulty-inventory/${deleteFaulty}`;
      const headers = getHeaders();
      await axios.delete(url, { headers });
      const UpdateItem = faultyInventory.filter(
        (item) => item._id !== deleteFaulty
      );
      setfaultyInventory(UpdateItem);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mb-3 d-flex justify-content-end">
        <Button variant="primary">
          <Link to="/add-faulty" className="text-light text-decoration-none">
            Add New
          </Link>
        </Button>
      </div>
      <CommonTable
        faultyInventoryMechanism
        data={faultyInventory}
        deleteFaulty={handleDelete}
      />
    </>
  );
}

export default FaultyInventoryMechanism;
