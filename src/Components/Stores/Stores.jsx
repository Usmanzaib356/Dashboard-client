import React, { useEffect } from 'react'
import CommonTable from '../CommonTable';
import useAuth from '../../hooks/useAuth';
import AddStore from '../modal/AddStore';
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';
function Stores() {

    const { serverURL, store, setStore, } = useAuth()
    const { getHeaders } = useAuthenticator()

    // get stores
    useEffect(() => {
        const fetchData = async () => {
            const url = process.env.REACT_APP_SERVER_URL + '/stores/stores';
            try {
                const headers = getHeaders();
                const response = await axios.get(url, { headers });
                setStore(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);


    // Delete Store
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