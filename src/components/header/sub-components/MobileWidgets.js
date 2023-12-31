import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaPhone,
  FaRegEnvelope
} from "react-icons/fa";

const MobileWidgets = ({ styles }) => {
  return (
    <div className={styles.offcanvasWidgetArea}>
      <div className={styles.offCanvasContactWidget}>
        <div className={styles.headerContactInfo}>
          <ul className={styles.headerContactInfoList}>
            
            <li>
              <FaRegEnvelope />{" "}
              <a href="mailto:admin@mediaanalysiskashmir.com">admin@mediaanalysiskashmir.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className={styles.offCanvasWidgetSocial}>
        <a
          href="//twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="//instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="//facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="//pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Pinterest"
        >
          <FaPinterestP />
        </a>
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
