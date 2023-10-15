
import React from 'react';

import { TiTick} from "react-icons/ti";
import { Button, Modal,  ModalBody, ModalFooter } from 'reactstrap';

const ApproveModal= (props) => {
  
    return (
      <Modal isOpen={props.show} centered toggle={props.toggle}>
        
     
      <ModalBody>
      <div className='conatiner'>
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-lg-4  delete-direction'>

              <TiTick className='approve-icon ml-3'></TiTick>
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
        <Button color="success" onClick={()=>props.handleApproveSubmit(props.data._id)}>
          Approve
        </Button>
      </ModalFooter>
    </Modal>
    );
};

export default ApproveModal;