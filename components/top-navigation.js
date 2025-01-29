import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./top-navigation.module.css";
import FrameComponent from "./frame-component";

const TopNavigation = ({ className = "" }) => {
  return (
    <section className={[styles.topNavigation, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.banner}>
          {/* <FrameComponent/> */}
          <div className="navbarspace"
          ></div>
          <div className={styles.mediumLengthHeroHeadlineGoParent}>
            <h1 className={styles.mediumLengthHero}>Testimonials</h1>
            <div className={styles.loremIpsumDolor}>Home - Testimonials</div>
          </div>
        </div>
    
      </div>
    </section>
  );
};

TopNavigation.propTypes = {
  className: PropTypes.string,
};

export default TopNavigation;
