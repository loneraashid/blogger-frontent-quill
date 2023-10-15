import React from "react";
import styles from "./AboutContentOne.module.scss";
import SectionTitleTwo from "../../../components/UI/section-title/section-title-two";
import aboutContent from "../../../data/about-content/about-content-one.json";

const AboutContentOne = () => {
  return (
    <div className={`${styles.eventAboutArea} position-relative bg--cart-11`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-5 sm__mt--40">
            <div className="aboutInner">
              <SectionTitleTwo
                title={aboutContent.title}
                text={aboutContent.subTitle}
              />
              <div dangerouslySetInnerHTML={{ __html: aboutContent.content }} />
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-7">
      <div className={styles.aboutThumb}>
        <img
          src={require("./../../../assets/images/mission.png")}
          alt="img12"
        />
      </div>
      </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default AboutContentOne;
