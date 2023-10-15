
import React, {useState} from "react";
// import Button from "../UI/button";
import { IoIosMenu } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { logoutUser } from "../../actions/auth";
import { connect } from "react-redux";
import Registercontainer from "../../containers/registercontainer/Registercontainer";
import './headerbtn.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// import { Redirect, withRouter } from "react-router-dom";


const HeaderBtn = ({isAuthenticated, styles , dispatch}) => {
const history = useHistory()
  const [modalAdd, setModalAdd]= useState(false)

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add(styles.active);
  };

  const handleLogout=()=>{

    dispatch(logoutUser(history))
    setModalAdd(false)
  }

  const handleAdd= () => {
    setModalAdd(true)
    }
    const toggleAddModal = () => setModalAdd(!modalAdd); 


  


  return (
    <div className="header__btn text-right">
      {!isAuthenticated ? <div className="desktop-button-wrapper  d-lg-block">
        {/* <Button type="link"  onClick={(e)=>handleAdd()} text="Join Now" btnStyle="white" /> */}
        <button type="button" className=" join-btn" onClick={(e)=>handleAdd()}>Join Now</button>
      </div> :
      <div onClick={handleLogout} className="logout-btn">
        <FiLogOut className="text-red" title="Logout"></FiLogOut>
      </div>
      }
       {modalAdd && <Registercontainer show={modalAdd} toggle={toggleAddModal}/>}
      <div className={`${styles.mobileButtonWrapper} d-block d-lg-none`}>
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <IoIosMenu />
        </button>
      </div>
      
    </div>
  );
};

// HeaderBtn.propTypes = {
//   styles: PropTypes.object
// };


function mapStateToProps(state) {
  return {
    
    isAuthenticated: state.auth.isAuthenticated,
    
  };
}
export default connect(mapStateToProps)(HeaderBtn);
