import React, { useRef, useState } from 'react'
import useAuth from "../../hooks/useAuth"
import { Button, Modal, Form, FormControl, FormGroup, ModalHeader, ModalBody, ModalFooter, ModalTitle, FormLabel, FormSelect, Row, Col } from 'react-bootstrap';

function AddCenter() {


    const { theme } = useAuth()


    // Modal 

    const [showModal, setShowModal] = useState(false);


    //  Ref

    const centerName = useRef()
    const location = useRef()
    const CourierService = useRef()



    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };




    const handleSend = () => {

        console.log(

            centerName.current.value,
            location.current.value,
            CourierService.current.value,
        );


    };



    return (
        <>
            <div className='mb-3 d-flex justify-content-end'>
                <Button variant="primary" onClick={handleShowModal}>
                    Add New Center
                </Button>

                <Modal show={showModal} onHide={handleCloseModal} >
                    <ModalHeader >
                        <ModalTitle  >New Center</ModalTitle>
                        <button className='btn' onClick={handleCloseModal}>
                            <li className='fa fa-times' ></li>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            
                            <FormGroup >
                                <FormLabel>Dispatch Center Name</FormLabel>
                                <FormControl
                                    type="email"
                                    ref={centerName}
                                />
                            </FormGroup>

                            <Row className='d-flex justify-content-between px-2 mt-3'>
                                <FormGroup>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl
                                        type="text"
                                        ref={location}
                                        required
                                        aria-required="true"
                                    />

                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Courier Service</FormLabel>
                                    <FormControl
                                        type="text"
                                        ref={CourierService}
                                    />
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
                            Add
                        </Button>
                    </ModalFooter>
                </Modal>

            



            </div>
        </>
    )
}

export default AddCenter