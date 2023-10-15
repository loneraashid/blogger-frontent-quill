import {
    FETCH_BLOG_REQUEST,
    FETCH_BLOG_SUCCESS,
    FETCH_BLOG_FAILURE,
    BLOG_EDIT_SUCCESS,
    FETCH_MANAGEPOST_SUCCESS,
    
  } from "../actions/blogAction.js";
  
  export default function blog(state = {
    isFetching: false,
    errorMessage: '',
    blogData:[],
    manageBlogData:[]
  }, action) {
    switch (action.type) {
      case FETCH_BLOG_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
        });
      case FETCH_BLOG_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          errorMessage: '',
          blogData: action.payload
        });
      case FETCH_MANAGEPOST_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          errorMessage: '',
          manageBlogData: action.payload
        });
      case FETCH_BLOG_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          errorMessage: action.payload,
        });

        case BLOG_EDIT_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          errorMessage: '',
          blogData: action.payload
        });
      default:
        return state;
    }
  }