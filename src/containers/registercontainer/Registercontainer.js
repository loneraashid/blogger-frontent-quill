import React,{useState} from 'react'
import {  Modal, ModalHeader, ModalBody} from 'reactstrap';
import { withRouter, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import './Registercontainer.css'
import { loginUser, resetPass } from '../../actions/auth';
import { registerUser } from '../../actions/register';


function Registercontainer(props) {

  const [isLogin, setIslogin]=useState(true)
  const [isPassReset, setIsPassReset]=useState(false)
  const [isReg, setIsReg]=useState(false)
  const [state, setState] = useState({name:'',  email: '',  password: '', gender:'male',  phone:''} )
  const [loginState, setLoginState] = useState({email: '',  password: ''} )
  const changeCred = (event) => {

    if (event.target.name==='phone') {
      var newValue = event.target.value.replace(new RegExp(/[^\d]/, 'ig'), "");
      
      newValue && setState({ ...state, [event.target.name]: newValue })
      return
    }
    
    setState({ ...state, [event.target.name]: event.target.value })
  }
  const changeLoginCred = (event) => {
    setLoginState({ ...loginState, [event.target.name]: event.target.value })
  }

  const doRegister = (event) => {
    event.preventDefault();
    if (!state.name || !state.email || !state.password || !state.phone || !state.gender) {
      alert('Please fill all the fields')
      return
    }
    let passRgx= /^.{6,}$/
      const passValidate = passRgx.test(state.password);
      
      if (!passValidate) {
        alert('Please check that your password should be atleast 6 digits/characters!')
        return
      }
    props.dispatch(registerUser({
      creds: state,
      history: props.history,
      showLogin : setIslogin,
    }))
    
  }
  const doLogin = (event) => {
    event.preventDefault();
    props.dispatch(loginUser(loginState, props.history))
// console.log(loginState);
  }
  const doResetPass = (event) => {
    event.preventDefault();
    props.dispatch(resetPass(loginState.email.trim()))
setIslogin(false)
setIsPassReset(false)
setIsReg(false)
props.history.push('/')

  }

  const { from } = props.location.state || { from: { pathname: '/' } }

  if (JSON.parse(localStorage.getItem('authenticated'))) {
    return (
      <Redirect to={from} />
    );
  }
  return (
    <>

<Modal isOpen={props.show} size='md' toggle={props.toggle}>
      <ModalHeader>
        {isLogin ? "Login Now":"Register Now"}
        </ModalHeader>
      <ModalBody>
      <div className="container-fluid login-reg-modal  mx-auto">
        <div className="card card0 login-reg-card border-0">
          <div className="row d-flex justify-content-center">

            <div className="col-md-11 col-lg-10">
              {
                isReg?      
                <form className='' onSubmit={(event => doRegister(event))}>
                <div className="card2 card border-0 px-0 py-5">
                    <>
                      <div className="row px-3">
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">Full Name</h6>
                        </label>
                        <input
                        value={state.name}
                        onChange={(event) => changeCred(event)}
                          className="mb-4"
                          type="text"
                          name="name"
                          placeholder="Enter full name"
                          required
                        />
                      </div>
                     
                      <div className="row px-3">
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">Email Address</h6>
                        </label>
                        <input
                        value={state.email}
                        onChange={(event) => changeCred(event)}
                          className="mb-4"
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          required
                        />
                        
                      </div>

                      <div className="row px-3">
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">Password</h6>
                        </label>
                        <input
                          value={state.password}
                          onChange={(event) => changeCred(event)}
                          className="mb-4"
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          required
                        />
                      </div>

                      <div className="row px-3">
                        <label className="mb-1 mt-1">
                          <h6 className="mb-0 text-sm">Gender</h6>
                        </label>
                        <div className="form-check form-check-inline ml-4 mb-4">
    
                        <input onChange={(event) => changeCred(event)} className="form-check-input" type="radio" defaultChecked name="gender" id="inlineRadio1" defaultValue="male" />
                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                        <div className="form-check form-check-inline ml-2">
                          <input onChange={(event) => changeCred(event)} className="form-check-input" type="radio" name="gender" id="inlineRadio2" defaultValue="female" />
                          <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                        </div>
                      
                      </div>
                        
                        
                      </div>
                      
    
                    
    
                      <div className="row px-3">
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">Phone Number</h6>
                        </label>
                        <input
                        value={state.phone}
                        onChange={(event) => changeCred(event)}
                          required
                          type="text"
                          name="phone"
                          placeholder="Enter your phone number "
                         
                        />  
                      </div>
                    </>
                    <div className='d-flex flex-column align-items-center'>
                    <div className="row mb-3 mt-3 px-3">
                      <button type="submit" className="register-btn text-center">
                        Register
                      </button>
                    </div>
                    <div className="row mb-4 px-3">
                      <small className="font-weight-bold">
                        Have an account?
                        <span  className='loginreg-button' onClick={()=>{setIslogin(!isLogin);setIsReg(false)}}>
                          &nbsp; Login
                        </span>
                      </small>
                    </div>
                    </div>
    
                  </div>
    
                </form>
                :
                isLogin ?
                <form className='' onSubmit={(event => doLogin(event))}>
                <div className="card2 card border-0 px-4 py-5">
                    <>
                     
                     
                      <div className="row px-3">
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">Email Address</h6>
                        </label>
                        <input
                        value={loginState.email}
                        onChange={(event) => changeLoginCred(event)}
                          className="mb-4"
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          required
                        />
                        
                      </div>
                     
                     
    
                      <div className="row px-3">
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">Password</h6>
                        </label>
                        <input
                          value={loginState.password}
                          onChange={(event) => changeLoginCred(event)}
                          className="mb-4"
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          required
                        />
                      </div>

                      <div className="row px-3 mb-1 mt-1">
                    
                    <a href="/#" onClick={()=>{setIsPassReset(!isPassReset); setIslogin(false)}} className="ml-auto mb-0 text-sm">
                      Forget Password?
                    </a>
                  </div>

                    </>
                    <div className='d-flex flex-column align-items-center'>
                    <div className="row mb-3 mt-3 px-3">
                      <button type="submit" className="register-btn text-center">
                        Login
                      </button>
                    </div>
                    <div className="row mb-4 px-3">
                      <small className="font-weight-bold">
                        Don't have an account?
                        <span className='loginreg-button' onClick={()=>{setIslogin(!isLogin); setIsReg(true)}}>
                          &nbsp; Register
                        </span>
                      </small>
                    </div>
                    </div>
    
                  </div>
    
                </form>
                  :
                  <form className='' onSubmit={(event => doResetPass(event))}>
                <div className="card2 card border-0 px-4 py-5">
                    <>
                     
                     
                      <div className="row px-3">
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">Email Address</h6>
                        </label>
                        <input
                        value={loginState.email}
                        onChange={(event) => changeLoginCred(event)}
                          className="mb-4"
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          required
                        />
                        
                      </div>
                     
                     

                    </>
                    <div className='d-flex flex-column align-items-center'>
                    <div className="row mb-3 mt-3 px-3">
                      <button type="submit" className="register-btn text-center">
                        Reset
                      </button>
                    </div>
                    <div className="row mb-4 px-3">
                      <small className="font-weight-bold">
                        Remember your password?
                        <span className='loginreg-button' onClick={()=>{setIslogin(true); setIsPassReset(false)}}>
                          &nbsp; Login
                        </span>
                      </small>
                    </div>
                    </div>
    
                  </div>
    
                </form>
              }
      
            </div>
          </div>
        </div>
      </div>
      </ModalBody>
    
    
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

export default withRouter(connect(mapStateToProps)(Registercontainer));

