import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth"
import Cookies from 'js-cookie';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import CommonTable from './CommonTable';
import { productsDummyData } from '../utils/data';
function Products() {
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


const [Products, setProducts] = useState([])
const { Server_Url,theme } = useAuth()

useEffect(()=>{
    // Axois Get Request
const url = Server_Url + "/allproducts"
const token = Cookies.get("Token")
axios.get(url,{headers:{x_access_token:token}}).then(
    (res)=>{
        console.log(res);
        setProducts(res.data)
    }
).catch(
    (err)=>{
        console.log(err);
    }
)

},[Server_Url])


// Delete Function

function dlt(id){

 const url = Server_Url + "/deleteproduct"
 const json = {id:id}

 axios.post(url,json).then(
    (res)=>{
       console.log(res);
       setProducts( prevproducts => prevproducts.filter(  pro => pro._id !== id )  )
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
                            <CommonTable  products data={productsDummyData} />
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

export default Products