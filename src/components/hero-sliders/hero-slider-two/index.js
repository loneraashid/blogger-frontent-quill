import PropTypes from "prop-types";
import React from "react";
import Button from "../../UI/button";


import './style.css'

const HeroSliderTwoSingle = ({ data, styles, sliderClassName }) => {
  return (
    <div
      className={`${styles.slide} ${styles.sliderFixedHeight} ${
        styles.graBg1
      } ${sliderClassName ? sliderClassName : ""} d-flex align-items-center`}
    >
      <div className="container pt-xl-5">
        <div className="row justify-content-center align-items-center mt-xl-3">
      
          <div className="col-12 col-sm-6 col-lg-5">
            <div className={`${styles.content}  d-flex flex-column justify-content-center align-items-center`}>
              <div><h1 className="hero-text">{data.title}</h1></div>
             <div><p className="hero-text">{data.text}</p></div> 
              <div><Button type="link" url={data.url} text={data.btn} /></div>
                </div>
          </div>
     
        </div>
      </div>
    </div>
  );
};

HeroSliderTwoSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default HeroSliderTwoSingle;
