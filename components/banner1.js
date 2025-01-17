import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./banner1.module.css";

const Banner1 = ({
  className = "",
  bannerBackgroundImage,
  mahaBalloonAdventuresLogo,
}) => {
  const banner1Style = useMemo(() => {
    return {
      backgroundImage: bannerBackgroundImage,
    };
  }, [bannerBackgroundImage]);

  return (
    <div className={[styles.banner, className].join(" ")} style={banner1Style}>
      <div className={styles.topLinks}>
        <div className={styles.linkTwo}>Why Us</div>
        <div className={styles.innerLinks}>
          <div className={styles.linkFour}>Experiences</div>
          <Image
            className={styles.chevronDownIcon}
            width={24}
            height={24}
            alt=""
            src="/chevron-down.svg"
          />
        </div>
        <div className={styles.linkTwo1}>Things To Do In Dubai</div>
        <div className={styles.linkTwo2}>Testimonial</div>
        <div className={styles.linkTwo3}>Blogs</div>
        <div className={styles.innerLinks}>
          <div className={styles.linkFour1}>Contact Us</div>
          <Image
            className={styles.chevronDownIcon}
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/chevron-down.svg"
          />
        </div>
      </div>
      <a className={styles.a}>0</a>
      <div className={styles.frameParent}>
        <div className={styles.accountLoginParent}>
          <div className={styles.accountLogin}>
            <Image
              className={styles.wishIcon}
              loading="lazy"
              width={44}
              height={44}
              alt=""
              src="/wish1.svg"
            />
            <Image
              className={styles.wishIcon}
              loading="lazy"
              width={44}
              height={44}
              alt=""
              src="/account1.svg"
            />
          </div>
          <div className={styles.imagePlaceholder}>
            <Image
              className={styles.svgIcon}
              loading="lazy"
              width={22}
              height={22}
              alt=""
              src="/svg.svg"
            />
          </div>
        </div>
        <div className={styles.loginButton}>
          <div className={styles.btnLogin}>
            <div className={styles.button}>B2B Login</div>
          </div>
        </div>
      </div>
      <div className={styles.mahaBalloonAdventuresLogo2Parent}>
        <Image
          className={styles.mahaBalloonAdventuresLogo2}
          loading="lazy"
          width={140}
          height={140}
          alt=""
          src={mahaBalloonAdventuresLogo}
        />
        <div className={styles.heroContent}>
          <h1 className={styles.mediumLengthHero}>Blogs</h1>
          <div className={styles.loremIpsumDolor}>Home - Blogs</div>
        </div>
      </div>
    </div>
  );
};

Banner1.propTypes = {
  className: PropTypes.string,
  mahaBalloonAdventuresLogo: PropTypes.string.isRequired,

  /** Style props */
  bannerBackgroundImage: PropTypes.string,
};

export default Banner1;
