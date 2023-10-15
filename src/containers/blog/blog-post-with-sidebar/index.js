import React, { useEffect } from "react";

import BlogSidebar from "../blog-sidebar";
import styles from "./BlogPostWithSidebar.module.scss";
import BlogContainer from "../../blogcontainer/BlogContainer";
import { connect } from "react-redux";
import { fetchBlog } from "../../../actions/blogAction";


const BlogPostWithSidebar = ({ dispatch, sidebarPosition, blogs }) => {

  useEffect(()=>{
    dispatch(fetchBlog())
  },[dispatch])


  return (
    <div className="voopo__blog__area pb--120 pt--100">
      <div className="container">
        <div className="row">
          <div
            className={` col-12 col-lg-8 ${
              sidebarPosition && sidebarPosition === "left"
                ? "order-1 order-lg-2"
                : ""
            }`}
          >
            <div className={styles.blogListWrapper}>

             <BlogContainer blogData={blogs}/>
            


            </div>
          </div>
          <div
            className={`col-12 col-lg-4 sm__mt--40 md__mt--40 ${
              sidebarPosition && sidebarPosition === "left"
                ? "order-2 order-lg-1"
                : ""
            } ${
              sidebarPosition && sidebarPosition === "left"
                ? styles.spaceRight
                : styles.spaceLeft
            }`}
          >
            <BlogSidebar blogData={blogs}/>
          </div>
        </div>
      </div>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    
    blogs: state.blog.blogData,
    
  };
}

export default connect(mapStateToProps)(BlogPostWithSidebar);


