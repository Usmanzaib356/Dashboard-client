import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

function CommonTable(props) {
  const {
    viewUsers,
    usersRoles,
    products,
    inventoryIn,
    overallInventory,
    faultyInventoryMechanism,
    returnInventoryMechanism,
    inventoryStatus,
    suppliers,
    warehouses,
    data,
    storesDummyData,
    storeDelete,
    DispatchedCenter,
    DispatchedCenterdelete,
    allOrders,
    dispatchedOrders,
    dispatchedOrdersDelete,
    remainingOrders,
  } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter the viewUser rows based on the search term
  const filteredRows = data.filter(
    (row, i) =>
      (row.name && row.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.email &&
        row.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.role && row.role.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.roleId &&
        row.roleId
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.status &&
        row.status.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.sku && row.sku.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.invoice &&
        row.invoice
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.data && row.data.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.stock &&
        row.stock
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.price &&
        row.price
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.product &&
        row.product.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.cost_price &&
        row.cost_price
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.supplier &&
        row.supplier.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.total_stock &&
        row.total_stock
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.total_cost &&
        row.total_cost
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.store_name &&
        row.store_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.supplier_name &&
        row.supplier_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.warehouse_name &&
        row.warehouse_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.CenterName &&
        row.CenterName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.courierService &&
        row.courierService.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.location &&
        row.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.date && row.date.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.order_number &&
        row.order_number
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.dispatch_center &&
        row.dispatch_center.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.order_dispatch_date &&
        row.order_dispatch_date
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.total_amount &&
        row.total_amount
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredRows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedRows = filteredRows.slice(startIndex, endIndex);
  
  const startIndexForEntries = (currentPage - 1) * itemsPerPage + 1;
  const endIndexForEntries = Math.min(
    startIndex + itemsPerPage,
    filteredRows.length
  );
  const totalEntries = filteredRows.length;

  const { 
          theme, 
        } = useAuth()

  return (
    <div className={`card shadow mb-4 ${theme ? 'table-dark' : ''}`}>
      <div className={`card-header py-3 ${theme ? 'table-dark' : ''}`}>
        <h6
          className="m-0  font-weight-bold text-primary"
          style={{ fontSize: '26px' }}
        >
          {viewUsers
            ? 'Users'
            : usersRoles
            ? 'User Roles'
            : products
            ? 'Products'
            : inventoryIn
            ? 'inventory In'
            : overallInventory
            ? 'OverAll Inventory'
            : faultyInventoryMechanism
            ? 'Faulty Inventory Mechanism'
            : returnInventoryMechanism
            ? 'Return Inventory Mechanism'
            : inventoryStatus
            ? 'Inventory Status'
            : suppliers
            ? 'Suppliers'
            : storesDummyData
            ? 'Stores'
            : warehouses
            ? 'Warehouses'
            : allOrders
            ? 'All Orders'
            : DispatchedCenter
            ? 'Dispatched Centers'
            : dispatchedOrders
            ? 'Dispatched Orders'
            : remainingOrders
            ? 'Remaining Orders'
            : null}
        </h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <div
            id="dataTable_wrapper"
            className="dataTables_wrapper dt-bootstrap4 no-footer"
          >
            {/* Search Bar */}
            <div className={`row ${theme ? 'table-dark' : ''}`}>
              <div
                className={`col-sm-12 col-md-6 ${theme ? 'table-dark' : ''}`}
              >
                <div
                  className={`dataTables_length ${theme ? 'table-dark' : ''}`}
                  id="dataTable_length"
                >
                  <label className={`${theme ? 'table-dark' : ''}`}>
                    Show{' '}
                    <select
                      name="dataTable_length"
                      aria-controls="dataTable"
                      onChange={(e) => {
                        setItemsPerPage(e.target.value);
                      }}
                      className={`custom-select custom-select-sm form-control form-control-sm ${
                        theme ? 'table-dark' : ''
                      }`}
                    >
                      <option
                        value={5}
                        className={`${theme ? 'table-dark' : ''}`}
                      >
                        5
                      </option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={25}>25</option>
                    </select>{' '}
                    entries
                  </label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div id="dataTable_filter" className="dataTables_filter">
                  <label>
                    Search:
                    <input
                      type="search"
                      className={`form-control form-control-sm ${
                        theme ? 'table-dark' : ''
                      }`}
                      placeholder=""
                      aria-controls="dataTable"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Table Start */}
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
                  {/* Head of Table */}
                  <thead className={` ${theme ? 'table-dark' : ''}`}>
                    {viewUsers && (
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
                          Name
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
                          Email
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Role: activate to sort column ascending"
                          style={{ width: '89.5625px' }}
                        >
                          Role
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Status: activate to sort column ascending"
                          style={{ width: '126.328px' }}
                        >
                          Status
                        </th>
                        <th
                          className="sorting text-center"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: '179.938px' }}
                        >
                          Action
                        </th>
                      </tr>
                    )}
                    {usersRoles && (
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
                          Role ID
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="3"
                          aria-label="Role: activate to sort column ascending"
                          style={{ width: '89.5625px' }}
                        >
                          Role
                        </th>
                        <th
                          className="sorting"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="3"
                          aria-label="Status: activate to sort column ascending"
                          style={{ width: '126.328px' }}
                        >
                          Status
                        </th>
                      </tr>
                    )}

                    {products && (
                      <tr role="row">
                        <th
                          className="sorting sorting_asc w-75"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Product
                        </th>
                        <th
                          className="sorting w-25 text-center"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Role: activate to sort column ascending"
                        >
                          Action
                        </th>
                      </tr>
                    )}

                    {inventoryIn && (
                      <tr role="row">
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Invoice
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Data
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Stock
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Price
                        </th>
                        <th
                          className="sorting  text-center"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Role: activate to sort column ascending"
                        >
                          Action
                        </th>
                      </tr>
                    )}
                    {overallInventory && (
                      <tr role="row">
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          S.No
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Product
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Cost Price
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Supplier
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Stock
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Total Stock
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Total Cost
                        </th>
                      </tr>
                    )}
                    {faultyInventoryMechanism && (
                      <tr role="row">
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Order #:
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Product
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Dispatch date
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Supplier
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Comments
                        </th>
                      </tr>
                    )}
                    {returnInventoryMechanism && (
                      <tr role="row">
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Order #:
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Product
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Dispatch date
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Supplier
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Comments
                        </th>
                      </tr>
                    )}
                    {inventoryStatus && (
                      <tr role="row">
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Status ID
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Status
                        </th>
                        <th
                          className="sorting sorting_asc text-center  "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Action
                        </th>
                      </tr>
                    )}
                    {suppliers && (
                      <tr role="row">
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Supplier Name
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Location
                        </th>
                        <th
                          className="sorting sorting_asc text-center  "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Date
                        </th>
                        <th
                          className="sorting sorting_asc text-center  "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Action
                        </th>
                      </tr>
                    )}
                    {warehouses && (
                      <tr role="row">
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Warehouse Name
                        </th>
                        <th
                          className="sorting sorting_asc "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Location
                        </th>
                        <th
                          className="sorting sorting_asc text-center  "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Date
                        </th>
                        <th
                          className="sorting sorting_asc text-center  "
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Action
                        </th>
                      </tr>
                    )}

                    {storesDummyData && (
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
                          Store Name
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
                          Status
                        </th>

                        <th
                          className="sorting text-center"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: '179.938px' }}
                        >
                          Action
                        </th>
                      </tr>
                    )}

                    {DispatchedCenter && (
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
                          Center Name
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
                          Courier Service
                        </th>

                        <th
                          className="sorting text-center"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: '179.938px' }}
                        >
                          Action
                        </th>
                      </tr>
                    )}

                    {allOrders && (
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
                          Center Name
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
                          Courier Service
                        </th>

                        <th
                          className="sorting text-center"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: '179.938px' }}
                        >
                          Action
                        </th>
                      </tr>
                    )}

                    {remainingOrders && (
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
                          Center Name
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
                          Courier Service
                        </th>

                        <th
                          className="sorting text-center"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: '179.938px' }}
                        >
                          Action
                        </th>
                      </tr>
                    )}
                    {dispatchedOrders && (
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
                          Order #:
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
                          Dispatch Center
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
                          Order Dispatch date
                        </th>

                        <th
                          className="sorting text-center"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: '179.938px' }}
                        >
                          Total Amount
                        </th>
                        <th
                          className="sorting text-center"
                          tabIndex="0"
                          aria-controls="dataTable"
                          rowSpan="1"
                          colSpan="1"
                          aria-label="Action: activate to sort column ascending"
                          style={{ width: '179.938px' }}
                        >
                          Action
                        </th>
                      </tr>
                    )}
                  </thead>

                  {/* Body of Table */}
                       
                  {viewUsers && (
                    
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even' : 'odd'}
                          key={index}
                        >
                          <td className="sorting_1">{row.name}</td>
                          <td>{row.email}</td>
                          <td>{row.role}</td>

                          <td
                            className={`${
                              row.status === 'Active'
                                ? 'text-success'
                                : 'text-danger '
                            }`}
                          >
                            {row.status}
                          </td>
                          <td className="text-center">
                            <a
                              href={`/change-password/${row.id}`}
                              className="btn btn-warning btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Change Password"
                            >
                              <i className="fa fa-key"></i>
                            </a>

                            <a
                              href={`/edit-users/${row.id}`}
                              className="mx-2 btn btn-success btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </a>

                            <input type="hidden" name="id" value="1" />

                            <button
                              className="btn btn-danger btn-sm  delete"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}

                  {usersRoles && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even' : 'odd'}
                          key={index}
                        >
                          <td className="sorting_1 ">{row.roleId}</td>
                          <td colSpan="3">{row.role}</td>
                          <td
                            colSpan="3"
                            className={`${
                              row.status === 'Active'
                                ? 'text-success'
                                : 'text-danger '
                            }`}
                          >
                            {row.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}

                  {products && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even     ' : 'odd '}
                          key={index}
                        >
                          <td className="sorting_1 ">
                            <div className="d-flex">
                              <div>{row.image} </div>
                              <div className="mx-3 flex-fill ">{row.title} </div>
                              <div
                                className="font-weight-bold text-right  my-auto "
                                style={{ width: '120px' }}
                              >
                                SKU: {row.sku}{' '}
                              </div>
                            </div>
                          </td>

                          <td className="text-center   align-middle ">
                            <div className="">
                              <a
                                href={`/view-products/${row.id}`}
                                className="btn btn-primary btn-sm "
                                type="button"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
                              </a>

                              <a
                                href={`/edit-products/${row.id}`}
                                className=" mx-2 btn btn-success btn-sm "
                                type="button"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </a>

                              <input type="hidden" name="id" id="" value="37" />
                              <input type="hidden" name="id" id="" value="37" />

                              <button
                                className="btn btn-danger btn-sm  delete"
                                type="button"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete"
                              >
                                <i className="fa fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}

                  {inventoryIn && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even     ' : 'odd '}
                          key={index}
                        >
                          <td className="">{row.invoice}</td>
                          <td className="">{row.data}</td>
                          <td className="">{row.stock}</td>
                          <td className="">{row.price}</td>
                          <td className="text-center">
                            <a
                              href={`/view-products/${row.id}`}
                              className="btn btn-primary btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="View"
                            >
                              <i className="fa fa-eye"></i>
                            </a>
                            <a
                              href={`/edit-products/${row.id}`}
                              className=" mx-2 btn btn-success btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </a>
                            <input type="hidden" name="id" id="" value="37" />
                            <button
                              className="btn btn-danger btn-sm  delete"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}

                  {overallInventory && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even     ' : 'odd '}
                          key={index}
                        >
                          <td className="sorting_1 ">
                            {index + 1 + (currentPage - 1) * itemsPerPage}
                          </td>
                          <td className="sorting_1 ">{row.product}</td>
                          <td className="sorting_1 ">{row.cost_price}</td>
                          <td className="sorting_1 ">{row.supplier}</td>
                          <td className="sorting_1 ">{row.stock}</td>
                          <td className="sorting_1 ">{row.total_stock}</td>
                          <td className="sorting_1 ">{row.total_cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  )}

                  {faultyInventoryMechanism && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even     ' : 'odd '}
                          key={index}
                        >
                          <td className="sorting_1 ">{row.orderNo}</td>
                          <td className="sorting_1 ">{row.product}</td>
                          <td className="sorting_1 ">{row.dispatch_date}</td>
                          <td className="sorting_1 ">{row.supplier}</td>
                          <td className="sorting_1 ">
                            {row.comments[0]}
                            {row.comments[1]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                  {returnInventoryMechanism && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even     ' : 'odd '}
                          key={index}
                        >
                          <td className="sorting_1 ">{row.orderNo}</td>
                          <td className="sorting_1 ">{row.product}</td>
                          <td className="sorting_1 ">{row.dispatch_date}</td>
                          <td className="sorting_1 ">{row.supplier}</td>
                          <td className="sorting_1 ">
                            {row.comments[0]}
                            {row.comments[1]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                  {inventoryStatus && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even     ' : 'odd '}
                          key={index}
                        >
                          <td className="sorting_1 ">{row.status_id}</td>
                          <td className="sorting_1 ">{row.status}</td>
                          <td className="text-center">
                            <a
                              href={`/edit-users/${row.id}`}
                              className="mx-2 btn btn-success btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </a>
                            <input type="hidden" name="id" value="1" />
                            <button
                              className="btn btn-danger btn-sm  delete"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                  {suppliers && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even     ' : 'odd '}
                          key={index}
                        >
                          <td className="sorting_1 ">{row.supplier_name}</td>
                          <td className="sorting_1 ">{row.location}</td>
                          <td className="sorting_1 ">{row.date}</td>
                          <td className="text-center">
                            <a
                              href={`/edit-users/${row.id}`}
                              className="mx-2 btn btn-success btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </a>
                            <input type="hidden" name="id" value="1" />
                            <button
                              className="btn btn-danger btn-sm  delete"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                  {warehouses && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even     ' : 'odd '}
                          key={index}
                        >
                          <td className="sorting_1 ">{row.warehouse_name}</td>
                          <td className="sorting_1 ">{row.location}</td>
                          <td className="sorting_1 ">{row.date}</td>
                          <td className="text-center">
                            <a
                              href={`/edit-users/${row.id}`}
                              className="mx-2 btn btn-success btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </a>
                            <input type="hidden" name="id" value="1" />
                            <button
                              className="btn btn-danger btn-sm  delete"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                  {storesDummyData && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even' : 'odd'}
                          key={index}
                        >
                          <td className="sorting_1">{row.store_name}</td>
                          <td
                            className={`${
                              row.status === 'Active'
                                ? 'text-success'
                                : 'text-danger '
                            }`}
                          >
                            {row.status}
                          </td>
                          <td className="text-center">
                            <Link
                              to={`/update-store/${row._id}`}
                              className="mx-2 btn btn-success btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </Link>

                            <input type="hidden" name="id" value="1" />

                            <button
                              className="btn btn-danger btn-sm  delete"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                              onClick={()=>storeDelete(row._id)}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}

                  {allOrders && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even' : 'odd'}
                          key={index}
                        >
                          <td className="sorting_1">{row.CenterName}</td>
                          <td>{row.location}</td>
                          <td>{row.courierService}</td>

                          <td className="text-center">
                            <a
                              href={`/change-password/${row.id}`}
                              className="btn btn-warning btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Change Password"
                            >
                              <i className="fa fa-key"></i>
                            </a>

                            <a
                              href={`/edit-users/${row.id}`}
                              className="mx-2 btn btn-success btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </a>

                            <input type="hidden" name="id" value="1" />

                            <button
                              className="btn btn-danger btn-sm  delete"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}

                  {remainingOrders && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even' : 'odd'}
                          key={index}
                        >
                          <td className="sorting_1">{row.CenterName}</td>
                          <td>{row.location}</td>
                          <td>{row.courierService}</td>

                          <td className="text-center">
                            <a
                              href={`/change-password/${row.id}`}
                              className="btn btn-warning btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Change Password"
                            >
                              <i className="fa fa-key"></i>
                            </a>

                            <a
                              href={`/edit-users/${row.id}`}
                              className="mx-2 btn btn-success btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </a>

                            <input type="hidden" name="id" value="1" />

                            <button
                              className="btn btn-danger btn-sm  delete"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}

                  {DispatchedCenter && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even' : 'odd'}
                          key={index}
                        >
                          <td className="sorting_1">{row.center_name}</td>
                          <td>{row.location}</td>
                          <td>{row.courier_service}</td>

                          <td className="text-start">
                            <Link
                              to={`/update-center/${row._id}`}
                              className="mx-2 btn btn-success btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </Link>

                            <input type="hidden" name="id" value="1" />

                            <button
                              className="btn btn-danger btn-sm  delete"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                              onClick={()=>DispatchedCenterdelete(row._id)}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}

                  {dispatchedOrders && (
                    <tbody className={`${theme ? 'table-dark' : ''}`}>
                      {displayedRows.map((row, index) => (
                        <tr
                          className={index % 2 === 0 ? 'even' : 'odd'}
                          key={index}
                        >
                          <td className="sorting_1">{row.order_number}</td>
                          <td>{row.dispatch_center}</td>
                          <td>{row.dispatch_date}</td>
                          <td>{row.total_amount}</td>
                          <td className="text-center">
                            <a
                              href={`/change-password/${row.id}`}
                              className="btn btn-warning btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Change Password"
                            >
                              <i className="fa fa-key"></i>
                            </a>
                            <Link
                              to={`/update-orders/${row._id}`}
                              className="mx-2 btn btn-success btn-sm "
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                            >
                              <i className="fa fa-edit"></i>
                            </Link>

                            <input type="hidden" name="id" value="1" />

                            <button
                              className="btn btn-danger btn-sm  delete"
                              type="button"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                              onClick={()=>dispatchedOrdersDelete(row._id)}
                            >
                              <i className="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
            </div>

            {/* Table Footer1 */}

            <div className={`row ${theme ? 'table-dark' : ''}`}>
              <div
                className={`col-sm-12 col-md-5 ${theme ? 'table-dark' : ''}`}
              >
                <div
                  className={`dataTables_info ${theme ? 'table-dark' : ''}`}
                  id="dataTable_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing {startIndexForEntries} to {endIndexForEntries} of{' '}
                  {totalEntries} entries
                </div>
              </div>
              <div
                className={`col-sm-12 col-md-7 ${theme ? 'table-dark' : ''}`}
              >
                <div
                  className={`dataTables_paginate paging_simple_numbers ${
                    theme ? 'table-dark' : ''
                  }`}
                  id="dataTable_paginate"
                >
                  <ul className={`pagination ${theme ? 'table-dark' : ''}`}>
                    <li
                      className={`paginate_button page-item ${
                        theme ? 'table-dark' : ''
                      } ${currentPage === 1 ? 'disabled' : ''}`}
                    >
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(currentPage - 1);
                        }}
                        className={`page-link ${theme ? 'table-dark' : ''}`}
                      >
                        Previous
                      </a>
                    </li>
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <li
                        key={index}
                        className={`paginate_button page-item ${
                          theme ? 'table-dark' : ''
                        } ${currentPage === index + 1 ? 'active' : ''}`}
                      >
                        <a
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(index + 1);
                          }}
                          className={`page-link ${theme ? 'table-dark' : ''}`}
                        >
                          {index + 1}
                        </a>
                      </li>
                    ))}
                    <li
                      className={`paginate_button page-item ${
                        currentPage === totalPages ? 'disabled' : ''
                      }`}
                    >
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(currentPage + 1);
                        }}
                        className={`page-link ${theme ? 'table-dark' : ''}`}
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonTable;