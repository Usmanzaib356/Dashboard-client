import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';

function SupplierDetail() {
    const { serverURL, theme } = useAuth()
    const [ setSupllierDetail] = useState({})
    const { supplierId } = useParams()

    const { getHeaders } = useAuthenticator()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = getHeaders()
                const url = process.env.REACT_APP_SERVER_URL + `/supplier/${supplierId}`
                const response = await axios.get(url, { headers })
                setSupllierDetail(response)
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])


    return (

        <>
            <Link to='/suppliers'>
                Go Back
            </Link>
            <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                    <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>
                        Supplier Detail
                    </h6>
                </div>
                <div className='card-body'>
                    <div className={`row ${theme ? 'table-dark' : ''}`}>
                        <div className="col-sm-12">
                            <table
                                className="table table-bordered users dataTable no-footer"
                                id="dataTable"
                                width="100%"
                                cellSpacing="0"
                                role="grid"
                                aria-describedby="dataTable_info"
                                style={{ width: '100%' }}
                            >
                                <thead
                                    className={` ${theme ? 'table-dark' : ''}`}
                                >
                                    <tr role="row">
                                        <th
                                            className="sorting sorting_asc"
                                            tabIndex="0"
                                            aria-controls="dataTable"
                                            rowSpan="1"
                                            colSpan="1"
                                            aria-sort="ascending"
                                            aria-label="Name: activate to sort column descending"
                                            style={{ width: '177.766px' }}
                                        >
                                            Supplier Name
                                        </th>
                                        <th
                                            className="sorting"
                                            tabIndex="0"
                                            aria-controls="dataTable"
                                            rowSpan="1"
                                            colSpan="1"
                                            aria-label="Email: activate to sort column ascending"
                                            style={{ width: '336.406px' }}
                                        >
                                            Location
                                        </th>

                                        <th
                                            className="sorting"
                                            tabIndex="0"
                                            aria-controls="dataTable"
                                            rowSpan="1"
                                            colSpan="1"
                                            aria-label="Email: activate to sort column ascending"
                                            style={{ width: '336.406px' }}
                                        >
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className={`${theme ? 'table-dark' : ''}`}>
                                    {/* <tr
                                                            >
                                                                <td className="sorting_1">{supllierDetail.supplier_name}</td>
                                                                <td>{supllierDetail.location}</td>
                                                                <td>{supllierDetail.date}</td>
                                                            </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default SupplierDetail;