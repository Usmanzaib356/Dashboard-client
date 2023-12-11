import React from 'react'
import CommonTable from '../CommonTable';
import useAuth from '../../hooks/useAuth';
import AddStore from '../modal/AddStore';
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';
function Stores() {

    const { store, setStore, } = useAuth()
    const { getHeaders } = useAuthenticator()


    // Delete Store
    const handleDelete = async (storeDelete) => {
        try {
            const url = process.env.REACT_APP_SERVER_URL + `/stores/${storeDelete}`
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