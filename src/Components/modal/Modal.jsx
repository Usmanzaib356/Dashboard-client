import React from 'react';
import { Modal } from 'react-bootstrap';
import AddRole from './AddRole';
import AddInventoryStatus from './AddInventoryStatus';
import AddStore from './AddStore';
import AddCenter from './AddCenter';

function Modal(prop) {
  const {
    addNewUser,
    addNewRole,
    addInventoryStatus,
    addNewStore,
    addNewCenter,
  } = prop;

  return (
    <>
      {/*Add User Modal  */}
      {addNewUser && <addNewUser></addNewUser>}
      {addNewRole && <AddRole></AddRole>}
      {addInventoryStatus && <AddInventoryStatus></AddInventoryStatus>}
      {addNewStore && <AddStore></AddStore>}
      {addNewCenter && <AddCenter></AddCenter>}
    </>
  );
}

export default Modal;
