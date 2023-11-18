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
  Row,
} from 'react-bootstrap';
import axios from 'axios';

import { useAuthenticator } from '../../handlers/tokenHandler';

function AddORemOrder() {
  const { Products,setRemainingOrders } = useAuth();
  const { getHeaders } = useAuthenticator();

  const [currProduct, setCurrProduct] = useState(null);

  const [locationError, setLocationError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [msg, setMsg] = useState('');
  const [showModal, setShowModal] = useState(false);

  const formRef = useRef(null);
  const product_id = useRef(null);
  const product_title = useRef(null);
  const order_quantity = useRef(null);
  const total_amount = useRef(null);
  const location = useRef(null);
  const address = useRef(null);

  const validInputs = () => {
    let valid = true;

    if (location.current.value.trim() === '') {
      valid = false;
      setLocationError('Please enter your Location');
    }
    if (address.current.value.trim() === '') {
      valid = false;
      setAddressError('Please enter your Address');
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

    const selectedProduct = Products.find((item) => item._id === selectValue);
    setCurrProduct(selectedProduct);

    if (selectedProduct) {
      product_id.current.value = selectedProduct._id;
      total_amount.current.value = selectedProduct.selling_price;
    } else {
      total_amount.current.value = '';
      setTotalAmount('');
    }
  };

  function handleQuantity(e) {
    const quantity = e.target.value;
    const price = currProduct?.selling_price;
    total_amount.current.value = quantity * price;
  }

  const handleSend = async () => {
    if (validInputs()) {
      const url =
        process.env.REACT_APP_SERVER_URL + '/remaining-orders/remaining-order';
      const json = {
        product_id: product_id.current.value,
        product_title: product_title.current.value,
        total_amount: total_amount.current.value,
        quantity: order_quantity.current.value,
        location: location.current.value,
        address: address.current.value,
      };

      try {
        const headers = getHeaders();
        const response = await axios.post(url, json, { headers });
        setRemainingOrders((prev)=>[...prev,response.data.data])
        setMsg('Remaining Order has been saved successfully');
        formRef.current.reset();
      } catch (error) {
        console.log(error);
      }
    }
  };

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
            <Form ref={formRef}>
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

              {/* <p className="error-message text-danger">{dispatchCenterValid}</p> */}
              <Row className="d-flex justify-content-between px-2 mt-3">
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
                <p className="error-message text-danger">{locationError}</p>

                <FormGroup>
                  <FormLabel>Address</FormLabel>
                  <FormControl
                    type="text"
                    ref={address}
                    placeholder={'Enter your address'}
                  />
                </FormGroup>
                <p className="error-message text-danger">{addressError}</p>
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

export default AddORemOrder;
