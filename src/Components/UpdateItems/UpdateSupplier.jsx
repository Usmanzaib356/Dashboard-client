import React, { useRef, useState,useEffect } from 'react'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useAuth from '../../hooks/useAuth';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { FormGroup, FormLabel } from 'react-bootstrap';
import { useAuthenticator } from '../../handlers/tokenHandler';

function UpdateSupllier() {
    const { serverURL, theme,suppliers, 
        setSuppliers } = useAuth()
    const [supplierDetail,setSupplierDetail] = useState({})
    
    const [msg, setmsg] = useState()
    const { supplierId } = useParams()

    // Use ref
    const supplier_name = useRef()
    const location = useRef()
    const date = useRef()

    const {getHeaders} = useAuthenticator()
    const updateHandle = async (e) => {
        e.preventDefault()
        const url = serverURL + `/supplier/${supplierId}`
        const json = {
            supplier_name: supplier_name.current.value,
            location: location.current.value,
            date:date.current.value
        }
        try {
            const headers = getHeaders()
            const response = await axios.put(url, json,{headers})
            setmsg("Update has been successfully")
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        const getOneItem = suppliers.filter( item => item._id == supplierId )
         getOneItem.map((item)=>{
            return(
              setSupplierDetail(item)   
            )
        })
    },[])

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

                                    <Link to='/suppliers'>
                                        Go Back
                                    </Link>
                                    <form action="">
                                        <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                                            <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                                                <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>
                                                    Update Supplier
                                                </h6>
                                            </div>
                                            <div className='card-body'>
                                                <div className="">
                                                <div className="mb-4" >
                                                            <label htmlFor="">Supplier Name  <sup className='text-danger'>*</sup></label>
                                                            <input name="Dispatch Center Name" className={`form-control ${theme ? 'srchdark' : null}`}
                                                                required
                                                                type='text'
                                                                placeholder={supplierDetail.supplier_name}
                                                                ref={supplier_name}
                                                            />
                                                        </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">date <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="date"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                ref={date}
                                                                required
                                                                placeholder={supplierDetail.date}

                                                            />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Location  <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="text"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                required
                                                                name='total_price'
                                                                ref={location}
                                                                placeholder={supplierDetail.location}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='text-center text-success'>{msg}</p>
                                                <div className='mt-1 w-100'>
                                                    <button type='submit' className='btn  btn-primary w-100'
                                                    onClick={(e)=>updateHandle(e)}
                                                    >
                                                        Update
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

export default UpdateSupllier;