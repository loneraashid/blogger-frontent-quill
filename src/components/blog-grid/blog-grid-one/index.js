import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";

const BlogGridSingle = ({ data, styles, sliderClass }) => {
  return (
    <div
      className={`col-12 col-sm-6 col-lg-4 ${sliderClass ? sliderClass : ""}`}
    >
      <div className={styles.blog}>
        <div className={`${styles.thumb} event-img`}>
          <Link to={process.env.PUBLIC_URL + data.url}>
            <img
              src={require("./../../../assets/images/blog-img/" + data.image)}
              alt=""
            />
          </Link>
        </div>
        <div className={styles.blogInner}>
          <div className={styles.content}>
            <h2 className="m-0 p-0">
              <Link to={process.env.PUBLIC_URL + data.url}>{data.title}</Link>
            </h2>

            <p className="mt-0">
              <span>
                <AiOutlineCalendar></AiOutlineCalendar>
                Starts On: {data.date}
              </span>
              <br />

              <span>
                {/* {data.date}  */}
                Author :{" "}
                <Link to={process.env.PUBLIC_URL + data.authorUrl}>
                  {data.author}
                </Link>
              </span>
            </p>
            <span style={{ lineHeight: 1 }}>
              {" "}
              <FaMapMarkerAlt></FaMapMarkerAlt> <span>{data.address}</span>
            </span>
            <br />

            <Link to={process.env.PUBLIC_URL + data.url}>
              <button className="btn btn-danger mt-3 p-0 px-2">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogGridSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object,
};

export default BlogGridSingle;
