import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useAuthenticator } from '../../handlers/tokenHandler';
import axios from 'axios';

function ReturnInventory() {
  const [msg, setMsg] = useState('');
  const [currInvoice, setCurrInvoice] = useState(null);
  const { theme, Products, serverURL, inventoryIn } = useAuth();
  const { getHeaders } = useAuthenticator();

  const invoice = useRef();
  const product = useRef();
  const faultyQuantity = useRef();
  const dispatchDate = useRef();
  const comments = useRef();

  const HandleAddFaulty = async (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_SERVER_URL + '/return-inventory/return-inventory';
    const json = {
      invoice: invoice.current.value,
      dispatch_date: dispatchDate.current.value,
      product: product.current.value,
      comment: comments.current.value,
    };
    try {
      const headers = getHeaders();
      const response = await axios.post(url, json, { headers });
      setMsg('Return inventory has been added');
    } catch (error) {
      console.log(error);
    }
  };

  function handleInvoiceChange(e) {
    const filteredInvoice = inventoryIn.find(
      (item) => item.invoice === e.target.value
    );
    setCurrInvoice(filteredInvoice);
  }

  return (
    <>
      <Link to="/return-inventory">Go Back</Link>

      <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
        <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
          <h6
            className="m-0  font-weight-bold text-primary"
            style={{ fontSize: '16px' }}
          >
             Add Reutrn Inventory Record
          </h6>
        </div>
        <form action="">
          <div className="card-body">
            <div className="">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Invoice<sup className="text-danger">*</sup>
                  </label>

                  <select
                    name="Order_id"
                    className={`form-control ${theme ? 'srchdark' : null} `}
                    required
                    ref={invoice}
                    onChange={(e) => {
                      handleInvoiceChange(e);
                    }}
                    value={currInvoice?.invoice || ''}
                  >
                    <option value="" disabled>
                      Select Invoice
                    </option>
                    {inventoryIn.map((item, i) => {
                      return (
                        <option key={i} value={item.invoice}>
                          {item.invoice}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Dispatch Date <sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="date"
                    className={`form-control ${theme ? 'srchdark' : null}`}
                    name="date"
                    required
                    ref={dispatchDate}
                  />
                </div>
                <div className="col-6 mb-3 ">
                  <div className="mb-4">
                    <label htmlFor="">Product</label>

                    <select
                      name="product_id"
                      className={`form-control ${theme ? 'srchdark' : null}`}
                      required
                      ref={product}
                    >
                      <option value="" disabled>
                        Select Product
                      </option>

                      {currInvoice?.products.map((item, i) => {
                        return (
                          <option   key={i} style={{ Width: '600px' }}>
                            {item.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="">
                    Quantity <sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${theme ? 'srchdark' : null}`}
                    required
                    placeholder={`Quantity of faulty products`}
                    ref={faultyQuantity}
                  />
                </div>
              </div>

              <div className="">
                <div className=" mb-3">
                  <label htmlFor="">Comments </label>
                  <textarea
                    name="comments"
                    id=""
                    cols="30"
                    rows="5"
                    className={`form-control ${theme ? 'srchdark' : null}`}
                    ref={comments}
                  ></textarea>
                </div>
              </div>
            </div>
            <p className="text-center text-success">{msg}</p>
            <div className="mt-4 w-100">
              <button
                onClick={(e) => HandleAddFaulty(e)}
                className="btn  btn-primary w-100"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ReturnInventory;
