import React from 'react'
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';


function InventoryInDetail() {
    const {  theme } = useAuth()
    // const { dispatchUpdateId } = useParams()

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const url = serverURL + `/dispatched-centers/${dispatchUpdateId}`
    //             const response = await axios.get(url)
    //             setDispatchedDetail(response.data.data)
    //             console.log(response.data.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchData();
    // }, [])


    return (

        <>
            <Link to='/inventory'>
                Go Back
            </Link>
            <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
                <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
                    <h6 className="m-0  font-weight-bold text-primary" style={{ fontSize: "16px" }}>
                        InventoryIn Detail
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
                                            inventory
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

                                        <th
                                            className="sorting"
                                            tabIndex="0"
                                            aria-controls="dataTable"
                                            rowSpan="1"
                                            colSpan="1"
                                            aria-label="Email: activate to sort column ascending"
                                            style={{ width: '336.406px' }}
                                        >
                                            Stock
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
                                            Supplier
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
                                            Warehouse
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

                                    </tr>


                                </thead>
                                <tbody className={`${theme ? 'table-dark' : ''}`}>
                                    {/* <tr
                                                            >
                                                                <td className="sorting_1">{dispatchedDetail.center_name}</td>
                                                                <td>{dispatchedDetail.location}</td>
                                                                <td>{dispatchedDetail.courier_service}</td>
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

export default InventoryInDetail;