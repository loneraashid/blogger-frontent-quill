import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";

import BlogDetailsComponent from "../containers/single-blog/BlogDetailsComponent";

const SingleBlog = () => {
  
  return (
    <Fragment>
      <MetaTags>
        <title>Post Details</title>
        <meta
          name="description"
          content="Post details"
        />
      </MetaTags>
      <LayoutOne>
        
        <Breadcrumb title='Post Details' />
   
       <BlogDetailsComponent/>
      </LayoutOne>
    </Fragment>
  );
};

export default SingleBlog;
