import React, { useState } from 'react'
import useAuth from "../../hooks/useAuth"

function CardsData() {

    const { theme,
        totalInventory,
        totalInventoryCost,
        allOrder,
        totalDispatchOrderCost
         } = useAuth()


    return (
        <>

            <div className=" row">

                {/* <!-- Earnings (Monthly) Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4 ">
                    <div className={theme ? "card border-left-primary shadow h-100 py-2 cardboders" : "card border-left-primary shadow h-100 py-2"}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        TOTAL (INVENTORY)</div>
                                    <div className={theme ? "h5 mb-0 font-weight-bold text-light" : "h5 mb-0 font-weight-bold text-gray-800"}>{totalInventory}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Earnings (Monthly) Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className={theme ? "card border-left-primary shadow h-100 py-2 cardboders" : "card border-left-primary shadow h-100 py-2"}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        TOTAL COST (INVENTORY)</div>
                                    <div className={theme ? "h5 mb-0 font-weight-bold text-light" : "h5 mb-0 font-weight-bold text-gray-800"}>${totalInventoryCost}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Earnings (Monthly) Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className={theme ? "card border-left-primary shadow h-100 py-2 cardboders" : "card border-left-primary shadow h-100 py-2"}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">TOTAL (ORDERS)
                                    </div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className={theme ? "h5 mb-0 font-weight-bold text-light" : "h5 mb-0 font-weight-bold text-gray-800"}>{allOrder}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Pending Requests Card Example --> */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className={theme ? "card border-left-primary shadow h-100 py-2 cardboders" : "card border-left-primary shadow h-100 py-2"}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        TOTAL COST (DISPATCHED ORDERS)</div>
                                    <div className={theme ? "h5 mb-0 font-weight-bold text-light" : "h5 mb-0 font-weight-bold text-gray-800"}>$ {totalDispatchOrderCost}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsData