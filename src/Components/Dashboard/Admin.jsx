import React, { useState, useEffect } from 'react'
import useAuth from "../../hooks/useAuth"
import axios from 'axios'
import Cookies from 'js-cookie'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Pie, PieChart, Legend, CartesianGrid, Tooltip } from 'recharts';
import CardsData from '../Cards/CardsData';
function Admin() {

    // Chart Get Request

    const [chartdata, setChartData] = useState([])
    const { Server_Url, theme } = useAuth()


    useEffect(() => {


        const url = Server_Url + "/chartdata"
        const token = Cookies.get("Token")

        axios.get(url, {
            headers: {
                x_access_token: token
            }
        }).then(
            (res) => {
                console.log(res);
                setChartData(res.data)
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )


    }, [])





    // Pie chart color





    return (

        <>
            <div >
                <section id="page-top">
                    {/*  <!-- Page Wrapper --> */}
                    <div id="wrapper" >

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

                                <div className="container-fluid">

                                    {/* <!-- Page Heading --> */}
                                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                        <h1 className={theme ? "h3 mb-0 text-light" : "h3 mb-0 text-dark"}>Hello Admin! Welcome to Dashboard</h1>
                                    </div>

                                    {/* <!-- Content Row --> */}
                                    <CardsData></CardsData>

                                    {/* <!-- Content Row --> */}

                                    <div className="row ">

                                        {/* <!-- Area Chart --> */}
                                        <div className="col-xl-8 col-lg-7 ">
                                            <div className="card shadow mb-4 ">
                                                {/* <!-- Card Header - Dropdown --> */}
                                                <div
                                                    className={theme ? "card-header py-3 d-flex flex-row align-items-center justify-content-between chartheader" : "card-header py-3 d-flex flex-row align-items-center justify-content-between"}>
                                                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                                </div>
                                                {/* <!-- Card Body --> */}
                                                <div className={theme ? "card-body bodydarkcard " : "card-body"}>
                                                    <div className="chart-area">
                                                        <div className="chartpract">
                                                            <ResponsiveContainer aspect={2}>
                                                                <BarChart data={chartdata} width={500} height={300}  >
                                                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                                                    <XAxis dataKey="month" axisLine={false} />
                                                                    <YAxis dataKey="sale"
                                                                        tickFormatter={(value) => `$${value}`}
                                                                        axisLine={false}
                                                                        tick={{ fill: theme ? "white" : "black" }}

                                                                    />
                                                                    <Tooltip />
                                                                    <Legend />
                                                                    <Bar dataKey="sale" fill='#4e73df'

                                                                    />
                                                                    <Bar dataKey="profit" fill='#20c9a6' />
                                                                </BarChart>
                                                            </ResponsiveContainer>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Pie Chart --> */}
                                        <div className="col-xl-4 col-lg-5">
                                            <div className="card shadow mb-4">
                                                {/* <!-- Card Header - Dropdown --> */}
                                                <div
                                                    className={theme ? "card-header py-3 d-flex flex-row align-items-center justify-content-between chartheader" : "card-header py-3 d-flex flex-row align-items-center justify-content-between "}>
                                                    <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                                </div>
                                                {/* <!-- Card Body --> */}
                                                <div className={theme ? "card-body bodydarkcard " : "card-body"}>
                                                    <div className="chart-pie pt-4 pb-2">
                                                        <ResponsiveContainer width="100%" height="100%">
                                                            <PieChart width={400} height={300}>
                                                                <Pie
                                                                    data={chartdata}
                                                                    dataKey="sale"
                                                                    nameKey="month"
                                                                    cx="50%"
                                                                    cy="50%"
                                                                    outerRadius={65}
                                                                    paddingAngle={6}
                                                                    fill="#4e73df"
                                                                    label
                                                                />
                                                                <Pie />
                                                                <Tooltip />
                                                                <Legend />
                                                            </PieChart>
                                                        </ResponsiveContainer>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>



                                {/*   <!-- /.container-fluid --> */}

                            </div>
                            {/*   <!-- End of Main Content -->

                                <!-- Footer --> */}
                            <Footer></Footer>
                            {/* <!-- End of Footer --> */}

                        </div>
                        {/*  <!-- End of Content Wrapper --> */}
                    </div>
                </section>
            </div>


        </>
    )
}

export default Admin;