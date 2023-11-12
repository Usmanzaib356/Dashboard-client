import React, { useRef, useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';

function UpdateDispatchOrder() {
    const { serverURL, theme, dispatchOrder,
         } = useAuth()
    const [msg, setmsg] = useState()
    const [dispatchedDetail, setDispatchedDetail] = useState({})
    const { dispatchUpdateOrderId } = useParams()

    // Use ref
    const orderNumber = useRef()
    const DispatchCenter = useRef()
    const dispatchdate = useRef()
    const totalAmount = useRef()

    const { getHeaders } = useAuthenticator()
    const updateHandle = async (e) => {
        e.preventDefault()
        const url = process.env.REACT_APP_SERVER_URL + `/dispatched-orders/${dispatchUpdateOrderId}`
        const json = {
            order_number: orderNumber.current.value,
            dispatch_center: DispatchCenter.current.value,
            dispatch_date: dispatchdate.current.value,
            total_amount: totalAmount.current.value
        }
        try {
            const headers = getHeaders()
            const response = await axios.put(url, json, { headers })
            console.log(response);
            setmsg("Update has been successfully")
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        const getOneItem = dispatchOrder.filter(item => item._id == dispatchUpdateOrderId)
        getOneItem.map((item) => {
            return (
                setDispatchedDetail(item)
            )
        })
    }, [])

    return (

        <>
            <Link to='/dispatched-orders'>
                Go Back
            </Link>
            <form action="">
                <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                    <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                        <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>
                            Update Center
                        </h6>
                    </div>
                    <div className='card-body'>
                        <div className="">
                            <div className="mb-4" >
                                <label htmlFor="">Order Number</label>
                                <input name="Dispatch Center Name" className={`form-control ${theme ? 'srchdark' : null}`}
                                    required
                                    type='text'
                                    placeholder={dispatchedDetail.order_number}
                                    ref={orderNumber}
                                />
                            </div>
                            <div className="mb-4" >
                                <label htmlFor="">Dispatch Center </label>
                                <input name="Dispatch Center Name" className={`form-control ${theme ? 'srchdark' : null}`}
                                    required
                                    type='text'
                                    placeholder={dispatchedDetail.dispatch_center}
                                    ref={DispatchCenter}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">date <sup className='text-danger'>*</sup></label>
                                    <input
                                        type="date"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        ref={dispatchdate}
                                        required
                                        placeholder={dispatchedDetail.dispatch_date}

                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">Total Amount  <sup className='text-danger'>*</sup></label>
                                    <input
                                        type="number"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        required
                                        name='total_price'
                                        ref={totalAmount}
                                        placeholder={dispatchedDetail.total_amount}
                                    />
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-success'>{msg}</p>
                        <div className='mt-1 w-100'>
                            <button type='submit' className='btn  btn-primary w-100'
                                onClick={(e) => updateHandle(e)}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default UpdateDispatchOrder;