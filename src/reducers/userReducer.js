import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    
    
  } from "../actions/userAction.js";
  
  export default function users(state = {
    isFetching: false,
    errorMessage: '',
    userData:[]
  }, action) {
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
        });
      case FETCH_USER_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          errorMessage: '',
          userData: action.payload
        });
      case FETCH_USER_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          errorMessage: action.payload,
        });

        
      default:
        return state;
    }
  }