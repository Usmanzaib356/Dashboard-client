import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import axios from 'axios';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Button } from 'react-bootstrap';


function AddNewInventory() {
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
    const { Server_Url, theme } = useAuth()

    const [productForm, setProductForm] = useState([])
    const handleInputChange = (index, field, value) => {
        const updatedProductForm = [...productForm];
        updatedProductForm[index][field] = value;
        setProductForm(updatedProductForm);
    };

    function removeProductHandler(item) {
        setProductForm(prevProducts => prevProducts.filter((_, index) => {
            return index !== item  
        }));
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(productForm);

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
                                    <Link to='/inventory'>
                                        Go Back
                                    </Link>
                                    <form action="">
                                        <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                                            <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                                                <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>

                                                    Add New Inventory
                                                </h6>
                                            </div>
                                            <div className='card-body'>
                                                <div className="">
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Invoice <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="text"
                                                                name='invoice_no'
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                


                                                            />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Date <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="date"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                name='date'

                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Supplier <sup className='text-danger'>*</sup></label>

                                                            <select name="supplier_id" className={`form-control ${theme ? 'srchdark' : null}`}

                                                                
                                                            >
                                                                <option value="0" disabled>
                                                                    Select Supplier

                                                                </option>
                                                                <option value="abc" >
                                                                    abc

                                                                </option>

                                                            </select>

                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Warehouse <sup className='text-danger'>*</sup></label>
                                                            <select name="warehouse_id" className={`form-control ${theme ? 'srchdark' : null}`}

                                                                
                                                            >
                                                                <option value="0" disabled>
                                                                    Select warehouse

                                                                </option>
                                                                <option value="high" >
                                                                    high
                                                                </option>

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Stock <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="number"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                name='stock'

                                                            />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Total Price  <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="number"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                name='total_price'
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className=''>
                                                    <hr />
                                                    <div className={` card-header py-3 ${theme ? 'table-dark' : ''}`}>
                                                        <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>

                                                            Add Products
                                                        </h6>
                                                    </div>
                                                    <div className='mt-4'>
                                                        {productForm.map((item, i) => {

                                                            return (
                                                                <div className="mt-4" key={i}>
                                                                    <button type="button" onClick={() => { removeProductHandler(i) }} className={"btn btn-danger"}> 
                                                                    <li className='fa fa-trash mr-2'></li>
                                                                    Remove
                                                                     </button>
                                                                    <div className="my-4" >
                                                                        <label htmlFor="">Product</label>

                                                                        <select name="supplier_id" className={`form-control ${theme ? 'srchdark' : null}`}
                                                                            required

                                                                            value={item.supplier}
                                                                            onChange={(e) => handleInputChange(i, 'supplier', e.target.value)}

                                                                        >
                                                                            <option value="0" >
                                                                                Select Product

                                                                            </option>

                                                                            <option value="value 1" style={{ Width: '600px' }} >
                                                                                value 1

                                                                            </option>
                                                                            <option value="value 2" style={{ Width: '600px' }} >
                                                                                value 2
                                                                            </option>


                                                                        </select>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6 mb-3">
                                                                            <label htmlFor="">Quantity </label>
                                                                            <input
                                                                                type="number"
                                                                                className={`form-control ${theme ? 'srchdark' : null}`}

                                                                                value={item.quantity}
                                                                                onChange={(e) => handleInputChange(i, 'quantity', e.target.value)}
                                                                                name='stock'

                                                                            />
                                                                        </div>
                                                                        <div className="col-md-6 mb-3">
                                                                            <label htmlFor=""> Price  </label>
                                                                            <input
                                                                                type="number"
                                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                                value={item.price}
                                                                                onChange={(e) => handleInputChange(i, 'price', e.target.value)}
                                                                                name='total_price'

                                                                            />
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            )
                                                        })}

                                                        <button
                                                            type="button"
                                                            onClick={() => setProductForm([...productForm, { supplier: '', quantity: '', price: '' }])}
                                                            className='btn btn-warning'>
                                                            
                                                            Add Products  </button>
                                                        <div className='mt-4 w-100'>
                                                            <button type='submit' onClick={e=>handleSubmit(e)}  className='btn  btn-primary w-100'>
                                                                Save
                                                            </button>
                                                        </div>

                                                    </div>

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

export default AddNewInventory;