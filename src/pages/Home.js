import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";

import BlogGrid from "../containers/blog-grid/blog-grid-one";

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Agri Charcha - Home</title>
        <meta name="description" content="Homepage of blog." />
      </MetaTags>
      <LayoutOne footerBg="white">
        <BlogGrid />
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
