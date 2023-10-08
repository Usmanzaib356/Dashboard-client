import React, { useRef, useState } from 'react'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useAuth from '../../hooks/useAuth';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateDispatchCenter() {
    const { serverURL, theme, dispatchCenter, setDispatchCenter } = useAuth()
    const [msg,setmsg] = useState()
    const {dispatchUpdateId} = useParams()
    
    // Use ref
    const centerName = useRef()
    const location = useRef()
    const courierService = useRef()

     const updateHandle = async (e)=>{
        e.preventDefault()
        const url = serverURL + `/dispatched-centers/${dispatchUpdateId}`
        const json = {
            center_name:centerName.current.value,
            location:location.current.value,
            courier_service:courierService.current.value
        }
        try {
            const response = await axios.put(url,json)
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

                                    <Link to='/dispatched-centers'>
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
                                                <div className="mb-4" >
                                                            <label htmlFor="">Dispatch Center Name</label>
                                                            <input name="Dispatch Center Name" className={`form-control ${theme ? 'srchdark' : null}`}
                                                                required
                                                                placeholder=' Center Name'
                                                                ref={centerName}
                                                            />
                                                        </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Location <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="text"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                ref={location}
                                                                required
                                                                name='stock'
                                                                placeholder='Location'

                                                            />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Courier Service  <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="text"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                required
                                                                name='total_price'
                                                                ref={courierService}
                                                                
                                                                placeholder='Courier Service'
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

export default UpdateDispatchCenter