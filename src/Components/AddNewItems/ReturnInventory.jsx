import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import { useAuthenticator } from '../../handlers/tokenHandler';
import axios from 'axios';

function ReturnInventory() {

    // Context Api
    const { theme, Products,serverURL } = useAuth()
    const [msg,setMsg]= useState('')


    //  useRef
    const invoice = useRef()
    const dispatchDate = useRef()
    const product = useRef()
    const comments = useRef()

    const {getHeaders} = useAuthenticator()

    // Add New inventory
    const HandleAddFaulty = async (e) => {
        e.preventDefault()
            const url = serverURL + '/return-inventory/return-inventory';
            const json = {
              invoice: invoice.current.value,
              dispatch_date: dispatchDate.current.value,
              product: product.current.value,
              comment: comments.current.value,
            };
            try {
              const headers = getHeaders()
              const response = await axios.post(url, json,{headers});
              setMsg("Return inventory has been added")
              console.log(response);
            } catch (error) {
              console.log(error);
            }
          }
        


    return (
        <>
            <Link to='/return-inventory'>
                Go Back
            </Link>

            <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                    <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>

                        Add Reutrn Inventory Record
                    </h6>
                </div>
                <form action="">
                    <div className='card-body'>
                        <div className="">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">Invoice<sup className='text-danger'>*</sup></label>

                                    <select name="Order_id" className={`form-control ${theme ? 'srchdark' : null}`}
                                        required
                                        ref={invoice}
                                    >
                                        <option value="0" disabled>
                                            Select Invoice

                                        </option>
                                        <option  >
                                            Invoice one

                                        </option>

                                    </select>

                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">Dispatch Date <sup className='text-danger'>*</sup></label>
                                    <input
                                        type="date"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        Name='date'
                                        required
                                        ref={dispatchDate}
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="mb-4" >
                                    <label htmlFor="">Product</label>

                                    <select Name="product_id" className={`form-control ${theme ? 'srchdark' : null}`}
                                        required
                                        ref={product}

                                    >
                                        <option value="0" disabled>
                                            Select Product

                                        </option>

                                        {
                                            Products.map((item, i) => {
                                                return (
                                                    <option key={i}  style={{ Width: '600px' }} >
                                                        {item.title}

                                                    </option>
                                                )
                                            })}

                                    </select>

                                </div>
                            </div>

                            <div className="">
                                <div className=" mb-3">
                                    <label htmlFor="">Comments </label>
                                    <textarea name="comments" id="" cols="30" rows="5"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        ref={comments}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                         <p className='text-center text-success'>{msg}</p>
                        <div className='mt-4 w-100'>
                            <button onClick={e => HandleAddFaulty(e)} className='btn  btn-primary w-100'>
                                Save
                            </button>
                        </div>
                    </div>
                </form>




            </div>
        </>
    )
}

export default ReturnInventory;