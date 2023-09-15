import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import axios from 'axios';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CommonTable from '../CommonTable';
import { dummyDataViewUsers } from "../../utils/data"
import { Button, Modal, Form, FormControl, FormGroup, ModalHeader, ModalBody, ModalFooter, ModalTitle, FormLabel, FormSelect, Row, Col } from 'react-bootstrap';

function Extra() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    const [msg, setMsg] = useState("")
    const [color, setColor] = useState(false)
    const [loader, setLoader] = useState(false)


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


    const { theme } = useAuth()


    // Modal 

    const [showModal, setShowModal] = useState(false);
    const [passwordMsg, setPasswordMsg] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);


    //  Ref

    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const role = useRef()
    const status = useRef()
    const password = useRef()
    const confirmPassword = useRef()




    const handlePasswordFocus = () => {
        if (password.current.value !== confirmPassword.current.value) {
            setPasswordMsg('Passwords do not match');
            setPasswordMatch(false);
        } else {
            setPasswordMsg('Password Matched!');
            setPasswordMatch(true);
        }
    };





    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };




    const handleSend = () => {

        console.log(

            firstName.current.value,
            lastName.current.value,
            email.current.value,
            role.current.value,
            status.current.value,
            password.current.value,
            confirmPassword.current.value,
        );


    };



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

                                    <div className='mb-2 d-flex justify-content-end'>
                                        <Button variant="primary" onClick={handleShowModal}>
                                            Add New User
                                        </Button>

                                        <Modal show={showModal} onHide={handleCloseModal} >
                                            <ModalHeader >
                                                <ModalTitle  >New User</ModalTitle>
                                                <button className='btn' onClick={handleCloseModal}>
                                                    <li className='fa fa-times' ></li>
                                                </button>
                                            </ModalHeader>
                                            <ModalBody>
                                                <Form>
                                                    <Row className='d-flex justify-content-between px-2'>
                                                        <FormGroup>
                                                            <FormLabel>First Name</FormLabel>
                                                            <FormControl
                                                                type="text"
                                                                ref={firstName}
                                                                required
                                                                aria-required="true"
                                                            />

                                                        </FormGroup>
                                                        <FormGroup>
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


                                                    <Row className='d-flex justify-content-between px-2 mt-3'>
                                                        <FormGroup className='d-flex flex-column'>

                                                            <FormLabel>Role</FormLabel>

                                                            <Form.Select
                                                                ref={role}
                                                                style={{ border: '1px solid #858796', width: '13rem', color: '#858796', fontSize: '1rem' }}
                                                                className='py-1 border border-gray rounded '
                                                            ><option value="0" disabled>Select Role</option>

                                                                <option value='Admin'>Admin</option>
                                                                <option value='Editor'>Editor</option>
                                                            </Form.Select>

                                                        </FormGroup>
                                                        <FormGroup className='d-flex flex-column'>
                                                            <FormLabel>Status</FormLabel>
                                                            <Form.Select
                                                                ref={status}
                                                                style={{ border: '1px solid gray', width: '13rem', color: '#858796', fontSize: '1rem' }}
                                                                className='py-1 border border-gray rounded '
                                                            >
                                                                <option value="0" disabled>Select Status</option>
                                                                <option value='Active'>Active</option>
                                                                <option value='Inactive'>Inactive</option>
                                                            </Form.Select>
                                                        </FormGroup>


                                                    </Row>
                                                    <Row className='d-flex justify-content-between px-2 mt-4'>
                                                        <FormGroup>
                                                            <FormLabel>Password</FormLabel>
                                                            <FormControl
                                                                type="password"
                                                                ref={password}
                                                                onFocus={handlePasswordFocus}
                                                                onChange={handlePasswordFocus}
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <FormLabel>Confirm Password</FormLabel>
                                                            <FormControl
                                                                type="password"
                                                                ref={confirmPassword}
                                                                onFocus={handlePasswordFocus}
                                                                onChange={handlePasswordFocus}
                                                            />
                                                            <Row className={`d-flex justify-content-center mt-2 ${passwordMatch ? 'text-success' : 'text-danger'}`}>
                                                                {passwordMsg}
                                                            </Row>

                                                        </FormGroup>




                                                    </Row>



                                                </Form>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button variant="danger" onClick={handleCloseModal}>
                                                    Close
                                                </Button>
                                                <Button variant="success" onClick={handleSend}>
                                                    Register
                                                </Button>
                                            </ModalFooter>
                                        </Modal>
                                    </div>


                                    <CommonTable viewUsers data={dummyDataViewUsers} />
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

export default Extra