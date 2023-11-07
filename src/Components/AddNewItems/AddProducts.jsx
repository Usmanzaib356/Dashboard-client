import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import axios from 'axios';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Button } from 'react-bootstrap';
import { useAuthenticator } from '../../handlers/tokenHandler';
function AddProducts() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");


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

    // Context Api
    const { serverURL, theme } = useAuth()
    const [msg, setmsg] = useState()
    const [Title, setTitle] = useState()
    const [des, setDes] = useState()
    const [color, setColor] = useState(false)

    // Use ref
    const title = useRef()
    const description = useRef()
    const quantity = useRef()
    const price = useRef()
    const sellingPrice = useRef()
    const Image = useRef()

    // Add New Products
    const {getHeaders} = useAuthenticator()

    const HandleAddNewProducts = async (e) => {
        e.preventDefault()

        if (validateInputs()) {
            try {
                const headers = getHeaders()
                const url = serverURL + '/products/product'
                const json = {
                    title: title.current.value,
                    desc: description.current.value,
                    quantity: quantity.current.value,
                    price: price.current.value,
                    selling_price: sellingPrice.current.value,
                    imgURL: Image.current.value
                }
                const response = await axios.post(url, json,{headers})
                console.log(response);
                setmsg("Product has been add successfully")
                setColor(true)

            } catch (error) {
                console.log(error);
                setmsg(error.response.data.message)
                setColor(false)
            }
        }

    }

    const validateInputs = () => {
        let valid = true;
        setTitle('');
        setDes('');

        const validTitle = title.current.value.trim()
        const validDes = description.current.value.trim()

        if (validTitle.length < 5 || validTitle.length > 50) {
            setTitle('Title must be between 5 and 50 characters.');
            valid = false;
        }

        if (validDes.length < 10 || validDes.length > 50) {
            setDes('Description must be between 10 and 50 characters.');
            valid = false;
        }

        return valid;
    };



    return (
        <>

            <div>
                <section id="page-top">
                    {/*  <!-- Page Wrapper --> */}
                    <div id="wrapper">
                        {/*  <!-- Sidebar --> */}
                        <Sidebar></Sidebar>
                        {/*  <!-- End of Sidebar --> */}

                        {/*  <!-- Content Wrapper --> */}
                        <div id="content-wrapper" className="d-flex flex-column">
                            {/*  <!-- Main Content --> */}
                            <div id="content" className={theme ? "darkthemecontent" : ""}>
                                {/*  <!-- Topbar --> */}
                                <Navbar></Navbar>
                                {/*  <!-- End of Topbar --> */}

                                {/* <!-- Begin Page Content --> */}

                                {/*   <!-- /.container-fluid --> */}
                                <div className='container-fluid'>

                                    <Link to='/products'>
                                        Go Back
                                    </Link>
                                    <form action="">
                                        <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                                            <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                                                <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>
                                                    Add New Products
                                                </h6>
                                            </div>
                                            <div className='card-body'>
                                                <div className="">
                                                    <div className="mb-4" >
                                                        <label htmlFor="">Title  <sup className='text-danger'>*</sup></label>
                                                        <input name="Dispatch Center Name" className={`form-control ${theme ? 'srchdark' : null}`}
                                                            required
                                                            type='text'
                                                            placeholder=' Title'
                                                            ref={title}
                                                        />
                                                    </div>
                                                    <p className='text-danger'>{Title}</p>
                                                    <div className="mb-4" >
                                                        <label htmlFor="">Description  <sup className='text-danger'>*</sup></label>
                                                        <input name="Dispatch Center Name" className={`form-control ${theme ? 'srchdark' : null}`}
                                                            required
                                                            type='text'
                                                            placeholder='Description'
                                                            ref={description}
                                                        />
                                                    </div>
                                                    <p className='text-danger'>{des}</p>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Quantity <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="number"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                ref={quantity}
                                                                required
                                                                placeholder='Quantity'

                                                            />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Price  <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="number"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                required
                                                                name='Price'
                                                                ref={price}
                                                                placeholder='Price'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Selling Price <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="number"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                ref={sellingPrice}
                                                                required
                                                                placeholder='Selling Price'

                                                            />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Image  <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="text"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                required
                                                                name='total_price'
                                                                ref={Image}
                                                                placeholder='Image'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className={`text-center ${color ? 'text-success' : 'text-danger'}`}>{msg}</p>
                                                <div className='mt-1 w-100'>
                                                    <button type='submit' className='btn  btn-primary w-100'
                                                        onClick={(e) => HandleAddNewProducts(e)}
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/*   <!-- End of Main Content -->

                                <!-- Footer --> */}
                            <Footer></Footer>
                            {/* <!-- End of Footer --> */}
                        </div>
                        {/*  <!-- End of Content Wrapper --> */}
                    </div>
                    {/*  <!-- End of Page Wrapper -->

                        <!-- Scroll to Top Button--> */}
                    <a className="scroll-to-top rounded" href="#page-top">
                        <i className="fas fa-angle-up"></i>
                    </a>
                </section>
            </div>

        </>
    )
}

export default AddProducts;