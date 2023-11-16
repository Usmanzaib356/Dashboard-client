import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import ProtectedRoute from './Components/ProtectedRoute';
import UnAuthorized from './Components/UnAuthorized';
import Layout from './Components/Layout';
import LoadingFallback from './Components/LoadingFallback';

const Admin = lazy(() => import('./Components/Dashboard/Admin'));
const ViewUsers = lazy(() => import('./Components/ViewUsers'));
const UserRoles = lazy(() => import('./Components/UserRoles'));
const Products = lazy(() => import('./Components/Products'));
const InventoryIn = lazy(() => import('./Components/InventoryIn'));
const OverallInventory = lazy(() => import('./Components/OverallInventory'));
const FaultyInventoryMechanism = lazy(() =>
  import('./Components/FaultyInventoryMechanism')
);
const ReturnInventoryMechanism = lazy(() =>
  import('./Components/ReturnInventoryMechanism')
);
const InventoryStatus = lazy(() => import('./Components/InventoryStatus'));
const Suppliers = lazy(() => import('./Components/Suppliers'));
const Warehouses = lazy(() => import('./Components/Warehouses'));
const Signin = lazy(() => import('./Components/Signin'));
const Universal = lazy(() => import('./Components/Universal'));
const Stores = lazy(() => import('./Components/Stores/Stores'));
const DispatchedCenters = lazy(() =>
  import('./Components/Orders/DispatchedCenters')
);
const DispatchedOrders = lazy(() =>
  import('./Components/Orders/DispatchedOrders')
);
const RemainingOrders = lazy(() =>
  import('./Components/Orders/RemainingOrders')
);
const AllOrders = lazy(() => import('./Components/Orders/AllOrders'));
const AddNewInventory = lazy(() =>
  import('./Components/AddNewItems/AddNewInventory')
);
const AddFaulty = lazy(() => import('./Components/AddNewItems/AddFaulty'));
const ReturnInventory = lazy(() =>
  import('./Components/AddNewItems/ReturnInventory')
);
const AddSupplier = lazy(() => import('./Components/AddNewItems/AddSupplier'));
const AddWarehouse = lazy(() =>
  import('./Components/AddNewItems/AddWarehouse')
);
const GlobalAuth = lazy(() => import('./Components/GlobalAuth'));
const ServerError = lazy(() => import('./Components/ServerError'));
const UpdateDispatchCenter = lazy(() =>
  import('./Components/UpdateItems/UpdateDispatchCenter')
);
const UpdateDispatchOrder = lazy(() =>
  import('./Components/UpdateItems/UpdateDispatchOrder')
);
const UpdateStore = lazy(() => import('./Components/UpdateItems/UpdateStore'));
const UpdateSupllier = lazy(() =>
  import('./Components/UpdateItems/UpdateSupplier')
);
const AddProducts = lazy(() => import('./Components/AddNewItems/AddProducts'));
const UpdateProducts = lazy(() =>
  import('./Components/UpdateItems/UpdateProducts')
);
const UpdateInventory = lazy(() =>
  import('./Components/UpdateItems/UpdateInventory')
);
const DispatchedCenterDetail = lazy(() =>
  import('./Components/DetailsItems/DispatchedCenterDetail')
);
const DistaptchedOrderDetail = lazy(() =>
  import('./Components/DetailsItems/DistaptchedOrderDetail')
);
const SupplierDetail = lazy(() =>
  import('./Components/DetailsItems/SupplierDetail')
);
const InventoryInDetail = lazy(() =>
  import('./Components/DetailsItems/InventoryInDetail')
);
const Productdetail = lazy(() =>
  import('./Components/DetailsItems/ProductDetail')
);

function App() {
  const { role } = useAuth();

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<GlobalAuth />}>
            <Route
              index
              element={<ProtectedRoute element={<Admin />} usersRole={role} />}
            />
            <Route
              path="/view-users"
              element={
                <ProtectedRoute element={<ViewUsers />} usersRole={role} />
              }
            />
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
          </Route>
        </Route>
        <Route path="*" element={<Universal />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/error" element={<ServerError />} />
        <Route path="/unauthorized" element={<UnAuthorized />} />
      </Routes>
    </Suspense>
  );
}

export default App;
