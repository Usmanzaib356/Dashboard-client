import React, { useRef, useState } from 'react'
import useAuth from "../../hooks/useAuth"
import { Button, Modal, Form, FormControl, FormGroup, ModalHeader, ModalBody, ModalFooter, ModalTitle, FormLabel, FormSelect, Row, Col } from 'react-bootstrap';

function AddRole() {





    const { theme } = useAuth()


    // Modal 

    const [showModal, setShowModal] = useState(false);


    //  Ref

    const role = useRef()
    const status = useRef()

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };




    const handleSend = () => {

        console.log(
            role.current.value,
            status.current.value,
        );


    };



    return (
        <>
            <div className='mb-3 d-flex justify-content-end'>
                <Button variant="primary" onClick={handleShowModal}>
                    Add New Role
                </Button>

                <Modal show={showModal} onHide={handleCloseModal} >
                    <ModalHeader >
                        <ModalTitle  >New Role</ModalTitle>
                        <button className='btn' onClick={handleCloseModal}>
                            <li className='fa fa-times' ></li>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <Form>

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

                        </Form>
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

export default AddRole