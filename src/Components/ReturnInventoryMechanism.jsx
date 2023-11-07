import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth"
import axios from 'axios';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import CommonTable from './CommonTable';
import { dummyReturnInventory } from '../utils/data';
import { Button } from 'react-bootstrap';

function FaultyInventoryMechanism() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    const [msg, setMsg] = useState("")
    const [color, setColor] = useState(false)
    const [loader, setLoader] = useState(false)


    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };



    // Add Products Funtion

    //  useRef
    const name = useRef()
    const price = useRef()
    const quantity = useRef()
    const image = useRef()

    // Context Api
    const { Server_Url, theme } = useAuth()

    function add(e) {
        e.preventDefault()
        setLoader(true)


        //  Axois post req
        const url = Server_Url + "/addinventory"
        const formData = new FormData()
        formData.append("name", name.current.value);
        formData.append("price", price.current.value);
        formData.append("quantity", price.current.value);
        formData.append("image", image.current.files[0]);

        axios.post(url, formData).then(
            (res) => {
                console.log(res);
                setMsg(res.data.msg)
                setColor(true)
                setLoader(false)
            }
        ).catch(
            (err) => {
                console.log(err);
                setMsg(err.response.data);
                setColor(false)
                setLoader(false)
            }
        )

    }

    return (
        <>
            <div className='mb-3 d-flex justify-content-end'>
                <Button variant="primary" >
                    <Link to='/add-return-inventory' className='text-light text-decoration-none'>
                        Add
                    </Link>
                </Button>
            </div>
            <CommonTable returnInventoryMechanism data={dummyReturnInventory} />
        </>
    )
}

export default FaultyInventoryMechanism