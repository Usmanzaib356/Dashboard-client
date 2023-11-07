import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth"
import CommonTable from './CommonTable';
import { dummyFaultyInventory } from '../utils/data';
import { Button } from 'react-bootstrap';

function FaultyInventoryMechanism() {
   
    return (
        <>
            <div className='mb-3 d-flex justify-content-end'>
                <Button variant="primary" >
                    <Link to='/add-faulty' className='text-light text-decoration-none'>
                        Add New
                    </Link>
                </Button>
            </div>
            <CommonTable faultyInventoryMechanism data={dummyFaultyInventory} />
        </>
    )
}

export default FaultyInventoryMechanism