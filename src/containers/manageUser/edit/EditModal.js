import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { withRouter, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import './editmodal.css'

import { editUser } from '../../../actions/userAction';


function EditModal(props) {
    const [state, setState] = useState({name:props.data.name, phone:props.data.phone? props.data.phone :''} )
    const changeCred = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }


  const doEdit = (event) => {
    event.preventDefault();
    // if (!state.name || !state.email || !state.password) {
      
    //   return
    // }
    props.dispatch(editUser({
      creds: state,
      id: props.data._id,
      toggleModel: props.toggle
    }))
    
  }


  const { from } = props.location.state || { from: { pathname: '/' } }

  if (!JSON.parse(localStorage.getItem('authenticated'))) {
    return (
      <Redirect to={from} />
    );
  }
  return (
    <>

<Modal isOpen={props.show} size='lg' toggle={props.toggle}>
      <ModalHeader>
        Edit User
        </ModalHeader>
        <ModalBody className='edittournament-modal-div'>
      <div className="container-fluid  mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex justify-content-center">

            <div className="col-md-10 col-lg-9">
               <form className=''>
                <div className="card2 card border-0 px-4 py-5">
                    <>
                      <div className="row px-3">
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">Name</h6>
                        </label>
                        <input
                        value={state.name}
                        onChange={(event) => changeCred(event)}
                          className="form-control mb-4"
                          type="text"
                          name="name"
                          placeholder="Enter full name"
                          required
                        />
                      </div>
                      <div className="row px-3">
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">Phone</h6>
                        </label>
                        <input
                        value={state.phone}
                        onChange={(event) => changeCred(event)}
                          className="form-control mb-4"
                          type="text"
                          name="phone"
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                     
                      
    
                     

                   
                    </>

    
                  </div>
    
                </form>
             
      
            </div>
            

          </div>
        </div>
      </div>
      </ModalBody>
    
      <ModalFooter>
       
       <Button color="secondary" onClick={props.toggle}>
         Cancel
       </Button>{' '}
       <Button color="primary"  onClick={(event => doEdit(event))}>

         Submit
       </Button>
     </ModalFooter>
    
    </Modal>


    </>
  );
}


function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(EditModal));

