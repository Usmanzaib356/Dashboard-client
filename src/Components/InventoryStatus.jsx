import React from 'react'
import CommonTable from './CommonTable';
import { dummyInventoryStatus } from '../utils/data';
import AddInventoryStatus from './modal/AddInventoryStatus';

function FaultyInventoryMechanism() {
   
    return (
        <>
            <AddInventoryStatus AddInventoryStatus ></AddInventoryStatus>
            <CommonTable inventoryStatus data={dummyInventoryStatus} />
        </>
    )
}

export default FaultyInventoryMechanism