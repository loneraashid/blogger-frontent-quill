
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import Blogtable from "../containers/manageBlog/blogtable/Blogtable";


function Managepost() {
    return (
        <Fragment>
          <MetaTags>
            <title>Manage Post</title>
            <meta
              name="description"
              content="Manage Post"
            />
          </MetaTags>
          <LayoutOne>
            {/* breadcrumb */}
            <Breadcrumb title="Manage Post" />
          <Blogtable/>
          </LayoutOne>
        </Fragment>
      );
}

export default Managepost
