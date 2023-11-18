import React, { useState, useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import {
  Button,
  Modal,
  Form,
  FormControl,
  FormGroup,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalTitle,
  FormLabel,
  FormSelect,
  Row,
  Col,
} from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuthenticator } from '../../handlers/tokenHandler';

function AddOrder() {
  const { setDispatchOrder, remainingOrders, } = useAuth();

  const [orderNumber, setOrderNumber] = useState('');
  const [ProductId, setProductId] = useState('');
  const [dispatchCenterValid, setDispatchCenterValid] = useState('');
  const [dispatchDate, setDispatchDate] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [msg, setMsg] = useState('');
  const [showModal, setShowModal] = useState(false);

  const order_number = useRef(null);
  const product_id = useRef(null);
  const dispatch_center = useRef(null);
  const dispatch_date = useRef(null);
  const total_amount = useRef(null);
  const order_quantity = useRef(null);


  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const validInputs = () => {
    let valid = true;
    setDispatchCenterValid('');
    setDispatchDate('');
    setTotalAmount('');

    if (dispatch_date.current.value.trim() === '') {
      valid = false;
      setDispatchDate('Please enter your Services');
    }

    if (total_amount.current.value.trim() === '') {
      valid = false;
      setTotalAmount('Please enter your Services');
    }

    return valid;
  };

  const handleOrderChange = (event) => {
    const selectValue = event.target.value;
    setOrderNumber(selectValue);

    // Find the selected order and set the total_amount
    const selectedOrder = remainingOrders.find(
      (item) => item._id === selectValue
    );

    if (selectedOrder) {
      product_id.current.value = selectedOrder.product_id;
      total_amount.current.value = selectedOrder.total_amount;
      order_quantity.current.value = selectedOrder.quantity;
      setQuantity(selectedOrder.quantity);
      setProductId(selectedOrder.product_id);
      setTotalAmount(selectedOrder.total_amount);
    } else {
      total_amount.current.value = '';
      setTotalAmount('');
    }
  };
  const {getHeaders} = useAuthenticator()

  const handleSend = async () => {
    if (validInputs()) {
      const url = process.env.REACT_APP_SERVER_URL + '/dispatched-orders/dispatched-order';
      const json = {
        product_id: ProductId,
        order_number: order_number.current.value,
        dispatch_center: dispatch_center.current.value,
        dispatch_date: dispatch_date.current.value,
        total_amount: total_amount.current.value,
        quantity: order_quantity.current.value,
      };
      console.log(json);

      try {
        const headers = getHeaders()
        const response = await axios.post(url, json,{headers});
        console.log(response);
        setDispatchOrder((prev)=>[...prev,response.data.data])
        setMsg('Dispatched Order has been saved successfully');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const center = Cookies.get('center');

  return (
    <>
      <div className="mb-3 d-flex justify-content-end">
        <Button variant="primary" onClick={handleShowModal}>
          Add New Order
        </Button>
        <Modal show={showModal} onHide={handleCloseModal}>
          <ModalHeader>
            <ModalTitle>New Order</ModalTitle>
            <button className="btn" onClick={handleCloseModal}>
              <li className="fa fa-times"></li>
            </button>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup
                className="d-flex flex-column"
                style={{ width: '100%' }}
              >
                <FormLabel>Dispatch Order</FormLabel>
                <select
                  name="supplier_id"
                  className="form-control"
                  required
                  onChange={(event) => handleOrderChange(event)}
                  ref={order_number}
                >
                  <option>Select Order no</option>
                  {remainingOrders.map((item, i) => {
                    return (
                      <option key={i} value={item._id}>
                        {item._id}
                      </option>
                    );
                  })}
                </select>
              </FormGroup>
              <FormGroup className="mt-2">
                <FormLabel>Product ID</FormLabel>
                <FormControl
                  disabled
                  type="number"
                  ref={product_id}
                  placeholder={ProductId}
                />
              </FormGroup>

              <FormGroup className="mt-2">
                <FormLabel>Dispatch Center </FormLabel>
                <FormControl
                  disabled
                  type="text"
                  ref={dispatch_center}
                  value={center}
                />
              </FormGroup>

              <p className="error-message text-danger">{dispatchCenterValid}</p>
              <Row className="d-flex justify-content-between px-2 mt-3">
                <FormGroup>
                  <FormLabel>Order Dispatch date</FormLabel>
                  <FormControl
                    type="date"
                    ref={dispatch_date}
                    required
                    aria-required="true"
                    placeholder="date"
                  />
                  <p className="error-message text-danger">{dispatchDate}</p>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Total Amount</FormLabel>
                  <FormControl
                    disabled
                    type="number"
                    ref={total_amount}
                    placeholder={totalAmount}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl
                    disabled
                    type="number"
                    ref={order_quantity}
                    placeholder={quantity}
                  />
                </FormGroup>
              </Row>
            </Form>
          </ModalBody>
          <p className="text-center text-success">{msg}</p>
          <ModalFooter>
            <Button variant="danger" onClick={handleCloseModal}>
              <li className="fa fa-times-circle mr-1"></li>
              Close
            </Button>
            <Button variant="success" onClick={handleSend}>
              <li className="fa fa-plus-circle mr-1"></li>
              Add
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default AddOrder;
