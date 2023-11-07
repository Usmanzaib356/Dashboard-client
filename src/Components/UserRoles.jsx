import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useAuth from "../hooks/useAuth"
import Cookies from 'js-cookie';
import CommonTable from './CommonTable';
import { dummyDataUserRoles } from '../utils/data';
import AddRole from './modal/AddRole';
function UserRoles() {
  

    const [setProducts] = useState([])
    const { Server_Url } = useAuth()

    useEffect(() => {
        // Axois Get Request
        const url = Server_Url + "/allproducts"
        const token = Cookies.get("Token")
        axios.get(url, { headers: { x_access_token: token } }).then(
            (res) => {
                console.log(res);
                setProducts(res.data)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )

    }, [Server_Url])


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