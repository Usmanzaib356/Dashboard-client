import React, { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';
function UpdateInventory() {
   
    // Context Api
    const { serverURL, theme } = useAuth()
    const [msg, setmsg] = useState()
    const [Title, setTitle] = useState()
    const [des, setDes] = useState()
    const [color, setColor] = useState(false)

    const { inventoryId } = useParams()

    // Use ref
    const invoice = useRef()
    const date = useRef()
    const supplier = useRef()
    const warehouse = useRef()
    const stock = useRef()
    const total_price = useRef()

    // Add New inventory
    const { getHeaders } = useAuthenticator()
    const UpdateProduct = async (e) => {
        e.preventDefault()

        try {
            const url = process.env.REACT_APP_SERVER_URL + `/inventory/${inventoryId}`
            const json = {
                invoice: invoice.current.value,
                date: date.current.value,
                supplier: supplier.current.value,
                warehouse: warehouse.current.value,
                stock: stock.current.value,
                total_price: total_price.current.value
            }
            const headers = getHeaders()
            const response = await axios.put(url, json, { headers })
            console.log(response);
            setmsg("Update has been successfully")
            setColor(true)

        } catch (error) {
            console.log(error);
            setmsg(error.data.data)
            setColor(false)
        }
    }




    return (
        <>
            <Link to='/inventory'>
                Go Back
            </Link>
            <form action="">
                <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                    <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                        <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>
                            Update Inventory
                        </h6>
                    </div>
                    <div className='card-body'>
                        <div className="">
                            <div className="mb-4" >
                                <label htmlFor="">Date <sup className='text-danger'>*</sup></label>
                                <input name="Dispatch Center Name" className={`form-control ${theme ? 'srchdark' : null}`}
                                    required
                                    type='date'
                                    placeholder=' Title'
                                    ref={date}
                                />
                            </div>
                            <p className='text-danger'>{Title}</p>
                            <div className="mb-4" >
                                <label htmlFor="">invoice  <sup className='text-danger'>*</sup></label>
                                <input name="Dispatch Center Name" className={`form-control ${theme ? 'srchdark' : null}`}
                                    required
                                    type='text'
                                    placeholder='invoice'
                                    ref={invoice}
                                />
                            </div>
                            <p className='text-danger'>{des}</p>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">stock <sup className='text-danger'>*</sup></label>
                                    <input
                                        type="number"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        ref={stock}
                                        required
                                        placeholder='stock'

                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">supplier  <sup className='text-danger'>*</sup></label>
                                    <input
                                        type="text"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        required
                                        name='Price'
                                        ref={supplier}
                                        placeholder='supplier'
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">total_price <sup className='text-danger'>*</sup></label>
                                    <input
                                        type="number"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        ref={total_price}
                                        required
                                        placeholder='total_price'

                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">warehouse  <sup className='text-danger'>*</sup></label>
                                    <input
                                        type="text"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        required
                                        name='total_price'
                                        ref={warehouse}
                                        placeholder='warehouse'
                                    />
                                </div>
                            </div>
                        </div>
                        <p className={`text-center ${color ? 'text-success' : 'text-danger'}`}>{msg}</p>
                        <div className='mt-1 w-100'>
                            <button type='submit' className='btn  btn-primary w-100'
                                onClick={(e) => UpdateProduct(e)}
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

export default UpdateInventory;