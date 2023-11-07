import React from 'react'
import CommonTable from '../CommonTable';
import { DispatchedCenter } from '../../utils/data'
function AllOrders() {

    return (
        <>
            <CommonTable allOrders
                data={DispatchedCenter} />
        </>
    )
}

export default AllOrders