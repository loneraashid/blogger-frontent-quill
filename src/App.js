
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";

import About from "./pages/About";
import Users from "./pages/Users";
import FAQ from "./containers/home/faq/FAQ";

import Contact from "./pages/Contact";

import NotFound from "./pages/NotFound";


import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import Blog from "./pages/Blog";

import SingleBlog from "./pages/SingleBlog";
import Managepost from "./pages/Managepost";
import EmailVerified from "./pages/EmailVerified";
import ForgetPassword from "./pages/ForgetPassword";

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  if (!JSON.parse(localStorage.getItem("authenticated"))) {
    // dispatch(logoutUser());
    // return (<Redirect to="/login" />)
    return (<Redirect to="/" />)
  } else {
    return (
      <Route { ...rest } render={props => (React.createElement(component, props))} />
    );
  }
};

function App() {
  return (
    <>
    <ToastContainer position="top-right"
autoClose={2500}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={Blog}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blogs"}`}
            component={Blog}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/verifyaccount"}`}
            component={EmailVerified}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/forgetpassword"}`}
            component={ForgetPassword}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog/:id"}`}
            component={SingleBlog}
          />
          
          


          <PrivateRoute
            path={`${process.env.PUBLIC_URL + "/users"}`}
            component={Users}
          />
           
          
          
          <PrivateRoute
            path={`${process.env.PUBLIC_URL + "/managepost"}`}
            component={Managepost}
          />
           


          <Route
            path={`${process.env.PUBLIC_URL + "/faq"}`}
            component={FAQ}
          />
          
         
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
         
        
          
        
          
        
          <Route
            path={process.env.PUBLIC_URL + "/not-found"}
            component={NotFound}
          />
          <Route exact component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
