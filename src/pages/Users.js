import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import UsersTable from "../containers/users-container/Users";
import '../containers/users-container/players.css'
import Usertable from "../containers/manageUser/usertable/Usertable";
const Users = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Registered Users</title>
        <meta
          name="description"
          content="Registered Users page."
        />
      </MetaTags>
      <LayoutOne>
      <Breadcrumb title="Registered Users" />
      {/* <UsersTable></UsersTable> */}

      <Usertable/>
      
      </LayoutOne>  
    </Fragment>
  );
};

export default Users;
