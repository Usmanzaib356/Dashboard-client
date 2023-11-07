import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth"
import axios from 'axios';
import CommonTable from './CommonTable';
import { Button } from 'react-bootstrap';
import { useAuthenticator } from '../handlers/tokenHandler';

function Suppliers() {
   
    // Context Api
    const { serverURL, suppliers, setSuppliers } = useAuth()

    // Delete Center
    const { getHeaders } = useAuthenticator()
    const handleDelete = async (deleteSupplier) => {
        try {
            const headers = getHeaders()
            const url = serverURL + `/supplier/${deleteSupplier}`
            await axios.delete(url, { headers })
            const UpdateItem = suppliers.filter(item => item._id !== deleteSupplier)
            setSuppliers(UpdateItem)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='mb-3 d-flex justify-content-end'>
                <Button variant="primary" >
                    <Link to='/add-supplier' className='text-light text-decoration-none'>
                        Create New
                    </Link>
                </Button>
            </div>
            <CommonTable
                suppliers
                data={suppliers}
                deleteSupplier={handleDelete}
            />
        </>
    )
}

export default Suppliers