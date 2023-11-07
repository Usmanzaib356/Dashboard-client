import React from 'react';
import useAuth from '../hooks/useAuth';
import CommonTable from './CommonTable';
import AddUser from './modal/AddUser';
import { useAuthenticator } from '../handlers/tokenHandler';
import axios from 'axios';
function ViewUsers() {
 
  // Context Api
  const {  serverURL, usersGet, setUsersGet } = useAuth();

  // Delete Center
  const { getHeaders } = useAuthenticator()
  const handleDelete = async (viewUsersDelete) => {
    try {
      const url = serverURL + `/user/${viewUsersDelete}`
      const headers = getHeaders()
      const respone = await axios.delete(url, { headers })
      console.log(respone);
      const UpdateItem = usersGet.filter(item => item._id !== viewUsersDelete)
      setUsersGet(UpdateItem)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <AddUser></AddUser>
      <CommonTable
        viewUsersDelete={handleDelete}
        viewUsers
        data={usersGet} />
    </>
  );
}

export default ViewUsers;
