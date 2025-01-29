import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./header1.module.css";
import FrameComponent from "./frame-component";

const Header1 = ({ className = "" }) => {
  return (<>
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.banner}>
        <div className="navbarspace"></div>
        <header className={styles.mahaBalloonAdventuresLogo2Parent}>
 
        </header>
        <div className={styles.hero}>
          <h1 className={styles.mediumLengthHero}>Things To Do In Dubai</h1>
          <div className={styles.loremIpsumDolor}>
            Home - Things To Do In Dubai
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
