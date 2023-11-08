import React, { Suspense } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LoadingFallback from './LoadingFallback';

function Layout() {
  const { theme } = useAuth();
  return (
    <>
      <div>
        <section id="page-top">
          <div id="wrapper">
            <Sidebar></Sidebar>
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content" className={theme ? 'darkthemecontent' : ''}>
                <Navbar></Navbar>
                <Suspense fallback={<LoadingFallback />}>
                  <div className="container-fluid">
                    <Outlet></Outlet>
                  </div>
                </Suspense>
              </div>
              <Footer></Footer>
            </div>
          </div>
          {/* <!-- Scroll to Top Button--> */}
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
          </a>
        </section>
      </div>
    </>
  );
}

export default Layout;
