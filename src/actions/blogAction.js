

import { toast } from 'react-toastify';
import { publicRequest, userRequest } from '../requestMethod';


export const FETCH_BLOG_REQUEST = 'FETCH_BLOG_REQUEST';
export const FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS';
export const FETCH_MANAGEPOST_SUCCESS = 'FETCH_MANAGEPOST_SUCCESS';
export const FETCH_BLOG_FAILURE = 'FETCH_BLOG_FAILURE';
export const BLOG_EDIT_SUCCESS = 'BLOG_EDIT_SUCCESS';
export const BLOG_EDIT_FAILURE = 'BLOG_EDIT_FAILURE';



export function fetchBlog() {
  return async(dispatch) => {
   const {data}= await publicRequest.get('/api/blogs')
   if (data) {
    
        dispatch({type: FETCH_BLOG_SUCCESS, payload: data});
    }else{
        dispatch({type: FETCH_BLOG_FAILURE})
    }
   }
  }
export function fetchManagePost() {
  return async(dispatch) => {
   const {data}= await userRequest.get('/api/blogs/getmanagepost')
   if (data) {
    
        dispatch({type: FETCH_MANAGEPOST_SUCCESS, payload: data});
    }else{
        dispatch({type: FETCH_BLOG_FAILURE})
    }
   }
  }


export function editBlog(changedField) {
  const {creds}= changedField
  return async(dispatch) => {
   const {data}= await publicRequest.put(`/api/blogs/update/${changedField.id}`, creds)
  
   if (data) {
    toast.success("Blog updated successfully");
    await dispatch(fetchManagePost());
        dispatch(fetchBlog());
        changedField.toggleModel()
    }else{
        dispatch({type: BLOG_EDIT_FAILURE})
    }
   }
  }


export function addBlog(fields) {

    
  return async(dispatch) => {
   const {data}= await userRequest.post(`/api/blogs/add`, fields.creds)

   if (data) {
    
       await dispatch(fetchManagePost());
       await dispatch(fetchBlog());
        toast.success("New Blog added successfully");
        return true
    }else{
        dispatch({type: BLOG_EDIT_FAILURE})
    }
   }
  }

export function deleteBlog(id) {
  return async(dispatch) => {
   const {data}= await userRequest.delete(`/api/blogs/delete/${id}`)
  
   if (data) {
    toast.warn("Blog deleted successfully");
    await dispatch(fetchManagePost());
       await dispatch(fetchBlog());
        
    }else{
        dispatch({type: BLOG_EDIT_FAILURE})
    }
   }
  }
export function approveBlog(id) {
  return async(dispatch) => {
   const {data}= await userRequest.put(`/api/blogs/approve/${id}`)
  
   if (data) {
    toast.warn("Post approved successfully");
    await dispatch(fetchManagePost());
       await dispatch(fetchBlog());
        
    }else{
        dispatch({type: BLOG_EDIT_FAILURE})
    }
   }
  }

