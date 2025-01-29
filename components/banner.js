import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./banner.module.css";
import { useRouter } from "next/navigation";
import FrameComponent from "./frame-component";
const Banner = ({
  className = "",
  bannerBackgroundImage,
  mahaBalloonAdventuresLogo,
  navigationWidth,
  linksContainerAlignSelf,
  linksContainerWidth,
  linksContainerFlex,
  linkTwoWidth,
  linkTwoDisplay,
  mediumLengthHeroHeadlineGoes,
  loremIpsumDolorSitAmetConsect,
  wish,
  account,
}) => {
  let router=useRouter();
  const bannerStyle = useMemo(() => {
    return {
      backgroundImage: bannerBackgroundImage,
    };
  }, [bannerBackgroundImage]);

  const navigationStyle = useMemo(() => {
    return {
      width: navigationWidth,
    };
  }, [navigationWidth]);

  const linksContainerStyle = useMemo(() => {
    return {
      alignSelf: linksContainerAlignSelf,
      width: linksContainerWidth,
      flex: linksContainerFlex,
    };
  }, [linksContainerAlignSelf, linksContainerWidth, linksContainerFlex]);

  const linkTwoStyle = useMemo(() => {
    return {
      width: linkTwoWidth,
      display: linkTwoDisplay,
    };
  }, [linkTwoWidth, linkTwoDisplay]);

  return (<>
    <div className={[styles.banner, className].join(" ")} style={bannerStyle}>
      <div
      style={{height:'200px'}}
      >


      </div>
      
      <div className={styles.frameParent}>
      
        <div className={styles.heroContent}>
          <h1 className={styles.mediumLengthHero}>
            {mediumLengthHeroHeadlineGoes}
          </h1>
          <div className={styles.loremIpsumDolor}>
            {loremIpsumDolorSitAmetConsect}
          </div>
        </div>
      </div>
    
    </div>
    </>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
  mahaBalloonAdventuresLogo: PropTypes.string.isRequired,
  mediumLengthHeroHeadlineGoes: PropTypes.string,
  loremIpsumDolorSitAmetConsect: PropTypes.string,
  wish: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,

  /** Style props */
  bannerBackgroundImage: PropTypes.string,
  navigationWidth: PropTypes.string,
  linksContainerAlignSelf: PropTypes.string,
  linksContainerWidth: PropTypes.string,
  linksContainerFlex: PropTypes.string,
  linkTwoWidth: PropTypes.string,
  linkTwoDisplay: PropTypes.string,
};

export default Banner;
