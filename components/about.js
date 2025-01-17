import Image from "next/image";
import Button from "./button";
import PropTypes from "prop-types";
import styles from "./about.module.css";

const About = ({ className = "" }) => {
  return (
    <section className={[styles.about, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.column}>
            <h1 className={styles.mediumLengthHero}>
              Maha Balloon Adventures : The Best Hot Air Balloon Operator in
              Dubai
            </h1>
          </div>
          <div className={styles.column1}>
            <div className={styles.loremIpsumDolor}>
              Fly High: Dubai’s Ultimate Balloon Experience
            </div>
            <div className={styles.loremIpsumDolor1}>
              Are you ready to go beyond the ordinary? Elevate your adventure
              with an exhilarating hot air balloon ride that takes you 300
              meters above Dubai’s stunning desert landscape! Marvel at the
              endless golden dunes and enjoy a breathtaking view of the tranquil
              desert, stretching as far as the eye can see. This ride is not
              just an attraction; it’s a once-in-a-lifetime experience set in
              the serene beauty of the Arabian Desert. Bring your friends and
              create unforgettable memories on Dubai’s most thrilling desert
              balloon adventure – and the best part?
            </div>
            <div className={styles.actions}>
              <Button
                darkMode={false}
                iconPosition="No icon"
                small={false}
                style="Primary"
                button="Button"
                buttonColor="#fff"
              />
              <Button
                darkMode={false}
                iconPosition="No icon"
                small={false}
                style="Secondary"
                button="Button"
                buttonColor="#000"
              />
            </div>
          </div>
        </div>
        <div className={styles.logos}>
          <div className={styles.logos1}>
            <Image
              className={styles.logosIcon}
              width={120}
              height={48}
              alt=""
            />
            <Image
              className={styles.logosIcon}
              width={120}
              height={48}
              alt=""
            />
            <Image
              className={styles.logosIcon}
              width={120}
              height={48}
              alt=""
            />
            <Image
              className={styles.logosIcon}
              width={120}
              height={48}
              alt=""
            />
          </div>
          <div className={styles.logos2}>
            <Image
              className={styles.tripadvisorLogopngIcon}
              loading="lazy"
              width={138}
              height={55}
              alt=""
              src="/tripadvisor-logopng@2x.png"
            />
            <Image
              className={styles.makemytripLogosvgIcon}
              loading="lazy"
              width={131}
              height={55}
              alt=""
              src="/makemytrip-logosvg.svg"
            />
            <Image
              className={styles.bookingcomLogosvgIcon}
              loading="lazy"
              width={135}
              height={55}
              alt=""
              src="/bookingcom-logosvg.svg"
            />
            <Image
              className={styles.bookingcomLogosvgIcon}
              loading="lazy"
              width={135}
              height={55}
              alt=""
              src="/viator-logosvg.svg"
            />
          </div>
        </div>
      </div>
      <Image
        className={styles.placeholderLightboxIcon}
        controls
        width={1280}
        height={640}
        alt=""
        src="/placeholder-lightbox.svg"
      />
        {/* <source src /> */}
      
    </section>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
