import React, { useState } from 'react'
import PropTypes from "prop-types";
import './passresetstyle.css'
import Loginimage from "../../assets/images/login.svg"
import {  withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import {  useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { updatePass } from '../../actions/auth';

function PassReset(props) {

  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const search = useLocation().search;
  const userid = new URLSearchParams(search).get("user");
  const code = new URLSearchParams(search).get("code");
 



  const doSubmit = (e) => {
    e.preventDefault();
   
    const password= e.target.password.value
    const conpassword= e.target.password2.value


    let passRgx= /^.{6,}$/
      const passValidate = passRgx.test(password);
      
      if (!passValidate) {
        alert('Please check that your password should be atleast 6 digits/characters!')
        return
      }

      if (password !== conpassword) {
        alert('Password does not match')
        return
      }

     props.dispatch(updatePass({ password, userid, resetcode: code },props.history))

  }

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  // const { from } = props.location.state || { from: { pathname: '/' }};
  // if (hasToken(JSON.parse(localStorage.getItem('authenticated')))) {
  //   return (
  //     <Redirect to={from} />
  //   )
  // }
  return (
    <>
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img src={Loginimage} className="image" alt="login" />
                </div>
              </div>
            </div>
            
              <div className="col-lg-6">
              <form onSubmit={(event) => doSubmit(event)}>
                <div className="card2 card border-0 px-4 py-5">
                  <div>
                    
                    <div className="row px-3">
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Password</h6>
                      </label>
                      <input
                       onChange={(event) => changeCreds(event)}
                       className="mb-4"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="row px-3">
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Confirm Password</h6>
                      </label>
                      <input
                       onChange={(event) => changeCreds(event)}
                        type="password"
                        name="password2"
                        placeholder="Enter password again"
                      />
                    </div>
                  </div>

                  


                  <div className="row mb-3 ml-2 mt-3">
                    <button type="submit" className="login-btn text-center py-1">
                      Submit
                    </button>
                  </div>

                 
                </div>
                </form>
                
              </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

PassReset.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(PassReset));
