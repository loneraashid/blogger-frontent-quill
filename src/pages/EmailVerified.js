import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";

import Breadcrumb from "../components/UI/breadcrumb";
import EmailVerifyContent from "../containers/email-verification";

const EmailVerified = () => {
  return (
    <Fragment>
      <MetaTags>
        <title> Email Verification</title>
        <meta
          name="Email Verification"
          content="Email Verification."
        />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Email Verification" />
        <EmailVerifyContent/>
      </LayoutOne>
    </Fragment>
  );
};

export default EmailVerified;
