import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
// import { IoIosSearch } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

import styles from "./BlogSidebar.module.scss";

const BlogSidebar = ({ blogData }) => {
  let recentPost = blogData.slice(0, 4).reverse();
  let trendingPost = blogData
    .filter((e) => e.category[0] === "Trending")
    .slice(0, 4)
    .reverse();
  return (
    <div className="blogSidebar">
      {/* Start Serarch */}
      {/* <div className={`${styles.vpWidget} ${styles.search} mb--60`}>
        <input type="text" placeholder="Search Here" />
        <button>
          <IoIosSearch />
        </button>
      </div> */}
      {/* End Serarch */}

      {/* Start Newsleter */}
      <div className={`${styles.vpWidget} ${styles.newsletter} mb--60`}>
        <h4>Follow Us</h4>
        <div className="col-12">
          <div className="pt-2">
            <ul className={styles.blogsocialIcon}>
              <li>
                <Link to={process.env.PUBLIC_URL + "#/"}>
                  <IoLogoTwitter />
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "#/"}>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "#/"}>
                  <AiFillInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End Newsleter */}
      {/* Start Recent Post */}
      <div className={`${styles.vpWidget} ${styles.recentPostWrap} mb--60`}>
        <Tab.Container defaultActiveKey="recent">
          <Nav
            variant="pills"
            className={`${styles.voopoNav} nav justify-content-center`}
          >
            <Nav.Item className={styles.navItem}>
              <Nav.Link eventKey="recent">Recent</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.navItem}>
              <Nav.Link eventKey="trending">Trending</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="recent" className={styles.singleTabContent}>
              {recentPost &&
                recentPost.map((single) => (
                  <div key={single._id} className={styles.recentPost}>
                    <div className={styles.thumb}>
                      <Link to={process.env.PUBLIC_URL + "/blog/" + single._id}>
                        <img src={single.image} alt="post-img" />
                      </Link>
                    </div>
                    <div className={styles.content}>
                      <h4>
                        <Link
                          to={process.env.PUBLIC_URL + "/blog/" + single._id}
                        >
                          {single.title}
                        </Link>
                      </h4>
                      <span>
                        {new Date(single.createdAt).toLocaleString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
            </Tab.Pane>
            <Tab.Pane eventKey="trending" className={styles.singleTabContent}>
              {trendingPost &&
                trendingPost.map((single) => (
                  <div key={single._id} className={styles.recentPost}>
                    <div className={styles.thumb}>
                      <Link to={process.env.PUBLIC_URL + "/blog/" + single._id}>
                        <img src={single.image} alt="trending-post-img" />
                      </Link>
                    </div>
                    <div className={styles.content}>
                      <h4>
                        <Link
                          to={process.env.PUBLIC_URL + "/blog/" + single._id}
                        >
                          {single.title}
                        </Link>
                      </h4>
                      <span>
                        {new Date(single.createdAt).toLocaleString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
      {/* End Recent Post */}
    </div>
  );
};

export default BlogSidebar;
