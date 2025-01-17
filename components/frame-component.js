import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";
import { useRouter } from "next/navigation";
const FrameComponent = ({ className = "", mahaBalloonAdventuresLogo="/maha-balloon-adventures-logo-2@2x.png" }) => {
    let router=useRouter();
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.mahaBalloonAdventuresLogo2Wrapper}>
        
        <Image
        style={{cursor:"pointer"}}
        onClick={() => router.push("/")}
          className={styles.mahaBalloonAdventuresLogo2}
          loading="lazy"
          width={140}
          height={140}
          alt=""
          src={mahaBalloonAdventuresLogo}
        />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.linkTwoParent}>
          <div style={{cursor:"pointer"}} onClick={() => router.push("/en/why-us")} className={styles.linkTwo}>Why Us</div>
          <div className={styles.linkFourParent}>
            <div style={{cursor:"pointer"}} onClick={() => router.push("/en/experiences")} className={styles.linkFour}>Experiences</div>
            <Image
              className={styles.chevronDownIcon}
              width={24}
              height={24}
              alt=""
              src="/chevron-down.svg"
            />
          </div>
          <div style={{cursor:"pointer"}} onClick={() => router.push("/en/things-to-do")} className={styles.linkTwo1}>Things To Do In Dubai</div>
          <div style={{cursor:"pointer"}} onClick={() => router.push("/en/testimonial")} className={styles.linkTwo2}>Testimonial</div>
          <div style={{cursor:"pointer"}} onClick={() => router.push("/en/blogs")} className={styles.linkTwo3}>Blogs</div>
          <div style={{cursor:"pointer"}}  className={styles.linkFourParent}>
            <div onClick={() => router.push("/en/contact-us")}className={styles.linkFour1}>Contact Us</div>
            <Image
              className={styles.chevronDownIcon}
              width={24}
              height={24}
              alt=""
              src="/chevron-down.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameGroup}>
          <div className={styles.frameDiv}>
            <div className={styles.wishParent}>
              <Image
                className={styles.wishIcon}
                width={44}
                height={44}
                alt=""
                src="/wish.svg"
              />
              <Image
                className={styles.wishIcon}
                width={44}
                height={44}
                alt=""
                src="/account.svg"
              />
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.svgParent}>
                <Image
                  className={styles.svgIcon}
                  width={22}
                  height={22}
                  alt=""
                  src="/svg.svg"
                />
                <a className={styles.businessShortDesc}>0</a>
              </div>
            </div>
          </div>
          <div className={styles.btnLoginWrapper}>
            <div className={styles.btnLogin}>
              <div className={styles.button}>B2B Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  mahaBalloonAdventuresLogo: PropTypes.string.isRequired,
};

export default FrameComponent;
