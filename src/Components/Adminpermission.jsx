import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import useAuth from "../hooks/useAuth" 
function Adminpermission() {
    const { theme } = useAuth()
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

                                <div className="container-fluid mt-5">


<div className="text-center">
  <div className="error mx-auto" data-text="400">400</div>
  <p className="lead text-danger mb-5">Only Admin Can See This</p>
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


                    \

                </section>
            </div>

</>
  )
}

export default Adminpermission