import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
function AddWarehouse() {



    // Context Api
    const { theme } = useAuth()



    //  useRef
    const supplierName = useRef()
    const location = useRef()


    // Add New inventory
    const HandleAddNewSupplier = (e) => {
        e.preventDefault()


        console.log(
            supplierName.current.value,
            location.current.value,
        );

    }


    return (
        <>
            <Link to='/warehouses'>
                Go Back
            </Link>
            <form action="">
                <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                    <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                        <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>

                            Add New Warehouse
                        </h6>
                    </div>
                    <div className='card-body'>
                        <div className="">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">Warehouse Name <sup className='text-danger'>*</sup></label>
                                    <input
                                        type="text"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        ref={supplierName}
                                        required
                                        name='stock'
                                        placeholder='Warehouse Name'

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



                        <div className='mt-1 w-100'>
                            <button type='submit' onClick={e => HandleAddNewSupplier(e)} className='btn  btn-primary w-100'>
                                Save
                            </button>
                        </div>
                    </div>




                </div>
            </form>
        </>
    )
}

export default AddWarehouse;