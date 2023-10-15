import axios from "axios";


const BASE_URL = process.env.REACT_APP_server;
let token;
let TOKEN='';
if (localStorage.getItem("token")) {
 
   token= localStorage.getItem("token")
   
   if (token) {

    TOKEN = token;
    
   }
}




export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type" : "application/json"
  }
});
export let userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
