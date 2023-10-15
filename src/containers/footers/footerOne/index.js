import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { MdExpandLess } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import styles from "./Footer.module.scss";

import logoStyle from "../../../components/header/logo.css";

const Footer = ({ footerBg }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer
      className={`footer-area mt-5 ${
        footerBg === "white" ? styles.footer2 : ""
      }`}
    >
      <div
        className={`${styles.footerTop} ${
          footerBg === "white" ? "bg--cart-7" : "bg--cart-2"
        }`}
      >
        <div className="container">
          <div className="row">
            {/* Start Single Wedget */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className={styles.singleWidget}>
                <div className={logoStyle.wd}>
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    {/* <img className="wd" src={logo}/> */}
                  </Link>
                </div>
                <div className={styles.content}></div>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-12 col-sm-6 col-lg-2 offset-lg-1 xs__mt--40">
              <div className={styles.singleWidget}>
                <h2 className={styles.ftTitle}>Help Line</h2>
                <ul className={styles.ftContactLink}>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Single Wedget */}
            {/* Start Single Wedget */}
            <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12 sm__mt--40 md__mt--40">
              <div className={styles.singleWidget}>
                <h2 className={styles.ftTitle}>Info</h2>
                <ul className={styles.ftContactLink}>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/blogs"}>Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* End Single Wedget */}
          </div>
        </div>
      </div>
      <div
        className={`${styles.copyright}  ${
          footerBg === "white" ? "bg--cart-8" : "bg--cart-3"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6">
              <div className={styles.copyrightInner}>
                <span>
                  <p className="copyright-text">
                    &copy; Blog webapp {new Date().getFullYear()} Made with{" "}
                    <FaHeart /> by{" "}
                    <a
                      href="https://telegram.me/raashidzahoor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lone Raashid
                    </a>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <MdExpandLess />
      </button>
    </footer>
  );
};

Footer.propTypes = {
  footerBg: PropTypes.string,
};

export default Footer;
