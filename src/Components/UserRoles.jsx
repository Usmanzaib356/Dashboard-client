import axios from 'axios';
import React, {  useState } from 'react'
import useAuth from "../hooks/useAuth"
import CommonTable from './CommonTable';
import { dummyDataUserRoles } from '../utils/data';
import AddRole from './modal/AddRole';
function UserRoles() {
  

    const [setProducts] = useState([])
    const { Server_Url } = useAuth()



    // Delete Function

    function dlt(id) {

        const url = Server_Url + "/deleteproduct"
        const json = { id: id }

        axios.post(url, json).then(
            (res) => {
                console.log(res);
                setProducts(prevproducts => prevproducts.filter(pro => pro._id !== id))
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
    }

    return (
        <>
            <AddRole addNewRole ></AddRole>
            <CommonTable usersRoles data={dummyDataUserRoles} />

        </>
    )
}

export default UserRoles