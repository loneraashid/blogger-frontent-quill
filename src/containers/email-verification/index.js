import React from "react";
import styles from "./NotFoundContent.module.scss";
import Button from "../../components/UI/button";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { useEffect } from "react";
import { makeEmailVerified } from "../../actions/auth";
import { useState } from "react";
const EmailVerifyContent = ({dispatch}) => {
  const search = useLocation().search;
  const userid = new URLSearchParams(search).get("user");
  const history= useHistory()
const [isVerified, setIsVerified]= useState(false)


  useEffect(()=>{
      if (userid) {
          dispatch(makeEmailVerified( userid)).then(res=>{
            if (res) {
              setIsVerified(true)
            }else{
              setIsVerified(false)
            }
          })
      }else{
          history.push('/')
      }
  },[dispatch])


  return (

    <div className={`${styles.errorPageWrapper} d-flex align-items-center`}>
      <div className="container">
        <div className="row">
        <div className="col-lg-6 col-md-9 m-auto text-center">

{isVerified ?  <div
   className={`${styles.errorContentCentered} d-flex align-items-center justfy-content-center`}
 >
   <div className={styles.errorPageContentWrap}>
    
     <h3>Email Verification</h3>
     <p>
       Your email has been verified. You can login to your account now.
     </p>
     <Button type="link" text="Back to Home Page" url="/" />
   </div>
 </div>  :
 
 <div
 className={`${styles.errorContentCentered} d-flex align-items-center justfy-content-center`}
>
 <div className={styles.errorPageContentWrap}>
  
   <h3 className="alert-danger px-2 py-1">Something went wrong</h3>
   
   {/* <Button type="link" text="Back to Home Page" url="/" /> */}
 </div>
</div>}


</div>
        </div>
      </div>
    </div>
  );
};

export default connect()(EmailVerifyContent);
