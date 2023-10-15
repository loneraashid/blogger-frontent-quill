import React from "react";
import styles from "./ContactForm.module.scss";
import Button from "../../../components/UI/button";

const ContactForm = () => {
  return (
    <div className="event__contact ptb--110">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={styles.eventContactForm}>
              <h2>
                If you need to contact us, Please fill out the form below.
              </h2>
              <form>
                <div className={styles.singleContactForm}>
                  <input type="text" name="name" placeholder="Type Your Name" />
                </div>
                <div className={styles.singleContactForm}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type Your e-mail"
                  />
                </div>
                <div className={`${styles.singleContactForm} message`}>
                  <textarea
                    name="message"
                    placeholder="Type Your Message"
                    defaultValue={""}
                  />
                </div>
                <div className={styles.contactBtn}>
                  <Button type="button" text="Send" />
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
         
            <div className={styles.vpContactAddress}>
              <h2>Our Contact Info</h2>
              <div className="vp__address__container">
                {/* Start Single Address */}
                <div className={styles.vpAddress}>
                  <h4>Address</h4>
                  <p>414 Old street, Temple, New York, USA</p>
                </div>
                {/* End Single Address */}
                {/* Start Single Address */}
                <div className={styles.vpAddress}>
                  <h4>Links</h4>
                  <p>
                    <a href="mailto:rakibulislam.cse21@gmail.com">demo@mail.com</a>
                  </p>
                  <p>
                    <a
                      href="/#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      demo.blog-app.info
                    </a>
                  </p>
                </div>
                {/* End Single Address */}
                {/* Start Single Address */}
                <div className={styles.vpAddress}>
                  <h4>Phones</h4>
                  <p>
                    <a href="tel:+122555666999">+1 (22) 555 666 999</a>
                  </p>
                  <p>
                    <a href="tel:+122555999966">+1 (22) 555 999 966</a>
                  </p>
                </div>
                {/* End Single Address */}
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
