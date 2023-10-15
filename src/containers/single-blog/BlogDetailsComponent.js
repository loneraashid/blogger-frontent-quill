import React, { useEffect }  from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import SideBar from "./SideBar";
import { fetchBlog } from "../../actions/blogAction";



const BlogDetailsComponent = ({ sidebarPosition, blogs, dispatch}) => {


  const {id}= useParams()

  useEffect(()=>{
  
    dispatch(fetchBlog())
   
  },[dispatch])

  let singleBlog= blogs.filter(single=> single._id=== id)[0]

  return (
    <div className="page-wrapper pt--50 pb--110">
      {/*Service section start*/}
      <div className="service-section">
        <div className="container">
        
          {singleBlog ? <div className="row justify-content-center">
            <div
              className={`col-xl-7 col-lg-6 col-12 ${
                sidebarPosition && sidebarPosition === "left"
                  ? "order-1 order-lg-2"
                  : ""
              }`}
            >

<div>
              <h2 className='mb-4 singleblogtitle'>{singleBlog && singleBlog.title}</h2>
                 </div>
              <div className="service-details">
              
              
       
              
                <div className="service-gallery">
                  <img src={singleBlog && singleBlog.image} className="img-fluid" alt="post-image" />
                </div>

                <div className="content pt--30">
                  <div className="row">
                    <div className="col-12">
                      
                      <p>
                        {singleBlog && singleBlog.description}

                        
                        
                      </p>
                      
                    </div>
                 
                    
                  </div>
                  {/* <div className="row">
                    <Flighttab/>
                  </div> */}
                </div>
              </div>
            </div>
            <div
              className={`col-xl-4 col-lg-5 col-12 mt-lg-5 ${
                sidebarPosition && sidebarPosition === "right"
                  ? "order-2 order-lg-1"
                  : ""
              }`}
            >
            <SideBar post={singleBlog}/>
             
            </div>
          </div> :
          <h4 className="alert-warning">No post found!</h4>
          
          }
        </div>
      </div>
      {/*Service section end*/}
    </div>
  );
};


function mapStateToProps(state) {
  return{
   
    blogs: state.blog.blogData
  }
}
export default connect(mapStateToProps)(BlogDetailsComponent);
