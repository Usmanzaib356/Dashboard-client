import React, { useRef, useState } from 'react'
import useAuth from "../../hooks/useAuth"
import { Button, Modal, Form, FormControl, FormGroup, ModalHeader, ModalBody, ModalFooter, ModalTitle, FormLabel, FormSelect, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';

function AddCenter() {


    const { serverURL, dispatchCenter, setDispatchCenter } = useAuth()

    // InputFieldMessage
    const [Locations, setLocations] = useState('');
    const [centerNames, setCenterNames] = useState('');
    const [Service, setService] = useState('');
    const [msg, setMsg] = useState('');

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
    const {getHeaders} = useAuthenticator()
    const handleSend = async () => {
        if (validInputs()) {
            const url = process.env.REACT_APP_SERVER_URL + '/dispatched-centers/dispatched-center'
            const json = {
                center_name: centerName.current.value,
                location: location.current.value,
                courier_service: CourierService.current.value
            }   
            try {
                const headers = getHeaders()
                const response = await axios.post(url, json,{headers})
                const newCenter =  response.data.data
                setDispatchCenter( prevCenter => [...prevCenter , newCenter ])
                setMsg('Center has been Save successfully')
            } catch (error) {
                console.log(error);
            }
        }
    };

    const validInputs = () => {
        let valid = true
        setCenterNames('')
        setLocations('')
        setService('')

        if (centerName.current.value.trim() === '') {
            valid = false
            setCenterNames('Please enter your Center Name')
        }

        if (location.current.value.trim() === '') {
            valid = false
            setLocations('Please enter your Location')
        }

        if (CourierService.current.value.trim() === '') {
            valid = false
            setService('Please enter your Services')
        }

        return valid

    }

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
                            <p className="error-message text-danger">{centerNames}</p>
                            <Row className='d-flex justify-content-between px-2 mt-3'>
                                <FormGroup>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl
                                        type="text"
                                        ref={location}
                                        required
                                        aria-required="true"
                                    />
                                    <p className="error-message text-danger">{Locations}</p>
                                </FormGroup>

                                <FormGroup>
                                    <FormLabel>Courier Service</FormLabel>
                                    <FormControl
                                        type="text"
                                        ref={CourierService}
                                    />
                                    <p className="error-message text-danger">{Service}</p>
                                </FormGroup>
                            </Row>
                        </Form>
                    </ModalBody>
                    <p className=" text-center text-success">{msg}</p>
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