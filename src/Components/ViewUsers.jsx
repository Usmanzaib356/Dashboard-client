import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth"
import axios from 'axios';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import CommonTable from './CommonTable';
import { dummyDataViewUsers } from "../utils/data"
import AddUser from './modal/AddUser';
function ViewUsers() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    const [msg,setMsg] = useState("")
    const [color,setColor] = useState(false)
    const [loader,setLoader] = useState(false)
    

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


    // Add Products Funtion

   //  useRef
   const name = useRef()
   const price = useRef()
   const image = useRef()

   // Context Api
  const { Server_Url,theme } = useAuth()

    function add (e){
    e.preventDefault()
    setLoader(true)
        
     
    //  Axois post req
    const url = Server_Url + "/addproducts"
    const formData = new FormData()
    formData.append("name", name.current.value);
    formData.append("price", price.current.value);
    formData.append("image", image.current.files[0]);
    
   axios.post(url,formData).then(
    (res)=>{
        console.log(res);
        setMsg(res.data.msg)
        setColor(true)
        setLoader(false)
    }
   ).catch(
    (err)=>{
        console.log(err);
        setMsg(err.response.data);
        setColor(false)
        setLoader(false)
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
                            <AddUser></AddUser>
                            <CommonTable  viewUsers data={dummyDataViewUsers} />
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

export default ViewUsers