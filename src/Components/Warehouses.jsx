import React from 'react'
import { Link } from 'react-router-dom';
import CommonTable from './CommonTable';
import { dummyWarehouses } from '../utils/data';
import { Button } from 'react-bootstrap';

function Suppliers() {
    return (
        <>
            <div className='mb-3 d-flex justify-content-end'>
                <Button variant="primary" >
                    <Link to='/add-warehouse' className='text-light text-decoration-none'>
                        Create New
                    </Link>
                </Button>
            </div>
            <CommonTable warehouses data={dummyWarehouses} />
        </>
    )
}

export default Suppliers