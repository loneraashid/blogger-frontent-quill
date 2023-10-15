
import React from 'react';
import { MdWarning } from "react-icons/md";
import { Button, Modal,  ModalBody, ModalFooter } from 'reactstrap';

const Deleteblog= (props) => {
  
    return (
      <Modal isOpen={props.show} centered toggle={props.toggle}>
        
     
      <ModalBody>
      <div className='conatiner'>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-lg-4  delete-direction'>

              <MdWarning className='delete-icon ml-3'></MdWarning>
            </div>
            <div className='col-lg-8 delete-text mt-2'>

              <h3>Are you sure?</h3>
              <span>This action cannot be undone</span>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
       
        <Button color="secondary" onClick={props.toggle}>
          Cancel
        </Button>{' '}
        <Button color="danger" onClick={()=>props.handleDeleteSubmit(props.blogData._id)}>
          Delete
        </Button>
      </ModalFooter>
    </Modal>
    );
};

export default Deleteblog;