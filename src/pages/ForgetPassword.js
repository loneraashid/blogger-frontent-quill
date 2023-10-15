import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import PassReset from "../containers/password-reset-container/PassReset";

function ForgetPassword() {
    return (
        <Fragment>
          <MetaTags>
            <title>Forget Password</title>
            <meta
              name="description"
              content="Forget Password page"
            />
          </MetaTags>
          <LayoutOne>
            {/* breadcrumb */}
            <Breadcrumb title="Password Reset" />
          <PassReset></PassReset>
          </LayoutOne>
        </Fragment>
      );
}

export default ForgetPassword
