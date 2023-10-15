import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";

import BlogPostWithSidebar from "../containers/blog/blog-post-with-sidebar";
import HomeBreadcrumb from "../components/UI/breadcrumb/HomeBreadcrum";

const Blog = () => {
  return (
    <Fragment>
      <MetaTags>
        <title> Agri charcha - blogs</title>
        <meta name="description" content="Blog page" />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <HomeBreadcrumb />

        <BlogPostWithSidebar />
      </LayoutOne>
    </Fragment>
  );
};

export default Blog;
