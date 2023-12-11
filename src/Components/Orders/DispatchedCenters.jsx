import React, { useEffect } from 'react'
import CommonTable from '../CommonTable';
import useAuth from '../../hooks/useAuth';
import AddCenter from '../modal/AddCenter';
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';
function DispatchedCenters() {

    const {  dispatchCenter, setDispatchCenter, role } = useAuth()
    const { getHeaders } = useAuthenticator()

 

    // Delete Center
    const handleDelete = async (DispatchedCenterdelete) => {
        try {
            const url = process.env.REACT_APP_SERVER_URL + `/dispatched-centers/${DispatchedCenterdelete}`
            const headers = getHeaders()
            await axios.delete(url, { headers })
            const UpdateItem = dispatchCenter.filter(item => item._id !== DispatchedCenterdelete)
            setDispatchCenter(UpdateItem)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='container-fluid'>
                {
                    role === "Admin" &&
                    <AddCenter addNewCenter ></AddCenter>
                }
                <CommonTable
                    DispatchedCenter
                    data={dispatchCenter}
                    DispatchedCenterdelete={handleDelete}
                />

            </div>
        </>
    )
}

export default DispatchedCenters