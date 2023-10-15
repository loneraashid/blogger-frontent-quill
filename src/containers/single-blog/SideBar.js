import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./blogSidebar.module.scss";

const SideBar = ({post}) => {


  return (
    <>
<div className={styles.sidebarWrapper}>
      <div className="mt-lg-4">
        <ul className={styles.sidebarList}>
          <li>
            <h6 className="font-weight-bold m-0 p-0">Post Date</h6>
            
              
              <span className="m-0 pt-0 pb-3 text-secondary">{new Date(post.createdAt).toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'})}</span>
            
          </li>
          
          
          <li>
          <h6 className="font-weight-bold m-0 p-0">Author</h6>
            
              
            <span className="m-0 pt-0 pb-3 text-secondary">{post.author.name}</span>
          </li>

          

        </ul>

        
      </div>
    
    </div>
    </>
  );
};


function mapStateToProps(state) {
  return {
    
    isAuthenticated: state.auth.isAuthenticated,
   
    
    
  };
}

export default connect(mapStateToProps)(SideBar);

