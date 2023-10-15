import React from 'react'
import seminardata from '../../data/seminar/seminardata.json'
// import styles from "../blog-grid/blog-grid-one/BlogGrid.module.scss";
import BlogCard from './blogCard/BlogCard';
function BlogContainer({allseminar, blogData}) {
  return (
    <>
    <div className=''>
        <div className='row mb-3 mt-0'>

    
{blogData &&
              blogData.map((single, key) => {
                return (
                    <div className='col-12 col-md-6  mb-2' key={key}>
<BlogCard
                    data={single}
                    allseminar={true}
                    
                    sliderClass="swiper-slide"
                  />
                    </div>
                  
                );
              })}
                  </div>
    </div>
    </>
  )
}

export default BlogContainer