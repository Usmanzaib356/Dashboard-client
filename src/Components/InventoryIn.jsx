import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import CommonTable from './CommonTable';
import { dummyInventoryIn } from '../utils/data';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
function InventoryIn() {
  const [style, setStyle] = useState(
    'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
  );
  const [msg, setMsg] = useState('');
  const [color, setColor] = useState(false);
  const [loader, setLoader] = useState(false);

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

  //   Fetch Data from API
  const { serverURL, inventoryIn, setInventoryIn, theme } = useAuth();
  useEffect(() => {
    console.log('useeffct');
    async function getData() {
      try {
        const url = serverURL + '/inventory//inventory';
        const res = await axios.get(url);
        setInventoryIn(res.data.data);
        console.log(typeof res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

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
                  <div className="mb-3 d-flex justify-content-end">
                    <Button variant="primary">
                      <Link
                        to="/add-inventory"
                        className="text-light text-decoration-none"
                      >
                        Create New
                      </Link>
                    </Button>
                  </div>
                  {inventoryIn ? (
                    <CommonTable inventoryIn data={inventoryIn} />
                  ) : (
                    'loading'
                  )}
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

export default InventoryIn;
