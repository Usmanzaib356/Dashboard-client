import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import axios from 'axios';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import CommonTable from '../CommonTable';
import { dummyDataViewUsers } from "../../utils/data"
import { Button, Modal, Form, FormControl, FormGroup, ModalHeader, ModalBody, ModalFooter, ModalTitle, FormLabel, FormSelect, Row, Col } from 'react-bootstrap';
import AddRole from './AddRole';
import AddInventoryStatus from './AddInventoryStatus';
import AddStore from './AddStore';
import AddCenter from './AddCenter';

function Modal(prop) {


    const { addNewUser, addNewRole,addInventoryStatus,addNewStore,addNewCenter } = prop

    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };


    const { theme } = useAuth()





    return (
        <> 
          {/*Add User Modal  */}
          { addNewUser && <addNewUser></addNewUser> }
          { addNewRole && <AddRole></AddRole> }
          { addInventoryStatus && <AddInventoryStatus></AddInventoryStatus> }
          { addNewStore && <AddStore></AddStore> }
          { addNewCenter && <AddCenter></AddCenter> }
        </>
    )
}

export default Modal