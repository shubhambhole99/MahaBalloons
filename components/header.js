import Image from "next/image";
import FrameComponent from "./frame-component";
import PropTypes from "prop-types";
import styles from "./header.module.css";

const Header = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.banner}>
        <FrameComponent mahaBalloonAdventuresLogo="/maha-balloon-adventures-logo-2@2x.png" />
        <div className={styles.mediumLengthHeroHeadlineGoParent}>
          <h1 className={styles.mediumLengthHero}>Why Us</h1>
          <div className={styles.loremIpsumDolor}>Home - Why Us</div>
        </div>
      </div>
      <div className={styles.navLinkDropdown}>
        <div className={styles.linkFour}>Merchandise</div>
        <Image
          className={styles.chevronDownIcon}
          width={24}
          height={24}
          alt=""
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
