import React from 'react'
import CommonTable from '../CommonTable';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import AddOrder from '../modal/AddOrder';
import { useAuthenticator } from '../../handlers/tokenHandler';
function DispatchedOrders() {
   
    const { serverURL, dispatchOrder, setDispatchOrder } = useAuth()

    const { getHeaders } = useAuthenticator()
    const handleDelete = async (dispatchedOrdersDelete) => {
        try {
            const url = serverURL + `/dispatched-orders/${dispatchedOrdersDelete}`
            const headers = getHeaders()
            await axios.delete(url, { headers })
            const removeItem = dispatchOrder.filter(item => item._id !== dispatchedOrdersDelete)
            setDispatchOrder(removeItem)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <AddOrder />
            <CommonTable
                dispatchedOrders
                data={dispatchOrder}
                currentUser
                dispatchedOrdersDelete={handleDelete} />
        </>
    )
}

export default DispatchedOrders