import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import axios from 'axios';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Button } from 'react-bootstrap';
import userEvent from '@testing-library/user-event';
function ReturnInventory() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

        const {theme} = useAuth()

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

 
    //  ref
  
    const order = useRef()
    const dispatchDate = useRef()
    const product =  useRef()
    const quantity = useRef()
    const comments = useRef()

    const HandleReturnInventory = ()=>{
        
    }

    

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

                                    <Link to='/return-inventory'>
                                        Go Back
                                    </Link>
                                    <form action="">
                                        <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                                            <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                                                <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>

                                                    Add Return Inventory Record
                                                </h6>
                                            </div>
                                            <div className='card-body'>
                                                <div className="">
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Order #<sup className='text-danger'>*</sup></label>

                                                            <select name="Order_id" className={`form-control ${theme ? 'srchdark' : null}`}
                                                                required
                                                                ref={order}
                                                            >
                                                                <option value="0" disabled>
                                                                    Select Order

                                                                </option>
                                                                <option value="abc" >
                                                                    Order

                                                                </option>

                                                            </select>

                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Dispatch Date <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="date"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                Name='date'
                                                                required
                                                                ref={dispatchDate}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className=" row mt-2">
                                                        <div className="mb-4 col-md-6" >
                                                            <label htmlFor="">Product
                                                                <sup className='text-danger'>*</sup>
                                                            </label>

                                                            <select name="product_id" className={`form-control ${theme ? 'srchdark' : null}`}
                                                                required
                                                                ref={product}

                                                            >
                                                                <option value="0" disabled>
                                                                    Select Product

                                                                </option>

                                                                <option value="okh" style={{ Width: '600px' }} >
                                                                    Products

                                                                </option>
                                                                <option value="abc" style={{ Width: '600px' }} >
                                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptatem
                                                                </option>


                                                            </select>

                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Quantity <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="number"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                ref={quantity}
                                                                required
                                                                name='stock'

                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="">
                                                        <div className=" mb-3">
                                                            <label htmlFor="">Comments
                                                                <sup className='text-danger'>*</sup>
                                                            </label>
                                                            <textarea name="comments" id="" cols="30" rows="5"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                ref={comments}
                                                                
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='mt-4 w-100'>
                                                    <button onClick={e=>HandleReturnInventory(e)} className='btn  btn-primary w-100'>
                                                        Save
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

export default ReturnInventory;