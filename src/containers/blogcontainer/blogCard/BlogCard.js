import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import styles from './blogcard.module.scss'

const BlogCard = ({ data,  allseminar }) => {


  return (
    <div
      
    >
      <div className={styles.blog}>
        <div className={`${styles.thumb} event-img`}>
          <Link to={'/blog/'+data._id}>
            <img
              src={data.image}
              alt="blog-img"
            />
          </Link>
        </div>
        <div className={styles.blogInner}>
          <div className={allseminar ? `p-3 ${styles.content}` : `${styles.content}`}>
          <div className="row">
            <div className="col-12">
            <h3 className="m-0 p-0 blog-title mb-2">
              <Link to={process.env.PUBLIC_URL +'/blog/'+ data._id}>{data.title}</Link>
            </h3>
            </div>
            
          
          </div>
          {/* <span className="league-level badge badge-info">Level: 2</span> */}
          
            <p> <AiOutlineCalendar></AiOutlineCalendar> <span>
              Posted : {new Date(data.createdAt).toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'})} 
            </span></p>
            <p> <AiOutlineEdit></AiOutlineEdit> <span>
              Author : {data.author.name} 
            </span></p>

            <p className="text-justify my-2 blog-des">
            {data.description.slice(0,200)+'...'}
              </p>


              <Link
            className={styles.readmoreBtn}
            to={process.env.PUBLIC_URL +'/blog/'+ data._id}
          >
            Read More
          </Link>
          </div>
       
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default BlogCard;
