
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import Registercontainer from "../containers/registercontainer/Registercontainer";

function Register() {
    return (
        <Fragment>
          <MetaTags>
            <title>Registration</title>
            <meta
              name="description"
              content="Registration page"
            />
          </MetaTags>
          <LayoutOne>
            {/* breadcrumb */}
            <Breadcrumb title="Registration" />
          <Registercontainer></Registercontainer>
          </LayoutOne>
        </Fragment>
      );
}

export default Register
