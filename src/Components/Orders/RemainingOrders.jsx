import { useState,useEffect } from 'react';
import React from 'react'
import CommonTable from '../CommonTable';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { DispatchedCenter } from '../../utils/data'
function RemainingOrders() {
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

    const { serverURL,theme,remainingOrders,setRemainingOrders, } = useAuth()


    // get request
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = serverURL + '/remaining-orders/remaining-orders'
                const response = await axios.get(url)
                setRemainingOrders(response.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

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
                                    {/* <CommonTable   /> */}
                                    <CommonTable remainingOrders
                                        data={remainingOrders} />
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

export default RemainingOrders