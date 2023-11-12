import React, { useRef, useState } from 'react'
import { Button, Modal, Form, FormControl, FormGroup, ModalHeader, ModalBody, ModalFooter, ModalTitle, FormLabel,  Row } from 'react-bootstrap';
function AddInventoryStatus() {
  // Modal 

  const [showModal, setShowModal] = useState(false);


  //  Ref

  const status = useRef()

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };




  const handleSend = () => {

    console.log(
      status.current.value,
    );


  };
  return (
    <>
      <div className='mb-3 d-flex justify-content-end'>
        <Button variant="primary" onClick={handleShowModal}>
          Add Inventory Status
        </Button>

        <Modal show={showModal} onHide={handleCloseModal} >
          <ModalHeader >
            <ModalTitle  >New Status</ModalTitle>
            <button className='btn' onClick={handleCloseModal}>
              <li className='fa fa-times' ></li>
            </button>
          </ModalHeader>
          <ModalBody>
            <Form>

              <Row className='d-flex justify-content-between px-2  mb-2'>

                <FormGroup>
                  <FormLabel>Status</FormLabel>
                  <FormControl
                    type="text"
                    ref={status}
                    required
                    aria-required="true"
                  />

                </FormGroup>

              </Row>

            </Form>
          </ModalBody>
          <ModalFooter>
            <Button variant="danger" onClick={handleCloseModal}>
            <li className='fa fa-times-circle mr-1'></li>
              Close
            </Button>
            <Button variant="success" onClick={handleSend}>
            <li className='fa fa-plus-circle mr-1'></li>
              Add
            </Button>
          </ModalFooter>
        </Modal>





      </div>
    </>
  )
}

export default AddInventoryStatus