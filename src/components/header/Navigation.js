import React from "react";
import styles from "./Navigation.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigation = ({isAuthenticated, isAdmin}) => {

  
  return (
    <nav>
      <ul className={styles.mainMenu}>
      <li>
          <Link to={process.env.PUBLIC_URL + "/blogs"}>Blogs</Link>
        </li>
      
     
        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
        </li>
        

        {/* dropdown menu */}
        {isAuthenticated && 
        <li className={styles.drop}>
        <Link to={""}>Dashboard <IoIosArrowDown/>
        </Link>
        <ul className={styles.dropdownMenu}>

       

          {isAdmin && <li>
            <Link to={process.env.PUBLIC_URL + "/users"}>
              Registered Users
            </Link>
          </li>}

          
          {isAuthenticated && <li>
            <Link to={process.env.PUBLIC_URL + "/managepost"}>
             Manage Posts
            </Link>
          </li>}




        </ul>
      </li>
        
        }
        
        
      
        
      </ul>
    </nav>
  );
};

export default Navigation;
