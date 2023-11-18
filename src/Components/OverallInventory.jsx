import React, { useEffect, useState } from 'react'
import useAuth from "../hooks/useAuth"
import Cookies from 'js-cookie';
import axios from 'axios';
import CardsData from '../Components/Cards/CardsData';
import CommonTable from './CommonTable';
import { dummyOverallInventory } from '../utils/data';
function OverallInventory() {
    const [ setInventory] = useState([])
    const { Server_Url } = useAuth()



    useEffect(() => {

        const url = Server_Url + "/allinventory"
        const token = Cookies.get("Token")

        // Axois Get request
        axios.get(url, { headers: { x_access_token: token } }).then(
            (res) => {

                setInventory(res.data)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )

    }, [Server_Url])



    // Delete Function

    // function dlt(id) {

    //     const url = Server_Url + "/deleteinventory"
    //     const json = { id: id }

    //     axios.post(url, json).then(
    //         (res) => {
    //             console.log(res);
    //             setInventory(previnv => previnv.filter(inv => inv._id !== id))
    //         }
    //     ).catch(
    //         (err) => {
    //             console.log(err);
    //         }
    //     )

    // }

    return (
        <>
            <CardsData />
            <CommonTable overallInventory data={dummyOverallInventory} />
        </>
    )
}

export default OverallInventory