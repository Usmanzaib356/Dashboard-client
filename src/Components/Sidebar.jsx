import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from "../hooks/useAuth"
function Sidebar() {

    const { theme, sidebar, role } = useAuth()

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <>


            {/*  <!-- Sidebar --> */}

            <ul className={theme ? `navbar-nav    ${sidebar ? 'd-none d-md-inline  ' : null}  sidebar sidebar-dark accordion darkthemesidebar ` : `navbar-nav   ${sidebar ? 'd-none d-md-inline' : null}   bg-gradient-primary sidebar sidebar-dark accordion `} id="accordionSidebar">

                {/*  <!-- Sidebar - Brand --> */}
                <Link className="sidebar-brand  d-flex align-items-center justify-content-center" to="/" >
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin </div>
                    <div className="text-center d-none d-md-inline">
                    </div>
                </Link>

                {/*   <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/*  <!-- Nav Item - Dashboard --> */}
                {
                    role === "Admin" && 
                    <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>
                }

                {/*  <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/*   <!-- Heading --> */}
                <div className="sidebar-heading">
                    Interface
                </div>

                {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                {
                    role === "Admin" && 
                    <li className={`nav-item `}>
                    <Link className={`nav-link collapsed `} to="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-users"></i>
                        <span>Users</span>
                    </Link>
                    <div id="collapseTwo" className={`collapse `} aria-labelledby="headingTwo" data-parent="#accordionSidebar"> 
                        <div className={` ${theme ? 'table-dark  ' : 'bg-white '}  py-2 collapse-inner rounded`}>
                            <h6 className="collapse-header">USERS</h6>
                            <Link className={`collapse-item ${theme ? 'text-light text-h-none-nav' : 'text-dark'} `} to="/view-users">View Users</Link>
                            <Link className={`collapse-item ${theme ? 'text-light text-h-none-nav' : 'text-dark'} `} to="/users-role">User Roles </Link>
                        </div>
                    </div>
                </li>
                }





                <li className="nav-item">
                    <Link className="nav-link " to="/products" >
                        <i className="fas fa-fw fa-truck"></i>
                        <span>Products</span>
                    </Link>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <div className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseUtilities"
                        aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-file-alt"></i>
                        <span>Inventory</span>
                    </div>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className={`  ${theme ? 'table-dark  ' : 'bg-white '}  py-2 collapse-inner rounded`}>
                            <h6 className="collapse-header">INVENTORY</h6>
                            <Link className={`collapse-item ${theme ? 'text-light text-h-none-nav' : 'text-dark'} `} to="/inventory">Inventory in</Link>
                            <Link className={`collapse-item ${theme ? 'text-light text-h-none-nav' : 'text-dark'} `} to="/overall-inventory">Overall Inventory</Link>
                            <Link className={`collapse-item ${theme ? 'text-light text-h-none-nav' : 'text-dark'} `} to="/faulty-inventory">Faulty Inventory</Link>
                            <Link className={`collapse-item ${theme ? 'text-light text-h-none-nav' : 'text-dark'} `} to="/return-inventory">Return Inventory</Link>
                            <Link className={`collapse-item ${theme ? 'text-light text-h-none-nav' : 'text-dark'} `} to="/inventory-status" 
                            >Inventory Status  </Link>
                        </div>
                    </div>
                </li>


                <li className="nav-item">
                    <Link className="nav-link " to="/suppliers" >
                        <i className="fas fa-fw fa-truck"></i>
                        <span>Suppliers</span>
                    </Link>
                </li>




                <li className="nav-item">
                    <Link className="nav-link " to="/warehouses" >
                        <i className="fas fa-fw fa-home"></i>
                        <span>WareHouses</span>
                    </Link>
                </li>



                <li className="nav-item">
                    <Link className="nav-link " to="/stores" >
                        <i className="fas fa-fw fa-store"></i>
                        <span>Stores</span>
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseThree"
                        aria-expanded="true" aria-controls="collapseThree">
                        <i className="fas fa-fw fa-file-alt"></i>
                        <span>Orders</span>
                    </Link>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionSidebar">
                        <div className={` ${theme ? 'table-dark  ' : 'bg-white '}  py-2 collapse-inner rounded`}>
                            <h6 className="collapse-header">ORDERS</h6>
                            <Link className={`collapse-item ${theme ? 'text-light text-h-none-nav' : 'text-dark'} `} to="/all-orders">All Orders</Link>
                            <Link className={`collapse-item ${theme ? 'text-light text-h-none-nav' : 'text-dark'} `} to="/remaining-orders">Remaining Orders </Link>
                            <Link className={`collapse-item ${theme ? 'text-light text-h-none-nav' : 'text-dark'} `} to="/dispatched-orders">Dispatched Orders</Link>
                            <Link className={`collapse-item ${theme ? 'text-light text-h-none-nav' : 'text-dark'} `} to="/dispatched-centers">Dispatched Centers </Link>
                        </div>
                    </div>
                </li>



                {/* <!-- Divider --> */}
                {/* <hr className="sidebar-divider d-none d-md-block" /> */}

                {/* Sidebar Toggler (Sidebar) */}


                
                {/* <div className="text-center align-items-center d-none d-md-inline">
                    <button
                        className="btn btn-link rounded-circle border-0"
                        id="sidebarToggle"
                        onClick={handleSidebarToggle}
                    >
                        <i className="bi bi-list"></i> </button>
                </div> */}




            </ul>
            {/*  <!-- End of Sidebar --> */}



        </>
    )
}

export default Sidebar