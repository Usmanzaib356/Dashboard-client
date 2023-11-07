import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth"
import logo from '../images/logo.avif'
function Navbar() {
    const { theme, setTheme, sidebar, setSidebar } = useAuth()
  
    function toggle() {
        setTheme(!theme)
    }


    const [logout, setLogOut] = useState(false)


    const handleLogout = () => {

        setLogOut(!logout)

    }


    const handleSidebar = () => {
        setSidebar(!sidebar)
    }


    // navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow

    // navbar navbar-expand navbar-light  topbar mb-4 static-top shadow navbardarktheme

    return (
        <>

            {/*  <!-- Topbar --> */}
            <nav className={theme ? 'navbar navbar-expand navbar-light   topbar mb-4 static-top shadow  navbardarktheme' : 'navbar navbar-expand navbar-light bg-white  topbar mb-4 static-top shadow '} >

                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                <button className="btn btn-link d-md-none rounded-circle mr-3" onClick={handleSidebar}>
                    <i className="fa fa-bars"></i>
                </button>

                {/*  <!-- Topbar Search --> */}
                <form
                    className="  searchbar-nav-none form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group w-100 mr-4 ">
                        <input type="text" className={theme ? "form-control srchdark  border-0 small" : "form-control bg-light  border-0 small"} placeholder="Search for available stock"
                            aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append ">
                            <button className={theme ? "btn srcbtn" : "btn btn-primary"} type="button">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>

                    </div>
                </form>

                {/*  <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto ">

                    {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <Link className="nav-link dropdown-toggle" to="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                        </Link>
                        {/*   <!-- Dropdown - Messages --> */}
                        <div className={` ${theme ? 'table-dark' : ''} dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in`}
                            aria-labelledby="searchDropdown">
                            <form className={`form-inline mr-auto w-100 navbar-search ${theme ? 'table-dark' : ''}`}>
                                <div className={`input-group ${theme ? 'table-dark' : ''}`}>
                                    <input type="text" className={`form-control  border-0 small ${theme ? 'table-dark' : ''}`}
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className={`btn btn-primary ${theme ? 'table-dark' : ''}`} type="button">
                                            <i className="fas fa-search fa-sm"></i>

                                        </button>

                                    </div>
                                </div>
                            </form>

                        </div>

                    </li>





                    <div className='d-flex justify-content-between gap-for-logo align-items-center '>

                        <li className="nav-item mt-3">

                            <label className="switch">
                                <input type="checkbox" checked={theme} onChange={toggle} />
                                <span className="slider"> </span>
                            </label>
                        </li>




                        {/*  <!-- Nav Item - Alerts --> */}
                        <div className="topbar-divider d-none d-sm-block">

                        </div>


                        {/* <!-- Nav Item logo and logout --> */}
                        <a href='#' onClick={handleLogout} className='text-decoration-none'>
                            <div className='logo-image d-flex gap-for-logo align-items-center '>
                                <span className={theme ? 'fz-80per text-light  d-none d-lg-inline-block' : 'fz-80per  d-none d-lg-inline-block '}>
                                    Master Admin
                                </span>
                                <span >
                                    <img src={logo} alt="" />
                                </span>
                            </div>
                        </a>

                        {
                            logout ? (
                                <div className={theme ? 'logout-drop-down  logout-drop-down-bg ps-4 col-lg-4 col-12 ' : "logout-drop-down    ps-4 col-lg-4 col-12"}  >

                                    <li className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400">  </li>

                                    <a href="#" className={theme ? 'fz-80per text-decoration-none text-light' : 'fz-80per text-decoration-none '}>
                                        Logout
                                    </a>
                                </div>
                            ) : null
                        }




                    </div>




                </ul>

            </nav>
            {/*  <!-- End of Topbar --> */}
        </>
    )
}

export default Navbar