import React, { useEffect, useState } from "react";
import Logo from "../../../components/header/Logo";
import Navigation from "../../../components/header/Navigation";
import HeaderBtn from "../../../components/header/HeaderBtn";
import MobileMenu from "../../../components/header/MobileMenu";
import styles from "./Header.module.scss";
import { connect } from "react-redux";
import { fetchMyProfile } from "../../../actions/auth";

const Header = ({isAuthenticated, profileData, dispatch}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    isAuthenticated && dispatch(fetchMyProfile())
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };


  return (
    <header
      className={`${styles.headerArea} ${
        scroll > headerTop ? styles.stick : ""
      }`}
    >
      <div className="container-xl px-lg-4">
        <div className="row align-items-center">
          <div className="col-6 col-lg-2">
            {/* logo */}
            <Logo />
          </div>
          <div className="col-lg-8 d-none d-lg-block">
            {/* navigation */}
            <Navigation isAuthenticated={isAuthenticated} isAdmin={profileData.isAdmin}/>
          </div>
          <div className="col-6 col-lg-2">
            {/* header button join now*/}
            <HeaderBtn  styles={styles} />
          </div>
        </div>
        {/* Mobile Menu */}
        <MobileMenu isAdmin={profileData.isAdmin} styles={styles} />
      </div>
    </header>
  );
};


function mapStateToProps(state) {
  return {
    
    isAuthenticated: state.auth.isAuthenticated,
    profileData: state.myprofile.profileData,
    
  };
}

export default connect(mapStateToProps)(Header);


