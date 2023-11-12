import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';

function Productdetail() {
    const { serverURL, theme } = useAuth()
    const [productDetail, setProductDetail] = useState({})
    const { productId } = useParams()
    const { getHeaders } = useAuthenticator()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = getHeaders()
                const url = process.env.REACT_APP_SERVER_URL + `/products/${productId}`
                const response = await axios.get(url, { headers })
                setProductDetail(response.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])


    return (

        <>
            <Link to='/products'>
                Go Back
            </Link>

            <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                    <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>
                        Product Detail
                    </h6>
                </div>
                <div className='card-body'>
                    <div className='table-responsive'>

                        <div
                            id="dataTable_wrapper"
                            className="dataTables_wrapper dt-bootstrap4 no-footer"
                        >

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
                                                    Title
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
                                                    Description
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
                                                    Quantity
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
                                                    Price
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
                                                    Selling Price
                                                </th>
                                            </tr>


                                        </thead>
                                        <tbody className={`${theme ? 'table-dark' : ''}`}>
                                            <tr
                                            >
                                                <td className="sorting_1">{productDetail.title}</td>
                                                <td>{productDetail.desc}</td>
                                                <td>{productDetail.quantity}</td>
                                                <td>{productDetail.price}</td>
                                                <td>{productDetail.selling_price
                                                }</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productdetail;