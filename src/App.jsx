import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Admin from './Components/Dashboard/Admin';
import ViewUsers from './Components/ViewUsers';
import UserRoles from './Components/UserRoles';
import Products from './Components/Products';
import InventoryIn from './Components/InventoryIn';
import OverallInventory from './Components/OverallInventory';
import FaultyInventoryMechanism from './Components/FaultyInventoryMechanism';
import ReturnInventoryMechanism from './Components/ReturnInventoryMechanism';
import InventoryStatus from './Components/InventoryStatus';
import Suppliers from './Components/Suppliers';
import Warehouses from './Components/Warehouses';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Chart from './Components/Chart';
import Universal from './Components/Universal';
import useAuth from './hooks/useAuth';
import Stores from './Components/Stores/Stores';
import DispatchedCenters from './Components/Orders/DispatchedCenters';
import DispatchedOrders from './Components/Orders/DispatchedOrders';
import RemainingOrders from './Components/Orders/RemainingOrders';
import AllOrders from './Components/Orders/AllOrders';
import Adminpermission from './Components/Adminpermission';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AddNewInventory from './Components/AddNewItems/AddNewInventory';
import AddFaulty from './Components/AddNewItems/AddFaulty';
import ReturnInventory from './Components/AddNewItems/ReturnInventory';
import AddSupplier from './Components/AddNewItems/AddSupplier';
import AddWarehouse from './Components/AddNewItems/AddWarehouse';
import GlobalAuth from './Components/GlobalAuth';
import ServerError from './Components/ServerError';
import UpdateDispatchCenter from './Components/UpdateItems/UpdateDispatchCenter';
import UpdateDispatchOrder from './Components/UpdateItems/UpdateDispatchOrder';
import UpdateStore from './Components/UpdateItems/UpdateStore';
import UpdateSupllier from './Components/UpdateItems/UpdateSupplier';
import AddProducts from './Components/AddNewItems/AddProducts';
import UpdateProducts from './Components/UpdateItems/UpdateProducts';
import UpdateInventory from './Components/UpdateItems/UpdateInventory';
import DispatchedCenterDetail from './Components/DetailsItems/DispatchedCenterDetail';
import DistaptchedOrderDetail from './Components/DetailsItems/DistaptchedOrderDetail';
import SupplierDetail from './Components/DetailsItems/SupplierDetail';
import InventoryInDetail from './Components/DetailsItems/InventoryInDetail';
import Productdetail from './Components/DetailsItems/ProductDetail';
import UpdateUser from './Components/UpdateItems/UpdateUser';

function App() {
  const { islogin } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [islogin]);

  if (isLoading) {
    return <div> Loading... </div>;
  }

  // axois get

  return (
    <>
      <Routes>
        <Route path="/" element={<GlobalAuth />}>
          <Route index element={<Admin />} />

          <Route path="/view-users" element={<ViewUsers />} />
          <Route path="/update-user/:userId" element={<UpdateUser />} />
          <Route path="/users-role" element={<UserRoles />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/product-detail/:productId"
            element={<Productdetail />}
          />
          <Route path="/inventory" element={<InventoryIn />} />
          <Route
            path="/inventory-detail/:inventoryId"
            element={<InventoryInDetail />}
          />
          <Route path="/overall-inventory" element={<OverallInventory />} />
          <Route
            path="/faulty-inventory"
            element={<FaultyInventoryMechanism />}
          />
          <Route
            path="/return-inventory"
            element={<ReturnInventoryMechanism />}
          />
          <Route path="/inventory-status" element={<InventoryStatus />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route
            path="/supplier-detail/:supplierId"
            element={<SupplierDetail />}
          />
          <Route
            path="/update-supplier/:supplierId"
            element={<UpdateSupllier />}
          />
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/all-orders" element={<AllOrders />} />
          <Route path="/remaining-orders" element={<RemainingOrders />} />
          <Route path="/dispatched-orders" element={<DispatchedOrders />} />
          <Route
            path="/orders-detail/:dispatchUpdateOrderId"
            element={<DistaptchedOrderDetail />}
          />
          <Route path="/dispatched-centers" element={<DispatchedCenters />} />
          <Route
            path="/center-detail/:dispatchUpdateId"
            element={<DispatchedCenterDetail />}
          />
          <Route path="/add-inventory" element={<AddNewInventory />} />
          <Route path="/add-faulty" element={<AddFaulty />} />
          <Route path="/add-return-inventory" element={<ReturnInventory />} />
          <Route path="/add-supplier" element={<AddSupplier />} />
          <Route path="/add-warehouse" element={<AddWarehouse />} />
          <Route path="/add-products" element={<AddProducts />} />
          <Route
            path="/update-center/:dispatchUpdateId"
            element={<UpdateDispatchCenter />}
          />
          <Route
            path="/update-orders/:dispatchUpdateOrderId"
            element={<UpdateDispatchOrder />}
          />
          <Route
            path="/update-inventory/:inventoryId"
            element={<UpdateInventory />}
          />
          <Route
            path="/update-products/:productId"
            element={<UpdateProducts />}
          />
          <Route path="/update-store/:storeId" element={<UpdateStore />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/chart" element={<Adminpermission />} />
          <Route path="/side" element={<Sidebar />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
        </Route>
        <Route path="*" element={<Universal />} />

        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/error" element={<ServerError />} />
      </Routes>
    </>
  );
}

export default App;
