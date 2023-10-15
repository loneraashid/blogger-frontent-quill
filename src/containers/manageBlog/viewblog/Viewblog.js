import React from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Viewblog.css'

const Viewblog= (props) => {

  return (
    <div>
      <Modal isOpen={props.show} size='lg' toggle={props.toggle}>
      <ModalHeader >Post Details</ModalHeader>
      <ModalBody className='tournament-modal-div'>
      <div className="row modal-div">
  <div className="col-lg-12">
    <div className="p-4">

                <div className="row">
                  <label className="col-lg-3 col-form-label" >Title:
                  </label>
                  <div className="col-lg-9">
                    <p className='mb-0'>{props.blogdata.title}</p>
                  </div>
                </div>
                <div className="row">
                  <label className="col-lg-3 col-form-label" >Image:
                  </label>
                  <div className="col-lg-9">
                    <img src={props.blogdata.image} width={200} height={200}/>
                  </div>
                </div>
                <div className="row">
                  <label className="col-lg-3 col-form-label" >Description:
                  </label>
                  <div className="col-lg-9">
                    <p className='mb-0'>{props.blogdata.description}</p>
                  </div>
                </div>
                <hr/>
                <div className="row mt-2">
                  <label className="col-lg-3 col-form-label" >Category:
                  </label>
                  <div className="col-lg-9 mt-2">
                    <p className='mb-0'><span className='badge-info rounded py-1 px-2'>{props.blogdata.category}</span></p>
                  </div>
                </div>
                
                



  
    </div>
  </div>

</div>

      </ModalBody>
                     
      <ModalFooter>
       
       <Button color="secondary" onClick={props.toggle}>
         Close
       </Button>
      
     </ModalFooter>
    
    </Modal>

</div>
  )
}

export default Viewblog

