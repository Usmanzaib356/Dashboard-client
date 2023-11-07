import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"

function AddFaulty() {

    // Context Api
    const { theme } = useAuth()


    //  useRef
    const order = useRef()
    const dispatchDate = useRef()
    const product = useRef()
    const comments = useRef()



    // Add New inventory
    const HandleAddFaulty = (e) => {
        e.preventDefault()

        console.log(
            order.current.value,
            dispatchDate.current.value,
            product.current.value,
            comments.current.value,
        );

    }

    return (
        <>
            <Link to='/faulty-inventory'>
                Go Back
            </Link>

            <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                    <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>

                        Add Faulty Inventory Record
                    </h6>
                </div>
                <form action="">
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
                            <div className="mt-2">
                                <div className="mb-4" >
                                    <label htmlFor="">Product</label>

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

export default AddFaulty;