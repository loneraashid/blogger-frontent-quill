import React from "react";
import styles from "./ContactFaqOne.module.scss";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "../../../components/UI/button";
import { IoIosArrowRoundDown } from "react-icons/io";

const ContactFaqOne = () => {
  return (
    <div className="tennisleague__faq__area pb--120 bg--white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Accordion defaultActiveKey="0" className={styles.panoraAccordion}>
              <Card className={styles.card}>
                <Card.Header className={styles.accHeader}>
                  <h5>
                    <Accordion.Toggle variant="link" eventKey="0">
                      How to register?{" "}
                      <span>
                        <IoIosArrowRoundDown />
                      </span>
                    </Accordion.Toggle>
                  </h5>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.cardBody}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor omnis libero recusandae similique veniam dolorum dicta. Officia repellendus quae quibusdam voluptatum.
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <Card.Header className={styles.accHeader}>
                  <h5>
                    <Accordion.Toggle variant="link" eventKey="1">
                    Lorem ipsum dolor sit amet?{" "}
                      <span>
                        <IoIosArrowRoundDown />
                      </span>
                    </Accordion.Toggle>
                  </h5>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <div className={styles.cardBody}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus provident exercitationem sunt ipsum. Beatae nulla exercitationem ut ratione optio voluptate non fuga, qui ab. Hic repellendus, dolorem earum cupiditate quam ut quasi.
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <Card.Header className={styles.accHeader}>
                  <h5>
                    <Accordion.Toggle variant="link" eventKey="2">
                    Lorem ipsum dolor sit amet?{" "}
                      <span>
                        <IoIosArrowRoundDown />
                      </span>
                    </Accordion.Toggle>
                  </h5>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <div className={styles.cardBody}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, reprehenderit sed debitis cumque excepturi deleniti laborum ipsum vel maiores quas rem dignissimos repellat eligendi nostrum adipisci. Quo placeat magni accusamus corrupti quas? Rerum, quas repellendus fugiat modi odio ducimus quod iste corporis.
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <Card.Header className={styles.accHeader}>
                  <h5>
                    <Accordion.Toggle variant="link" eventKey="3">
                      What is the cost?{" "}
                      <span>
                        <IoIosArrowRoundDown />
                      </span>
                    </Accordion.Toggle>
                  </h5>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <div className={styles.cardBody}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nisi labore in?
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="col-12 col-lg-6 sm__mt--40 md__mt--40 xs__mt--40">
            <div className={styles.faqInner}>
              <div className={styles.content}>
                <h2>Have Any Other Questions?</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quasi earum eius deserunt magni nesciunt.
                </p>
                <div className={styles.inputBox}>
                  <input type="email" placeholder="Enter your email address" />
                  <textarea
                    placeholder="Type your Question."
                    defaultValue={""}
                  />
                  <div className={styles.qusBtn}>
                    <Button type="button" text="Send" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFaqOne;
