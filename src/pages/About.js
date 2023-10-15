import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import FeatureImageTextOne from "../containers/feature-image-texts/feature-image-text-one";
import AboutContentOne from "../containers/about-contents/about-content-one";

const About = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Agri Charcha - about</title>
        <meta name="description" content="About page." />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="About Us" />
        {/* feature */}
        <FeatureImageTextOne />
        {/* about content */}
        <AboutContentOne />
        {/* about content */}
      </LayoutOne>
    </Fragment>
  );
};

export default About;
