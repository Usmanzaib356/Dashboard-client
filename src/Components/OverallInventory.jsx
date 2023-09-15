import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import useAuth from "../hooks/useAuth"
import Cookies from 'js-cookie';
import axios from 'axios';
import CardsData from '../Components/Cards/CardsData';
import CommonTable from './CommonTable';
import {dummyOverallInventory} from '../utils/data';
function OverallInventory() {
  const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");



  const changeStyle = () => {
      if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
          setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
      }
      else {
          setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
      }
  };
  const changeStyle1 = () => {
      if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
          setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
      }
      else {
          setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
      }
  };

  const [inventory, setInventory] = useState([])
  const { Server_Url,theme } = useAuth()
  


useEffect(()=>{

const url = Server_Url + "/allinventory"
const token = Cookies.get("Token")

// Axois Get request
axios.get(url,{headers:{x_access_token:token}}).then(
    (res)=>{
        
        setInventory(res.data)
    }
).catch(
   (err)=>{
        console.log(err);
    }
)

},[Server_Url])



// Delete Function

function dlt(id){

    const url = Server_Url + "/deleteinventory"
    const json = {id:id}
   
    axios.post(url,json).then(
       (res)=>{
          console.log(res);
          setInventory( previnv => previnv.filter(  inv => inv._id !== id )  )
       }
    ).catch(
       (err)=>{
          console.log(err);
       }
    )
   
   
   
   
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
                <div id="content" className={theme ? "darkthemecontent" : ""}>

                    {/*  <!-- Topbar --> */}
                    <Navbar></Navbar>
                    {/*  <!-- End of Topbar --> */}

                    {/* <!-- Begin Page Content --> */}

                    {/*   <!-- /.container-fluid --> */}

                  <div className='container-fluid'>
                    <CardsData />
                    <CommonTable overallInventory data={dummyOverallInventory} />
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

export default OverallInventory