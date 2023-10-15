import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img className={"wd"} src={logo} />
      </Link>
    </div>
  );
};

export default Logo;
