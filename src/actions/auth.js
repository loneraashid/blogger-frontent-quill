
/*
Author: Rakibul Islam
Contact: rakibulislam.cse21@gmail.com
web: https://arbytetechnology.com/
Linkedin: https://linkedin.com/in/rakibul21
@copyright all code
*/

import { publicRequest, userRequest } from "../requestMethod";

import { toast } from 'react-toastify';




export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const PROFILELOAD_SUCCESS = 'PROFILELOAD_SUCCESS';

export function receiveLogin() {
  return {
    type: LOGIN_SUCCESS
  };
}

function loginError(payload) {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

// logs the user out
export function logoutUser(history) {
  return async (dispatch) => {
    await dispatch(requestLogout());
    await localStorage.removeItem('authenticated');
    await localStorage.removeItem('token');
    await dispatch(receiveLogout());
    history.push('/')

  };
}

export function loginUser(creds,payload) {
 
  return async (dispatch) => {
    try{
      const {data}= await publicRequest.post(`/api/user/login`, creds)
    if (data=== 'Account not verified') {
      toast.warning('Account not verified. Please check your email to verify your account!')
      return
    }
      await localStorage.setItem('authenticated', true)
      await localStorage.setItem('token', data.token)
      dispatch(receiveLogin());
      dispatch({type: PROFILELOAD_SUCCESS, payload: data});
      
      toast.success('Login successfull')
      payload.go(0);
return true
    }catch{
      
      dispatch(loginError('Something was wrong. Try again'));
      toast.error('wrong email or password')
    }
  }
}
export function resetPass(creds) {
 
  return async (dispatch) => {
    try{
      const {data}= await publicRequest.post(`/api/user/resetpass`, {email:creds})
    if (data=== false) {
      toast.warning('Account not found')
      return
    }
      
      toast.success('Password reset successfull. Please check your email')
      
return true
    }catch{
      
      dispatch(loginError('Something was wrong. Try again'));
      toast.error('wrong email or password')
    }
  }
}
export function updatePass(creds, history) {
 
  return async (dispatch) => {
    try{
      const {data}= await publicRequest.put(`/api/user/updatepass`, creds)
    if (data=== false) {
      toast.warning('Account not found')
      return
    }
      
      toast.success('Password updated successfully. login now')
      history.push('/')
      
return true
    }catch{
      
      dispatch(loginError('Something was wrong. Try again'));
      toast.error('Something was wrong. Try again')
    }
  }
}



export function fetchMyProfile() {
 
  return async (dispatch) => {
    try{
      const {data}= await userRequest.get(`/api/user/profile` )

      dispatch({type: PROFILELOAD_SUCCESS, payload: data});
     
    }catch{
      console.log('error');
      
    }
  }
}

export function myProfileEdit(field) {
  return async(dispatch) => {
   const {data}= await userRequest.put(`/api/user/profile/update`, field)
  
   if (data) {
    
       await dispatch(fetchMyProfile());
        toast.success("Profile Updated successfully");
    }else{
        
        toast.error("something went wrong");
    }
   }
  }
export function makeEmailVerified(userid) {
  return async(dispatch) => {
   const {data}= await publicRequest.put(`/api/user/verifyemail`, {userid})
  
   if (data.success) {
   
        toast.success("Email verified successfully");
        return true
    }else{
        
        toast.error("User Not found");
        return false
    }
   }
  }



