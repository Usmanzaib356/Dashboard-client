import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth"
import CommonTable from './CommonTable';
import { Button } from 'react-bootstrap';
import { useAuthenticator } from '../handlers/tokenHandler';
import axios from 'axios';

function FaultyInventoryMechanism() {
    // Context Api
    const { returnInventory, setReturnInventory} = useAuth()
    const { getHeaders } = useAuthenticator()

    


  // Delete Center
  const handleDelete = async (deleteReturnInventory) => {
      try {
          const url = process.env.REACT_APP_SERVER_URL + `/return-inventory/${deleteReturnInventory}`
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