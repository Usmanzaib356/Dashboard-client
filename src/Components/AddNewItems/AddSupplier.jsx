import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';
function AddSupplier() {

    // Context Api
    const { setSuppliers, theme } = useAuth()
    const [msg, setmsg] = useState()

    // Use ref
    const supplier_name = useRef()
    const location = useRef()
    const date = useRef()

    // Add New inventory
    const { getHeaders } = useAuthenticator()
    const HandleAddNewSupplier = async (e) => {
        e.preventDefault()

        try {
            const headers = getHeaders()
            const url = process.env.REACT_APP_SERVER_URL + '/supplier/supplier'
            const json = {
                supplier_name: supplier_name.current.value,
                location: location.current.value,
                date: date.current.value
            }
            const response = await axios.post(url, json, { headers })
            console.log(response);
            setSuppliers((prev)=>[...prev,response.data.data])
            setmsg("Supplier has been add successfully")

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Link to='/suppliers'>
                Go Back
            </Link>
            <form action="">
                <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                    <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                        <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>
                            Add New Supplier
                        </h6>
                    </div>
                    <div className='card-body'>
                        <div className="">
                            <div className="mb-4" >
                                <label htmlFor="">Supplier Name  <sup className='text-danger'>*</sup></label>
                                <input name="Dispatch Center Name" className={`form-control ${theme ? 'srchdark' : null}`}
                                    required
                                    type='text'
                                    placeholder=' Supplier Name'
                                    ref={supplier_name}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">date <sup className='text-danger'>*</sup></label>
                                    <input
                                        type="date"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        ref={date}
                                        required
                                        placeholder='date'

                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">Location  <sup className='text-danger'>*</sup></label>
                                    <input
                                        type="text"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        required
                                        name='total_price'
                                        ref={location}
                                        placeholder='Location'
                                    />
                                </div>
                            </div>
                        </div>
                        <p className='text-center text-success'>{msg}</p>
                        <div className='mt-1 w-100'>
                            <button type='submit' className='btn  btn-primary w-100'
                                onClick={(e) => HandleAddNewSupplier(e)}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddSupplier;