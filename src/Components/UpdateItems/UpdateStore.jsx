import React, { useRef, useState } from 'react'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useAuth from '../../hooks/useAuth';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { FormGroup, FormLabel } from 'react-bootstrap';
import { useAuthenticator } from '../../handlers/tokenHandler';

function UpdateStore() {
    const { serverURL, theme } = useAuth()
    const [msg, setmsg] = useState()
    const { storeId } = useParams()

    // Use ref
    const storeName = useRef()
    const status = useRef()
    const {getHeaders} = useAuthenticator()
    const updateHandle = async (e) => {
        e.preventDefault()
        const url = serverURL + `/stores/${storeId}`
        const json = {
            store_name: storeName.current.value,
            status: status.current.value
        }
        try {
            const headers = getHeaders()
            const response = await axios.put(url, json,{headers})
            console.log(response);
            setmsg("Update has been successfully")
        } catch (error) {
            console.log(error);
        }
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

                                    <Link to='/stores'>
                                        Go Back
                                    </Link>
                                    <form action="">
                                        <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                                            <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                                                <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>
                                                    Update Center
                                                </h6>
                                            </div>
                                            <div className='card-body'>
                                                <div className="">
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Store Name <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="text"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                ref={storeName}
                                                                required
                                                                name='stock'
                                                                placeholder='Store Name'

                                                            />
                                                        </div>
                                                        <FormGroup className='d-flex flex-column'
                                                            style={{ width: '48%' }}
                                                        >
                                                            <FormLabel>Status <sup className='text-danger'>*</sup> </FormLabel>
                                                            <select name="Status" className='form-control'
                                                                required
                                                                ref={status}
                                                            >
                                                                <option value="0" disabled>
                                                                    Select Status

                                                                </option>
                                                                <option value="Active" >
                                                                    Active

                                                                </option>
                                                                <option value="Inactive" >
                                                                    Inactive
                                                                </option>
                                                            </select>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <p className='text-center text-success'>{msg}</p>
                                                <div className='mt-1 w-100'>
                                                    <button type='submit' className='btn  btn-primary w-100'
                                                        onClick={(e) => updateHandle(e)}
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

export default UpdateStore;