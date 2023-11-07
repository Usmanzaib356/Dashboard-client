import React from 'react'
import CommonTable from '../CommonTable';
import useAuth from '../../hooks/useAuth';
import AddStore from '../modal/AddStore';
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';
function Stores() {

    const { serverURL, store, setStore, } = useAuth()

    // Delete Store
    const { getHeaders } = useAuthenticator()
    const handleDelete = async (storeDelete) => {
        try {
            const url = serverURL + `/stores/${storeDelete}`
            const headers = getHeaders()
            await axios.delete(url, { headers })
            const UpdateItem = store.filter(item => item._id !== storeDelete)
            setStore(UpdateItem)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <AddStore addNewStore ></AddStore>
            <CommonTable
                store
                data={store}
                storeDelete={handleDelete}
            />
        </>
    )
}

export default Stores