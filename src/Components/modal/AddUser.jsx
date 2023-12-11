import React, { useRef, useState } from 'react'
import useAuth from "../../hooks/useAuth"
import { Button, Modal, Form, FormControl, FormGroup, ModalHeader, ModalBody, ModalFooter, ModalTitle, FormLabel,  Row } from 'react-bootstrap';
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';

function AddUser() {


    const { dispatchCenter,setUsersGet } = useAuth()


    // Modal 
    const [showModal, setShowModal] = useState(false);
    const [passwordMsg, setPasswordMsg] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [msg, setMsg] = useState("");


    //  Ref
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const role = useRef()
    const status = useRef()
    const password = useRef()
    const dispatch_center = useRef()
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


    const {getHeaders} = useAuthenticator()

    const handleSend = async () => {


        try {
            const url = process.env.REACT_APP_SERVER_URL + '/user/add-user'
            const json = {
                first_name: firstName.current.value,
                last_name: lastName.current.value,
                email: email.current.value,
                dispatch_center:dispatch_center.current.value,
                role: role.current.value,
                status: status.current.value,
                password: password.current.value,
            }
            const headers = getHeaders()
            const res =  await axios.post(url, json,{headers})
            setUsersGet((prev)=>[...prev,res.data.data])
            console.log(res.data.data);
            setMsg("User has been add successfully")
        } catch (error) {
            console.log(error);
        }
    

    };



    return (
        <>
            <div className='mb-3 d-flex justify-content-end'>
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
                                        onFocus={handlePasswordFocus}
                                        onChange={handlePasswordFocus}
                                    />
                                </FormGroup>
                                <FormGroup style={{ width: '48%' }}>
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
                        <p className='text-center text-success'>{msg}</p>
                    </ModalBody>
                    
                    <ModalFooter>
                        


                        <Button variant="danger" onClick={handleCloseModal}>
                        <li className='fa fa-times-circle mr-1'></li>
                            Close
                        </Button>
                        <Button variant="success" onClick={handleSend}>
                        <li className='fa fa-plus-circle mr-1'></li>
                            Register
                        </Button>
                    </ModalFooter>
                </Modal>





            </div>
        </>
    )
}

export default AddUser