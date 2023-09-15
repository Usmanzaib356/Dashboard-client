import React, { useRef, useState } from 'react'
import { Button, Modal, Form, FormControl, FormGroup, ModalHeader, ModalBody, ModalFooter, ModalTitle, FormLabel, FormSelect, Row, Col } from 'react-bootstrap';
function AddStore() {
    // Modal 

    const [showModal, setShowModal] = useState(false);


    //  Ref

    const status = useRef()
    const StoreName = useRef()

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };




    const handleSend = () => {

        console.log(
            status.current.value,
            StoreName.current.value,
        );


    };
    return (
        <>
            <div className='mb-3 d-flex justify-content-end'>
                <Button variant="primary" onClick={handleShowModal}>
                    Add New Store
                </Button>

                <Modal show={showModal} onHide={handleCloseModal} >
                    <ModalHeader >
                        <ModalTitle  >New Store</ModalTitle>
                        <button className='btn' onClick={handleCloseModal}>
                            <li className='fa fa-times' ></li>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <Form>

                            <Row className='d-flex justify-content-between align-items-center px-2  mb-2'>
                                <FormGroup style={{ width: '48%' }} >
                                    <FormLabel>Store Name</FormLabel>
                                    <FormControl
                                        type="text"
                                        ref={StoreName}
                                        required
                                        aria-required="true"
                                    />

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
                            Add
                        </Button>
                    </ModalFooter>
                </Modal>





            </div>
        </>
    )
}

export default AddStore;