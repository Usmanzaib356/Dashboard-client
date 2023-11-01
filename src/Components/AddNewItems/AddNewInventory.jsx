import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';

function AddNewInventory() {
  const [style, setStyle] = useState(
    'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
  );

  const changeStyle = () => {
    if (
      style == 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
    ) {
      setStyle(
        'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'
      );
    } else {
      setStyle('navbar-nav bg-gradient-primary sidebar sidebar-dark accordion');
    }
  };
  const changeStyle1 = () => {
    if (
      style == 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
    ) {
      setStyle(
        'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1'
      );
    } else {
      setStyle('navbar-nav bg-gradient-primary sidebar sidebar-dark accordion');
    }
  };

  // Context Api
  const { serverURL, theme, Products } = useAuth();
  const [msg, setmsg] = useState();
  const [color, setColor] = useState(false);
  const [inputProducts, setinputProducts] = useState([]);

  const [productForm, setProductForm] = useState([]);
  const handleInputChange = (index, field, value) => {
    const updatedProductForm = [...productForm];
    updatedProductForm[index][field] = value;
    setProductForm(updatedProductForm);
  };

  function removeProductHandler(item) {
    setProductForm((prevProducts) =>
      prevProducts.filter((_, index) => {
        return index !== item;
      })
    );
  }

  // Use ref
  const invoice = useRef();
  const date = useRef();
  const supplier = useRef();
  const warehouse = useRef();
  const stock = useRef();
  const total_price = useRef();

  const productsData = productForm.map((product) => ({
    id: product.id,
    quantity: product.quantity,
    price: product.price,
  }));
  console.log(JSON.stringify(productsData) + ' products Data 72');

  // Add New Inventory
  const HandleAddNewInventory = async (e) => {
    e.preventDefault();

    try {
      const url = serverURL + '/inventory/inventory';

      const data = {
        invoice: invoice.current.value,
        date: date.current.value,
        supplier: supplier.current.value,
        warehouse: warehouse.current.value,
        stock: stock.current.value,
        total_price: total_price.current.value,
        productsData,
      };

      const response = await axios.post(url, data);
      console.log(response);
      setmsg('Product has been add successfully');
      setColor(true);
    } catch (error) {
      console.log(error);
      setmsg(error.response.data.message);
      setColor(false);
    }
  };

  return (
    <>
      <div>
        <section id="page-top">
          {/*  <!-- Page Wrapper --> */}
          <div id="wrapper">
            {/*  <!-- Sidebar --> */}
            <Sidebar></Sidebar>
            {/*  <!-- End of Sidebar --> */}
            {/*  <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
              {/*  <!-- Main Content --> */}
              <div id="content" className={theme ? 'darkthemecontent' : ''}>
                {/*  <!-- Topbar --> */}
                <Navbar></Navbar>
                {/*  <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}

                {/*   <!-- /.container-fluid --> */}

                <div className="container-fluid">
                  <Link to="/inventory">Go Back</Link>
                  <form action="">
                    <div
                      className={`card shadow mb-4 ${
                        theme ? 'table-dark' : ''
                      }`}
                    >
                      <div
                        className={`card-header py-3 ${
                          theme ? 'table-dark' : ''
                        }`}
                      >
                        <h6
                          className="m-0  font-weight-bold text-primary"
                          style={{ fontSize: '16px' }}
                        >
                          Add New Inventory
                        </h6>
                      </div>
                      <div className="card-body">
                        <div className="">
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="">
                                Invoice <sup className="text-danger">*</sup>
                              </label>
                              <input
                                type="text"
                                name="invoice_no"
                                className={`form-control ${
                                  theme ? 'srchdark' : null
                                }`}
                                placeholder="Invoice"
                                ref={invoice}
                              />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="">
                                Date <sup className="text-danger">*</sup>
                              </label>
                              <input
                                type="date"
                                className={`form-control ${
                                  theme ? 'srchdark' : null
                                }`}
                                name="date"
                                ref={date}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="">
                                Supplier <sup className="text-danger">*</sup>
                              </label>

                              <select
                                name="supplier_id"
                                className={`form-control ${
                                  theme ? 'srchdark' : null
                                }`}
                                ref={supplier}
                              >
                                <option value="0" disabled>
                                  Select Supplier
                                </option>
                                <option value="abc">abc</option>
                              </select>
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="">
                                Warehouse <sup className="text-danger">*</sup>
                              </label>
                              <select
                                name="warehouse_id"
                                className={`form-control ${
                                  theme ? 'srchdark' : null
                                }`}
                                ref={warehouse}
                              >
                                <option value="0" disabled>
                                  Select warehouse
                                </option>
                                <option value="high">high</option>
                              </select>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="">
                                Stock <sup className="text-danger">*</sup>
                              </label>
                              <input
                                type="number"
                                className={`form-control ${
                                  theme ? 'srchdark' : null
                                }`}
                                name="stock"
                                placeholder="Stock"
                                ref={stock}
                              />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="">
                                Total Price <sup className="text-danger">*</sup>
                              </label>
                              <input
                                type="number"
                                className={`form-control ${
                                  theme ? 'srchdark' : null
                                }`}
                                name="total_price"
                                placeholder="Total Price "
                                ref={total_price}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Add Multiple Products */}
                        {/* <AddMultipleProducts /> */}
                        <div className="">
                          <hr />
                          <div
                            className={` card-header py-3 ${
                              theme ? 'table-dark' : ''
                            }`}
                          >
                            <h6
                              className="m-0  font-weight-bold text-primary"
                              style={{ fontSize: '16px' }}
                            >
                              Add Products
                            </h6>
                          </div>
                          <div className="mt-4">
                            {productForm.map((item, i) => {
                              return (
                                <div className="mt-4" key={i}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      removeProductHandler(i);
                                    }}
                                    className={'btn btn-danger'}
                                  >
                                    <li className="fa fa-trash mr-2"></li>
                                    Remove
                                  </button>
                                  <div className="my-4">
                                    <div className="mb-4">
                                      <label htmlFor="">Product Title</label>

                                      <select
                                        name="title"
                                        className={`form-control ${
                                          theme ? 'srchdark' : null
                                        }`}
                                        required
                                        value={item.title}
                                        onChange={(e) =>
                                          handleInputChange(
                                            i,
                                            'id',
                                            e.target.value
                                          )
                                        }
                                      >
                                        <option
                                          className=" bg-blue-200"
                                          value=""
                                          disabled
                                        >
                                          Select a product
                                        </option>
                                        {Products.map((option, index) => {
                                          return (
                                            <option
                                              key={index}
                                              value={option._id}
                                            >
                                              {option.title}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6 mb-3">
                                      <label htmlFor="">Quantity </label>
                                      <input
                                        type="number"
                                        className={`form-control ${
                                          theme ? 'srchdark' : null
                                        }`}
                                        value={item.quantity}
                                        onChange={(e) =>
                                          handleInputChange(
                                            i,
                                            'quantity',
                                            e.target.value
                                          )
                                        }
                                        name="quantity"
                                      />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                      <label htmlFor=""> Price </label>
                                      <input
                                        type="number"
                                        className={`form-control ${
                                          theme ? 'srchdark' : null
                                        }`}
                                        value={item.price}
                                        onChange={(e) =>
                                          handleInputChange(
                                            i,
                                            'price',
                                            e.target.value
                                          )
                                        }
                                        name="price"
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })}

                            <button
                              type="button"
                              onClick={() =>
                                setProductForm([
                                  ...productForm,
                                  {
                                    id: '',

                                    quantity: '',
                                    price: '',
                                  },
                                ])
                              }
                              className="btn btn-warning"
                            >
                              Add Products{' '}
                            </button>
                            <div className="mt-4 w-100">
                              <button
                                type="submit"
                                onClick={(e) => HandleAddNewInventory(e)}
                                className="btn  btn-primary w-100"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/*   <!-- End of Main Content -->

                                <!-- Footer --> */}
              <Footer></Footer>
              {/* <!-- End of Footer --> */}
            </div>
            {/*  <!-- End of Content Wrapper --> */}
          </div>
          {/*  <!-- End of Page Wrapper -->

                        <!-- Scroll to Top Button--> */}
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
          </a>
        </section>
      </div>
    </>
  );
}

export default AddNewInventory;
