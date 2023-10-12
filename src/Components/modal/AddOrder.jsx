import React, { useRef, useState } from 'react'
import useAuth from "../../hooks/useAuth"
import { Button, Modal, Form, FormControl, FormGroup, ModalHeader, ModalBody, ModalFooter, ModalTitle, FormLabel, FormSelect, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function AddOrder() {


    const { serverURL, dispatchCenter, setDispatchCenter } = useAuth()

    // InputFieldMessage
    const [orderNumber, setOrderNumber] = useState('');
    const [dispatchCenterValid, setDispatchCenterValid] = useState('');
    const [dispatchDate, setDispatchDate] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [msg, setMsg] = useState('');

    // Modal 
    const [showModal, setShowModal] = useState(false);


    //  Ref
    const order_number = useRef()
    const dispatch_center = useRef()
    const dispatch_date = useRef()
    const total_amount = useRef()


    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSend = async () => {
        if (validInputs()) {
            const url = serverURL + '/dispatched-orders/dispatched-order'
            const json = {
                order_number: order_number.current.value,
                dispatch_center: dispatch_center.current.value,
                dispatch_date: dispatch_date.current.value,
                total_amount: total_amount.current.value,
            }   
            try {
                const response = await axios.post(url, json)
                console.log(response);
                setMsg('Center has been Save successfully')
            } catch (error) {
                console.log(error);
            }
        }
    };

    const validInputs = () => {
        let valid = true
        setOrderNumber('')
        setDispatchCenterValid('')
        setDispatchDate('')
        setTotalAmount('')

        if (order_number.current.value.trim() === '') {
            valid = false
            setOrderNumber('Please enter your Center Name')
        }

        if (dispatch_center.current.value.trim() === '') {
            valid = false
            setDispatchCenterValid('Please enter your Location')
        }

        if (dispatch_date.current.value.trim() === '') {
            valid = false
            setDispatchDate('Please enter your Services')
        }

        
        if (total_amount.current.value.trim() === '') {
            valid = false
            setTotalAmount('Please enter your Services')
        }

        return valid

    }

    return (
        <>
            <div className='mb-3 d-flex justify-content-end'>
                <Button variant="primary" onClick={handleShowModal}>
                    Add New Order
                </Button>
                <Modal show={showModal} onHide={handleCloseModal} >
                    <ModalHeader >
                        <ModalTitle  >New Order</ModalTitle>
                        <button className='btn' onClick={handleCloseModal}>
                            <li className='fa fa-times' ></li>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup >
                                <FormLabel>Dispatch Order</FormLabel>
                                <FormControl
                                    type="number"
                                    ref={order_number}
                                    placeholder='Order'
                                />
                            </FormGroup>
                            <p className="error-message text-danger">{orderNumber}</p>
                            <FormGroup className='mt-2'>
                                <FormLabel>Dispatch Center </FormLabel>
                                <FormControl
                                    type="text"
                                    ref={dispatch_center}
                                    placeholder='Center'
                                />
                            </FormGroup>
                            <p className="error-message text-danger">{dispatchCenterValid}</p>
                            <Row className='d-flex justify-content-between px-2 mt-3'>
                                <FormGroup>
                                    <FormLabel>Order Dispatch date</FormLabel>
                                    <FormControl
                                        type="date"
                                        ref={dispatch_date}
                                        required
                                        aria-required="true"
                                        placeholder='Date'
                                    />
                                    <p className="error-message text-danger">{dispatchDate}</p>
                                </FormGroup>

                                <FormGroup>
                                    <FormLabel>Total Amount</FormLabel>
                                    <FormControl
                                        type="number"
                                        ref={total_amount}
                                        placeholder='Amount'
                                    />
                                    <p className="error-message text-danger">{totalAmount}</p>
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

export default AddOrder;