import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useAuth from '../../hooks/useAuth';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Form, FormControl, FormGroup, ModalHeader, ModalBody, ModalFooter, ModalTitle, FormLabel,  Row } from 'react-bootstrap';
import { useAuthenticator } from '../../handlers/tokenHandler';

function UpdateUser() {
    const { serverURL, theme, usersGet, setUsersGet,dispatchCenter  } = useAuth()
    const [msg,setmsg] = useState()
    const {userId} = useParams()
    
    
    // Use ref
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const role = useRef()
    const status = useRef()
    const password = useRef()
    const dispatch_center = useRef()
    const confirmPassword = useRef()

    

    
    const {getHeaders} = useAuthenticator()
     const updateHandle = async (e)=>{
        e.preventDefault()
        const url = serverURL + `/user/${userId}`
        const json = {
            first_name: firstName.current.value,
                last_name: lastName.current.value,
                email: email.current.value,
                dispatch_center:dispatch_center.current.value,
                role: role.current.value,
                status: status.current.value,
                password: password.current.value,
        }
        try {
            const headers = getHeaders()
            const response = await axios.put(url,json,{headers})
            setmsg("Update has been successfully")
            console.log(response);
        } catch (error) {
            console.log(error);
        }
     } 

     useEffect(()=>{
        const getOneItem = usersGet.filter( item => item._id == userId )
         getOneItem.map((item)=>{
            return(
              setUsersGet(item)   
            )
        })
    },[])


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

                                    <Link to='/dispatched-centers'>
                                        Go Back
                                    </Link>
                                    <form action="">
                                        <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                                            <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                                                <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>
                                                    Update Center
                                                </h6>
                                            </div>
                                            <Form className='px-4 py-4'>
                            <Row className='d-flex justify-content-between px-2'>
                                <FormGroup style={{ width: '48%' }}>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl
                                        type="text"
                                        ref={firstName}
                                        required
                                        aria-required="true"
                                    />

                                </FormGroup>
                                <FormGroup style={{ width: '48%' }}>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl
                                        type="text"
                                        ref={lastName}
                                    />
                                </FormGroup>


                            </Row>
                            <FormGroup className='mt-2'>
                                <FormLabel>Email</FormLabel>
                                <FormControl
                                    type="email"
                                    ref={email}
                                />
                            </FormGroup>

                            <FormGroup className='d-flex flex-column mt-2'
                                    style={{ width: '100%' }}
                                >
                                    <FormLabel>Dispatch Center</FormLabel>
                                    <select name="Status" className='form-control'
                                        required
                                        ref={dispatch_center}
                                    >
                                        <option value="0" disabled>
                                            Select Center

                                        </option>
                                        {
                                            dispatchCenter.map((item,i)=>{
                                                return(
                                                    <option value="Active" key={i} >
                                            {item.center_name}

                                        </option>
                                                )
                                            })
                                        }
                                        

                                    </select>
                                </FormGroup>


                            <Row className='d-flex justify-content-between px-2 mt-3'>
                                <FormGroup className='d-flex flex-column'
                                    style={{ width: '48%' }}>

                                    <FormLabel>Role</FormLabel>

                                    <select name="supplier_id" className='form-control'
                                        required
                                        ref={role}

                                    >
                                        <option value="0" disabled>
                                            Select Role

                                        </option>
                                        <option value="Admin" >
                                        Admin

                                        </option>
                                        <option value="Editor" >
                                        Editor

                                        </option>

                                    </select>

                                </FormGroup>
                                <FormGroup className='d-flex flex-column'
                                    style={{ width: '48%' }}
                                >
                                    <FormLabel>Status</FormLabel>
                                    <select name="Status" className='form-control'
                                        required
                                        ref={status}
                                    >
                                        <option value="0" disabled>
                                            Select Status

                                        </option>
                                        <option value="Active" >
                                            Active

                                        </option>
                                        <option value="Inactive" >
                                            Inactive

                                        </option>

                                    </select>
                                </FormGroup>


                            </Row>
                            <Row className='d-flex justify-content-between px-2 mt-4'>
                                <FormGroup style={{ width: '48%' }}>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl
                                        type="password"
                                        ref={password}
                                    />
                                </FormGroup>
                            </Row>

                            <div className='mt-4 w-100'>
                                                    <button type='submit' className='btn  btn-primary w-100'
                                                    onClick={(e)=>updateHandle(e)}
                                                    >
                                                        Update
                                                    </button>
                                                </div>

                        </Form>
                                        </div>
                                    </form>
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

export default UpdateUser;