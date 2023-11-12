import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth"
import CommonTable from './CommonTable';
import { Button } from 'react-bootstrap';
import { useAuthenticator } from '../handlers/tokenHandler';
import axios from 'axios';

function FaultyInventoryMechanism() {
    // Context Api
    const { serverURL,returnInventory, setReturnInventory} = useAuth()
    const { getHeaders } = useAuthenticator()

    
  //  Get Return Inventory
  useEffect(() => {
    const fetchData = async () => {
      const url =
        serverURL +
        '/return-inventory/return-inventories';
      try {
        const headers = getHeaders();
        const response = await axios.get(url, { headers });
        setReturnInventory(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  // Delete Center
  const handleDelete = async (deleteReturnInventory) => {
      try {
          const url = serverURL + `/return-inventory/${deleteReturnInventory}`
          const headers = getHeaders()
          await axios.delete(url, { headers })
          const UpdateItem = returnInventory.filter(item => item._id !== deleteReturnInventory)
          setReturnInventory(UpdateItem)
      } catch (error) {
          console.log(error);
      }
  }

    return (
        <>
            <div className='mb-3 d-flex justify-content-end'>
                <Button variant="primary" >
                    <Link to='/add-return-inventory' className='text-light text-decoration-none'>
                        Add
                    </Link>
                </Button>
            </div>
            <CommonTable
             returnInventoryMechanism 
             data={returnInventory}
             deleteReturnInventory={handleDelete}
             />
        </>
    )
}

export default FaultyInventoryMechanism