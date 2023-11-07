import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"

function ReturnInventory() {
   
  const {theme} = useAuth()
    //  ref

    const order = useRef()
    const dispatchDate = useRef()
    const product = useRef()
    const quantity = useRef()
    const comments = useRef()

    const HandleReturnInventory = () => {

    }

    return (
        <>
            <Link to='/return-inventory'>
                Go Back
            </Link>
            <form action="">
                <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                    <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                        <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>

                            Add Return Inventory Record
                        </h6>
                    </div>
                    <div className='card-body'>
                        <div className="">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">Order #<sup className='text-danger'>*</sup></label>

                                    <select name="Order_id" className={`form-control ${theme ? 'srchdark' : null}`}
                                        required
                                        ref={order}
                                    >
                                        <option value="0" disabled>
                                            Select Order

                                        </option>
                                        <option value="abc" >
                                            Order

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
                            <div className=" row mt-2">
                                <div className="mb-4 col-md-6" >
                                    <label htmlFor="">Product
                                        <sup className='text-danger'>*</sup>
                                    </label>

                                    <select name="product_id" className={`form-control ${theme ? 'srchdark' : null}`}
                                        required
                                        ref={product}

                                    >
                                        <option value="0" disabled>
                                            Select Product

                                        </option>

                                        <option value="okh" style={{ Width: '600px' }} >
                                            Products

                                        </option>
                                        <option value="abc" style={{ Width: '600px' }} >
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptatem
                                        </option>


                                    </select>

                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">Quantity <sup className='text-danger'>*</sup></label>
                                    <input
                                        type="number"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        ref={quantity}
                                        required
                                        name='stock'

                                    />
                                </div>
                            </div>

                            <div className="">
                                <div className=" mb-3">
                                    <label htmlFor="">Comments
                                        <sup className='text-danger'>*</sup>
                                    </label>
                                    <textarea name="comments" id="" cols="30" rows="5"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        ref={comments}

                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className='mt-4 w-100'>
                            <button onClick={e => HandleReturnInventory(e)} className='btn  btn-primary w-100'>
                                Save
                            </button>
                        </div>
                    </div>




                </div>
            </form>
        </>
    )
}

export default ReturnInventory;