import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import CommonTable from './CommonTable';
import { Button } from 'react-bootstrap';
import { useAuthenticator } from '../handlers/tokenHandler';
function Products() {
  const { setProducts, Products } = useAuth();

  const { getHeaders } = useAuthenticator();


   // Delete Center
  const handleDelete = async (e, productId) => {
    e.preventDefault();
    try {
      const headers = getHeaders();
      const url = process.env.REACT_APP_SERVER_URL + `/products/${productId}`;
      await axios.delete(url, { headers });
      const updatedProducts = Products.filter((product) => {
        return product._id !== productId;
      });
      setProducts(updatedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mb-3 d-flex justify-content-end">
        <Button variant="primary">
          <Link to="/add-products" className="text-light text-decoration-none">
            Create New
          </Link>
        </Button>
      </div>
      <CommonTable products data={Products} handleDelete={handleDelete} />
    </>
  );
}

export default Products;
