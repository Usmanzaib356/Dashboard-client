import React, { useRef, useState, useNavigate, useEffect } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth"
import axios from 'axios';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import CommonTable from './CommonTable';
import { dummySuppliers } from '../utils/data';
import { Button } from 'react-bootstrap';
import { useAuthenticator } from '../handlers/tokenHandler';

function Suppliers() {
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



    // Context Api
    const { serverURL, theme, suppliers, setSuppliers } = useAuth()


    

    // Delete Center
    const {getHeaders} = useAuthenticator()
    const handleDelete = async (deleteSupplier) => {
        try {
            const headers = getHeaders()
            const url = serverURL + `/supplier/${deleteSupplier}`
            await axios.delete(url,{headers})
            const UpdateItem = suppliers.filter(item => item._id !== deleteSupplier)
            setSuppliers(UpdateItem)
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
                                    <div className='mb-3 d-flex justify-content-end'>
                                        <Button variant="primary" >
                                            <Link to='/add-supplier' className='text-light text-decoration-none'>
                                                Create New
                                            </Link>
                                        </Button>
                                    </div>
                                    <CommonTable
                                        suppliers
                                        data={suppliers}
                                        deleteSupplier={handleDelete}
                                    />
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

export default Suppliers