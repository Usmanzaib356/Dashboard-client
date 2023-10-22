import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useAuth from '../../hooks/useAuth';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function DistaptchedOrderDetail() {
    const { serverURL, theme } = useAuth()
    const [dispatchedDetail, setDispatchedDetail] = useState({})
    const { dispatchUpdateOrderId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = serverURL + `/dispatched-orders/${dispatchUpdateOrderId}`
                const response = await axios.get(url)
                setDispatchedDetail(response.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
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

                                    <Link to='/dispatched-orders'>
                                        Go Back
                                    </Link>
                                    <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                                        <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                                            <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>
                                                Order Detail
                                            </h6>
                                        </div>
                                        <div className='card-body'>
                                        <div className='table-responsive'>

                                            <div
                                                id="dataTable_wrapper"
                                                className="dataTables_wrapper dt-bootstrap4 no-footer"
                                            >
                                            <div className={`row ${theme ? 'table-dark' : ''}`}>
                                                <div className="col-sm-12">
                                                    <table
                                                        className="table table-bordered users dataTable no-footer"
                                                        id="dataTable"
                                                        width="100%"
                                                        cellSpacing="0"
                                                        role="grid"
                                                        aria-describedby="dataTable_info"
                                                        style={{ width: '100%' }}
                                                    >
                                                        <thead
                                                            className={` ${theme ? 'table-dark' : ''}`}
                                                        >
                                                            <tr role="row">
                                                                <th
                                                                    className="sorting sorting_asc"
                                                                    tabIndex="0"
                                                                    aria-controls="dataTable"
                                                                    rowSpan="1"
                                                                    colSpan="1"
                                                                    aria-sort="ascending"
                                                                    aria-label="Name: activate to sort column descending"
                                                                    style={{ width: '177.766px' }}
                                                                >
                                                                    Order #:
                                                                </th>
                                                                <th
                                                                    className="sorting"
                                                                    tabIndex="0"
                                                                    aria-controls="dataTable"
                                                                    rowSpan="1"
                                                                    colSpan="1"
                                                                    aria-label="Email: activate to sort column ascending"
                                                                    style={{ width: '336.406px' }}
                                                                >
                                                                    Dispatch Center
                                                                </th>

                                                                <th
                                                                    className="sorting"
                                                                    tabIndex="0"
                                                                    aria-controls="dataTable"
                                                                    rowSpan="1"
                                                                    colSpan="1"
                                                                    aria-label="Email: activate to sort column ascending"
                                                                    style={{ width: '336.406px' }}
                                                                >
                                                                    Order Dispatch date
                                                                </th>
                                                                <th
                                                                    className="sorting"
                                                                    tabIndex="0"
                                                                    aria-controls="dataTable"
                                                                    rowSpan="1"
                                                                    colSpan="1"
                                                                    aria-label="Email: activate to sort column ascending"
                                                                    style={{ width: '336.406px' }}
                                                                >
                                                                    Total Amount
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className={`${theme ? 'table-dark' : ''}`}>
                                                            <tr
                                                            >
                                                                <td className="sorting_1">{dispatchedDetail.order_number}</td>
                                                                <td>{dispatchedDetail.dispatch_center}</td>
                                                                <td>{dispatchedDetail.dispatch_date}</td>
                                                                <td>{dispatchedDetail.total_amount}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            </div>
                                            </div>


                                        </div>
                                    </div>

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

export default DistaptchedOrderDetail;