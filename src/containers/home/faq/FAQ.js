import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../../layouts";
import Breadcrumb from "../../../components/UI/breadcrumb";
import ContactFaqOne from "../../contact-faqs/contact-faq-one";

function FAQ() {
    return (
        <Fragment>
          <MetaTags>
            <title>FAQ</title>
            <meta
              name="description"
              content="Blog app FAQ"
            />
          </MetaTags>
          <LayoutOne>
            {/* breadcrumb */}
            <Breadcrumb title="FAQ" />
            <div className="mt-5"><ContactFaqOne></ContactFaqOne></div>
          
          </LayoutOne>
        </Fragment>
      );
}

export default FAQ
