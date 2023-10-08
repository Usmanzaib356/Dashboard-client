import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import axios from 'axios';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Button } from 'react-bootstrap';
function AddFaulty() {
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



    // Add Products Funtion



    // Context Api
    const { Server_Url, theme } = useAuth()

    // function add (e){
    // e.preventDefault()
    // setLoader(true)


    // //  Axois post req
    // const url = Server_Url + "/addinventory"
    // const formData = new FormData()
    // formData.append("name", name.current.value);
    // formData.append("price", price.current.value);
    // formData.append("quantity", price.current.value);
    // formData.append("image", image.current.files[0]);

    // axios.post(url,formData).then(
    // (res)=>{
    //     console.log(res);
    //     setMsg(res.data.msg)
    //     setColor(true)
    //     setLoader(false)
    // }
    // ).catch(
    // (err)=>{
    //     console.log(err);
    //     setMsg(err.response.data);
    //     setColor(false)
    //     setLoader(false)
    // }
    // )    

    // }




    //  useRef
    const order = useRef()
    const dispatchDate = useRef()
    const product = useRef()
    const comments = useRef()



    // Add New inventory
    const HandleAddFaulty = (e) => {
        e.preventDefault()

        console.log(
            order.current.value,
            dispatchDate.current.value,
            product.current.value,
            comments.current.value,
        );

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

                                    <Link to='/faulty-inventory'>
                                        Go Back
                                    </Link>
                                    
                                        <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                                            <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                                                <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>

                                                    Add Faulty Inventory Record
                                                </h6>
                                            </div>
                                            <form action="">
                                            <div className='card-body'>
                                                <div className="">
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Order #<sup className='text-danger'>*</sup></label>

                                                            <select name="Order_id" className={`form-control ${theme ? 'srchdark' : null}`}
                                                                required
                                                                ref={order}
                                                            >
                                                                <option value="0" disabled>
                                                                    Select Order

                                                                </option>
                                                                <option value="abc" >
                                                                    Order

                                                                </option>

                                                            </select>

                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="">Dispatch Date <sup className='text-danger'>*</sup></label>
                                                            <input
                                                                type="date"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                Name='date'
                                                                required
                                                                ref={dispatchDate}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="mb-4" >
                                                            <label htmlFor="">Product</label>

                                                            <select name="product_id" className={`form-control ${theme ? 'srchdark' : null}`}
                                                                required
                                                                ref={product}

                                                            >
                                                                <option value="0" disabled>
                                                                    Select Product

                                                                </option>

                                                                <option value="okh" style={{ Width: '600px' }} >
                                                                    Products

                                                                </option>
                                                                <option value="abc" style={{ Width: '600px' }} >
                                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptatem
                                                                </option>


                                                            </select>

                                                        </div>
                                                    </div>

                                                    <div className="">
                                                        <div className=" mb-3">
                                                            <label htmlFor="">Comments </label>
                                                            <textarea name="comments" id="" cols="30" rows="5"
                                                                className={`form-control ${theme ? 'srchdark' : null}`}
                                                                ref={comments}
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='mt-4 w-100'>
                                                    <button onClick={e=>HandleAddFaulty(e)} className='btn  btn-primary w-100'>
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                            </form>




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




                </section>
            </div>

        </>
    )
}

export default AddFaulty;