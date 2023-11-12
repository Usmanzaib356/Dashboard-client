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
  const { serverURL, remainingOrders, currentUser, Products } = useAuth();
  const { getHeaders } = useAuthenticator();

  const [currProduct, setCurrProduct] = useState(null);
  const [ProductId, setProductId] = useState('');
  const [dispatchCenterValid, setDispatchCenterValid] = useState('');
  const [dispatchDate, setDispatchDate] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [msg, setMsg] = useState('');
  const [remainingObject, setRemainingObject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  console.log(currProduct);

  const product_id = useRef(null);
  const product_title = useRef(null);
  const order_quantity = useRef(null);
  const total_amount = useRef(null);
  const location = useRef(null);
  const address = useRef(null);
  //   const order_quantity = useRef(null);
  //   const centerRef = useRef(null);
  //   const OrderNo = useRef(null);

  const validInputs = () => {
    let valid = true;
    setDispatchCenterValid('');
    setDispatchDate('');
    setTotalAmount('');

    if (location.current.value.trim() === '') {
      valid = false;
      setDispatchDate('Please enter your Services');
    }
    if (address.current.value.trim() === '') {
      valid = false;
      setDispatchDate('Please enter your Services');
    }

    if (order_quantity.current.value.trim() === '') {
      valid = false;
      setTotalAmount('Please enter your Services');
    }

    return valid;
  };

  const handleOrderChange = (event) => {
    const selectValue = event.target.value;
    setCurrProduct(selectValue);

    // Find the selected order and set the total_amount
    const selectedProduct = Products.find((item) => item._id === selectValue);
    setCurrProduct(selectedProduct);

    if (selectedProduct) {
      product_id.current.value = selectedProduct._id;
      total_amount.current.value = selectedProduct.price;
      setProductId(selectedProduct.product_id);
      setTotalAmount(selectedProduct.total_amount);
    } else {
      total_amount.current.value = '';
      setTotalAmount('');
    }
  };

  function handleQuantity(e) {
    const quantity = e.target.value;
    const price = currProduct?.price;
    total_amount.current.value = quantity * price;
  }

  const handleSend = async () => {
    if (validInputs()) {
      const url = serverURL + '/dispatched-orders/dispatched-order';
      const json = {
        product_id: product_id.current.value,
        product_title: product_title.current.value,
        // dispatch_center: dispatch_center.current.value,
        // dispatch_date: dispatch_date.current.value,
        total_amount: total_amount.current.value,
        quantity: order_quantity.current.value,
        location: location.current.value,
        address: address.current.value,
      };
      console.log(json);

      try {
        const headers = getHeaders();
        const response = await axios.post(url, json, { headers });
        console.log(response);
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
        <Button
          variant="primary"
          onClick={() => {
            setShowModal(true);
          }}
        >
          AddOrder
        </Button>
        <Modal
          show={showModal}
          onHide={() => {
            setShowModal(false);
          }}
        >
          <ModalHeader>
            <ModalTitle>Add Remaining Order</ModalTitle>
            <button
              className="btn"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <li className="fa fa-times"></li>
            </button>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup
                className="d-flex flex-column"
                style={{ width: '100%' }}
              >
                <FormLabel>Remaining Order</FormLabel>
                <select
                  name="order_"
                  className="form-control"
                  required
                  onChange={(event) => handleOrderChange(event)}
                  ref={product_title}
                >
                  <option>Select Product</option>
                  {Products.map((item, i) => {
                    return (
                      <option key={i} value={item._id}>
                        {item.title}
                      </option>
                    );
                  })}
                </select>
              </FormGroup>
              <FormGroup className="mt-2">
                <FormLabel>Product ID</FormLabel>
                <FormControl
                  disabled
                  type="text"
                  ref={product_id}
                  placeholder={'Select ptoduct to get ID'}
                />
              </FormGroup>

              {/* <FormGroup className="mt-2">
                <FormLabel>Dispatch Center </FormLabel>
                <FormControl
                  disabled
                  type="text"
                  //   ref={dispatch_center}
                  value={center}
                />
              </FormGroup> */}

              <p className="error-message text-danger">{dispatchCenterValid}</p>
              <Row className="d-flex justify-content-between px-2 mt-3">
                {/* <FormGroup>
                  <FormLabel>Order Dispatch date</FormLabel>
                  <FormControl
                    type="date"
                    // ref={dispatch_date}
                    required
                    aria-required="true"
                    placeholder="date"
                  />
                  <p className="error-message text-danger">{dispatchDate}</p>
                </FormGroup> */}
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
                    type="number"
                    ref={order_quantity}
                    onChange={(e) => {
                      handleQuantity(e);
                    }}
                    placeholder={'Enter Order Quantity'}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Location</FormLabel>
                  <FormControl
                    type="text"
                    ref={location}
                    placeholder={'Enter your location'}
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel>Address</FormLabel>
                  <FormControl
                    type="text"
                    ref={address}
                    placeholder={'Enter your address'}
                  />
                </FormGroup>
              </Row>
            </Form>
          </ModalBody>
          <p className="text-center text-success">{msg}</p>
          <ModalFooter>
            <Button variant="danger" onClick={() => setShowModal(false)}>
              <li className="fa fa-times-circle mr-1"></li>
              Close
            </Button>
            {/* onClick={handleSend} */}
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
