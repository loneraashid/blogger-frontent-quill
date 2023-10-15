import { combineReducers } from "redux";

import register from "./register.js";
import auth from "./auth.js";


import blog from "./blogReducer.js";

import users from "./userReducer.js";
import myprofile from "./myprofile.js";


export default combineReducers({
  register,
  auth,
  myprofile,

blog,
users
 
});