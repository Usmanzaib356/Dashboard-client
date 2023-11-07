import { useState,useEffect } from 'react';
import React from 'react'
import CommonTable from '../CommonTable';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import AddOrder from '../modal/AddOrder';
import { useAuthenticator } from '../../handlers/tokenHandler';
function DispatchedOrders() {
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

    const { serverURL,theme, dispatchOrder, setDispatchOrder,currentUser } = useAuth()

   
    const {getHeaders} = useAuthenticator()
    const handleDelete = async (dispatchedOrdersDelete) => {
        try {
            const url = serverURL + `/dispatched-orders/${dispatchedOrdersDelete}`
            const headers = getHeaders()
            await axios.delete(url,{headers})
            const removeItem = dispatchOrder.filter(item => item._id !== dispatchedOrdersDelete)
            setDispatchOrder(removeItem)
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
                                    <AddOrder/>
                                    <CommonTable 
                                        dispatchedOrders
                                        data={dispatchOrder} 
                                        currentUser
                                        dispatchedOrdersDelete={handleDelete} />
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

export default DispatchedOrders