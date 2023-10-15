import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import NotFoundContent from "../containers/not-found";
import Breadcrumb from "../components/UI/breadcrumb";

const NotFound = () => {
  return (
    <Fragment>
      <MetaTags>
        <title> Not Found</title>
        <meta
          name="description"
          content="Not Found page."
        />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Not Found" />
        <NotFoundContent />
      </LayoutOne>
    </Fragment>
  );
};

export default NotFound;
