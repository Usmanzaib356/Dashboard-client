import React from 'react'
import CommonTable from '../CommonTable';
import useAuth from '../../hooks/useAuth';
import AddCenter from '../modal/AddCenter';
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';
function DispatchedCenters() {

    const { serverURL, dispatchCenter, setDispatchCenter, role } = useAuth()
    // Delete Center
    const { getHeaders } = useAuthenticator()
    const handleDelete = async (DispatchedCenterdelete) => {
        try {
            const url = serverURL + `/dispatched-centers/${DispatchedCenterdelete}`
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