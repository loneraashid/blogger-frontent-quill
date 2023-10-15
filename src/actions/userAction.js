/*
Author: Rakibul Islam
Contact: rakibulislam.cse21@gmail.com
web: https://arbytetechnology.com/
Linkedin: https://linkedin.com/in/rakibul21
@copyright all code
*/

import { toast } from 'react-toastify';

import {  userRequest } from '../requestMethod';


export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';




export function fetchUser() {
  return async(dispatch) => {
   const {data}= await userRequest.get('/api/user')
   if (data) {
    
        dispatch({type: FETCH_USER_SUCCESS, payload: data});
    }else{
        dispatch({type: FETCH_USER_FAILURE})
    }
   }
  }


  export function editUser(payload) {
    const {creds}= payload
   
    return async(dispatch) => {
     const {data}= await userRequest.put(`/api/user/update/${payload.id}`, creds)
    
     if (data) {
      
          dispatch(fetchUser());
          toast.success("User info updated successfully");
          payload.toggleModel()
      }else{
          dispatch({type: FETCH_USER_FAILURE})
      }
     }
    }



export function deleteUser(id) {
  return async(dispatch) => {
   const {data}= await userRequest.delete(`/api/user/delete/${id}`)
  
   if (data) {
    toast.warn("User deleted successfully");
       await dispatch(fetchUser());
        
    }else{
        dispatch({type: FETCH_USER_FAILURE})
    }
   }
  }

