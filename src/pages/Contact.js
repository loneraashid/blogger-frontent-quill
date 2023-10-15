

import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import ContactForm from "../containers/contact/contact-form";

const Contact = () => {
  return (
    <Fragment>
      <MetaTags>
        <title> Contact</title>
        <meta
          name="description"
          content="Contact page"
        />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Contact" />
        {/* contact form */}
        <ContactForm />
       
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
