import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { logoutUser } from "../../../actions/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const MobileNavMenu = ({ styles, isAuthenticated,isAdmin, dispatch }) => {
const history= useHistory()
  const handleLogout=()=>{

    dispatch(logoutUser(history))
  }

  return (
    <nav className={styles.offcanvasNavigation} id="offcanvas-navigation">
      <ul>
        <li className={styles.menuItemHasChildren}>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          
        </li>

        <li className={styles.menuItemHasChildren}>
        <Link to={process.env.PUBLIC_URL + "/blogs"}>Blogs</Link>
          
        </li>
        
        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
        </li>
     
        {isAdmin && <li>
        <Link to={process.env.PUBLIC_URL + "/users"}>Manage Users</Link>
        </li>}

       {isAuthenticated &&  <li>
          <Link to={process.env.PUBLIC_URL + "/managepost"}>Manage Posts</Link>
        </li>}

       
        
        {isAuthenticated && <li>
          <span onClick={handleLogout} className='lougout-btn-mob'>Logout <FiLogOut className="text-red" title="Logout"></FiLogOut></span>
        </li>}
        
      </ul>
    </nav>
  );
};


function mapStateToProps(state) {
  return {
    
    isAuthenticated: state.auth.isAuthenticated,
    
  };
}

export default connect(mapStateToProps)(MobileNavMenu);

