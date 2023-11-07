import React, { useEffect, useState } from 'react'
import useAuth from "../hooks/useAuth"
import axios from 'axios';
import Cookies from 'js-cookie';
function Team() {
    // All users Get request
    const [users, setUsers] = useState([])
    const { Server_Url,theme } = useAuth()


    useEffect(() => {
        const url = Server_Url + '/allusers';

        // Axios get
      const token = Cookies.get("Token")
        axios.get(url,{headers: {
                x_access_token: token  
              }})
            .then((res) => {
                console.log(res);
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [Server_Url]);

    function dlt(email) {
        const url = Server_Url + '/dltuser';
        const json = { email: email };

        axios
            .post(url, json)
            .then((res) => {
                console.log(res);
                setUsers(prevUsers => prevUsers.filter(user => user.email !== email));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
          
                                    <div className='text-center'id={theme ? 'productsText' : ''} >
                                        <h2>Marketing Team</h2>
                                    </div>
                                    <br />
                                    <div className="pb-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className={theme ? "col-lg-12 p-5 teamdark rounded shadow-sm mb-5": "col-lg-12 p-5 bg-white rounded shadow-sm mb-5"}>
                                                    <div className="table-responsive" style={{ overflowY: "auto", maxHeight: "500px" }}>
                                                        <table className="table">
                                                            <thead className="sticky-top bg-light">
                                                                <tr>
                                                                    <th scope="col" className={theme ? "border-0 tablehead" : "border-0 bg-white"}>
                                                                        <div className="p-2 px-3 text-uppercase">Name</div>
                                                                    </th>
                                                                    <th scope="col" className={theme ? "border-0 tablehead" : "border-0 bg-white"}>
                                                                        <div className="py-2 text-uppercase">Email</div>
                                                                    </th>


                                                                    <th scope="col" className={theme ? "border-0 tablehead" : "border-0 bg-white"}>
                                                                        <div className="py-2 text-uppercase">Remove</div>
                                                                    </th>
                                                                </tr>

                                                            </thead>
                                                <tbody>
                                                    {users.map((item) => {
                                                        return (
                                                            <tr key={item._id}>
                                                                <th scope="row" className="border-0">
                                                                    <div className="p-2">
                                                                        <div className="ml-3 d-inline-block align-middle">
                                                                            <h5 className="mb-0 mt-2"> <p  className={theme ? "text-light d-inline-block align-middle":"text-dark d-inline-block align-middle"}>{item.name}</p></h5>
                                                                        </div>
                                                                    </div>
                                                                </th>
                                                                <td className={theme ? "border-0 align-middle text-light": "border-0 align-middle"}><strong>{item.email}</strong></td>
                                                                <td className="border-0 align-middle"><a href="#" onClick={() => dlt(item.email)} className="text-danger"><i className="fa fa-trash"></i></a></td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>





        </>
    )
}

export default Team