import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth"
import Cookies from 'js-cookie';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import CommonTable from './CommonTable';
import { Button } from 'react-bootstrap';
import { productsDummyData } from '../utils/data';
function Products() {
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

    const { serverURL, theme, setProducts,Products } = useAuth()
    const  nav = useNavigate()

    // get request
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = serverURL + '/products/product'
                const response = await axios.get(url)
                setProducts(response.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

        // Delete Center
        const handleDelete = async (deleteProduct) => {
            try {
                const url = serverURL + `/products/${deleteProduct}`
                await axios.delete(url)
                const UpdateItem = Products.filter(item => item._id !== deleteProduct )
                setProducts(UpdateItem)
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
                                            <Link to='/add-products' className='text-light text-decoration-none'>
                                                Create New 
                                            </Link>
                                        </Button>
                                    </div>
                                    <CommonTable
                                     products
                                     data={Products}
                                     deleteProduct={handleDelete}
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

export default Products