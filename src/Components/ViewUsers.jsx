import React, {  useState } from 'react';
import useAuth from '../hooks/useAuth';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import CommonTable from './CommonTable';
import AddUser from './modal/AddUser';
import { useAuthenticator } from '../handlers/tokenHandler';
import axios from 'axios';
function ViewUsers() {
  const [style, setStyle] = useState(
    'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
  );

  const changeStyle = () => {
    if (
      style == 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
    ) {
      setStyle(
        'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'
      );
    } else {
      setStyle('navbar-nav bg-gradient-primary sidebar sidebar-dark accordion');
    }
  };
  const changeStyle1 = () => {
    if (
      style == 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
    ) {
      setStyle(
        'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1'
      );
    } else {
      setStyle('navbar-nav bg-gradient-primary sidebar sidebar-dark accordion');
    }
  };

  // Context Api
  const { theme, serverURL, usersGet, setUsersGet } = useAuth();

       // Delete Center
       const {getHeaders} = useAuthenticator()
       const handleDelete = async (viewUsersDelete) => {
           try {
               const url = serverURL + `/users/${viewUsersDelete}`
               const headers = getHeaders()
               await axios.delete(url,{headers})
               const UpdateItem = usersGet.filter(item => item._id !== viewUsersDelete)
               setUsersGet(UpdateItem)
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
              <div id="content" className={theme ? 'darkthemecontent' : ''}>
                {/*  <!-- Topbar --> */}
                <Navbar></Navbar>
                {/*  <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}

                {/*   <!-- /.container-fluid --> */}
                <div className="container-fluid">
                  <AddUser></AddUser>
                  <CommonTable 
                   viewUsersDelete={handleDelete}
                   viewUsers
                   data={usersGet} />
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
  );
}

export default ViewUsers;
