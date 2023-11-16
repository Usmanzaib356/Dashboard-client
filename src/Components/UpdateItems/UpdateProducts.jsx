import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { useAuthenticator } from '../../handlers/tokenHandler';
function UpdateProduct() {
  // Context Api
  const { theme, Products } = useAuth();
  const [msg, setmsg] = useState();
  const [Title, setTitle] = useState();
  const [des, setDes] = useState();
  const [color, setColor] = useState(false);

  const [productTitle, setProductTitle] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [productQuantity, setProductQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [productSellingPrice, setProductSellingPrice] = useState(0);
  const [productImage, setProductImage] = useState('');

  const { productId } = useParams();

  // Use ref
  const title = useRef();
  const description = useRef();
  const quantity = useRef();
  const price = useRef();
  const sellingPrice = useRef();
  const Image = useRef();

  // Add New inventory
  const { getHeaders } = useAuthenticator();
  const UpdateProduct = async (e) => {
    e.preventDefault();

    if (validateInputs()) {
      try {
        const headers = getHeaders();
        const url = process.env.REACT_APP_SERVER_URL + `/products/${productId}`;
        const json = {
          title: title.current.value,
          desc: description.current.value,
          quantity: quantity.current.value,
          price: price.current.value,
          selling_price: sellingPrice.current.value,
          imgURL: Image.current.value,
        };
        const response = await axios.put(url, json, { headers });
        console.log(response);
        setmsg('Update has been successfully');
        setColor(true);
      } catch (error) {
        console.log(error);
        setmsg(error.data.data);
        setColor(false);
      }
    }
  };

  const validateInputs = () => {
    let valid = true;
    setTitle('');
    setDes('');

    const validTitle = title.current.value.trim();
    const validDes = description.current.value.trim();

    if (validTitle.length < 5 || validTitle.length > 50) {
      setTitle('Title must be between 5 and 50 characters.');
      valid = false;
    }

    if (validDes.length < 10 || validDes.length > 50) {
      setDes('Description must be between 10 and 50 characters.');
      valid = false;
    }

    return valid;
  };

  //   useEffect(() => {
  //     const getOneItem = Products.filter((item) => item._id == productId);
  //     getOneItem.map((item) => {
  //       return setcurrProduct(item);
  //     });
  //   }, []);

  useEffect(() => {
    const foundProduct = Products.find((item) => {
      return item._id === productId;
    });

    setProductTitle(foundProduct.title);
    setProductDesc(foundProduct.desc);
    setProductQuantity(foundProduct.quantity);
    setProductPrice(foundProduct.price);
    setProductSellingPrice(foundProduct.selling_price);
    setProductImage(foundProduct.imgURL);
  }, []);

  return (
    <>
      <Link to="/products">Go Back</Link>
      <form action="">
        <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
          <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
            <h6
              className="m-0  font-weight-bold text-primary"
              style={{ fontSize: '16px' }}
            >
              Update Product
            </h6>
          </div>
          <div className="card-body">
            <div className="">
              <div className="mb-4">
                <label htmlFor="">
                  Title <sup className="text-danger">*</sup>
                </label>
                <input
                  name="Dispatch Center Name"
                  className={`form-control ${theme ? 'srchdark' : null}`}
                  required
                  type="text"
                  value={productTitle}
                  onChange={(e) => {
                    setProductTitle(e.target.value);
                  }}
                  ref={title}
                />
              </div>
              <p className="text-danger">{Title}</p>
              <div className="mb-4">
                <label htmlFor="">
                  Description <sup className="text-danger">*</sup>
                </label>
                <input
                  name="Dispatch Center Name"
                  className={`form-control ${theme ? 'srchdark' : null}`}
                  required
                  type="text"
                  value={productDesc}
                  onChange={(e) => {
                    setProductDesc(e.target.value);
                  }}
                  ref={description}
                />
              </div>
              <p className="text-danger">{des}</p>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Quantity <sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="number"
                    className={`form-control ${theme ? 'srchdark' : null}`}
                    ref={quantity}
                    required
                    value={productQuantity}
                    onChange={(e) => {
                      setProductQuantity(e.target.value);
                    }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Price <sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="number"
                    className={`form-control ${theme ? 'srchdark' : null}`}
                    required
                    name="Price"
                    ref={price}
                    value={productPrice}
                    onChange={(e) => {
                      setProductPrice(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Selling Price <sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="number"
                    className={`form-control ${theme ? 'srchdark' : null}`}
                    ref={sellingPrice}
                    required
                    value={productSellingPrice}
                    onChange={(e) => {
                      setProductSellingPrice(e.target.value);
                    }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="">
                    Image <sup className="text-danger">*</sup>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${theme ? 'srchdark' : null}`}
                    required
                    name="total_price"
                    ref={Image}
                    value={productImage}
                    onChange={(e) => {
                      setProductImage(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <p
              className={`text-center ${
                color ? 'text-success' : 'text-danger'
              }`}
            >
              {msg}
            </p>
            <div className="mt-1 w-100">
              <button
                type="submit"
                className="btn  btn-primary w-100"
                onClick={(e) => UpdateProduct(e)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default UpdateProduct;
