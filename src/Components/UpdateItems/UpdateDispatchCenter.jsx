import React, { useEffect, useRef, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';

function UpdateDispatchCenter() {
    const { serverURL, theme, dispatchCenter } = useAuth()
    const [msg, setmsg] = useState()
    const [dispatchedDetail, setDispatchedDetail] = useState({})
    const { dispatchUpdateId } = useParams()


    // Use ref
    const centerName = useRef()
    const location = useRef()
    const courierService = useRef()




    const { getHeaders } = useAuthenticator()
    const updateHandle = async (e) => {
        e.preventDefault()
        const url = process.env.REACT_APP_SERVER_URL + `/dispatched-centers/${dispatchUpdateId}`
        const json = {
            center_name: centerName.current.value,
            location: location.current.value,
            courier_service: courierService.current.value
        }
        try {
            const headers = getHeaders()
            await axios.put(url, json, { headers })
            setmsg("Update has been successfully")
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const getOneItem = dispatchCenter.filter(item => item._id == dispatchUpdateId)
        getOneItem.map((item) => {
            return (
                setDispatchedDetail(item)
            )
        })
    }, [])


    return (

        <>
            <Link to='/dispatched-centers'>
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
                                <label htmlFor="">Dispatch Center Name</label>
                                <input name="Dispatch Center Name" className={`form-control ${theme ? 'srchdark' : null}`}
                                    required
                                    placeholder={dispatchedDetail.center_name}
                                    ref={centerName}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">Location <sup className='text-danger'>*</sup></label>
                                    <input
                                        type="text"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        ref={location}
                                        required
                                        name='stock'
                                        placeholder={dispatchedDetail.location}

                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="">Courier Service  <sup className='text-danger'>*</sup></label>
                                    <input
                                        type="text"
                                        className={`form-control ${theme ? 'srchdark' : null}`}
                                        required
                                        name='total_price'
                                        ref={courierService}

                                        placeholder={dispatchedDetail.courier_service}
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

export default UpdateDispatchCenter