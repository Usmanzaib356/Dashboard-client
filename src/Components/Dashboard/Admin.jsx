import React, { useState, useEffect } from 'react'
import useAuth from "../../hooks/useAuth"
import axios from 'axios'
import Cookies from 'js-cookie'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Pie, PieChart, Legend,  Tooltip } from 'recharts';
import CardsData from '../Cards/CardsData';
function Admin() {

    // Chart Get Request

    const [chartdata, setChartData] = useState([])
    const { theme} = useAuth()


    useEffect(() => {


        const url = 'https://famous-jacket-goat.cyclic.app' + "/chartdata"
        const token = Cookies.get("Token")

        axios.get(url, {
            headers: {
                x_access_token: token
            }
        }).then(
            (res) => {
                // console.log(res);
                setChartData(res.data)
            }
        ).catch(
            (err) => {
                // console.log(err);
            }
        )


    }, [])

    return (

        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className={theme ? "h3 mb-0 text-light" : "h3 mb-0 text-dark"}>Hello Admin! Welcome to Dashboard</h1>
            </div>
            <CardsData/>
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
        </>
    )
}

export default Admin;