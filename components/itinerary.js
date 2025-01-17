import Image from "next/image";
import Arrows from "./arrows";
import Button from "./button";
import PropTypes from "prop-types";
import styles from "./itinerary.module.css";

const Itinerary = ({ className = "" }) => {
  return (
    <div className={[styles.itinerary, className].join(" ")}>
      <div className={styles.sectionTitle}>
        <div className={styles.subheading}>Safety Measures</div>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Why You Should Fly with Maha Hot Air Balloon Dubai
          </h1>
        </div>
      </div>
      <div className={styles.container}>
        <Image
          className={styles.placeholderImageIcon}
          loading="lazy"
          width={500}
          height={500}
          alt=""
          src="/placeholder-image-23@2x.png"
        />
        <div className={styles.contentTop}>
          <div className={styles.content1}>
            <div className={styles.titles}>
              <b className={styles.date}>01</b>
              <h1 className={styles.heading1}>Unforgettable Experiences</h1>
            </div>
            <div className={styles.description}>
              At Maha Hot Air Balloon, every flight is a memorable adventure.
              Our hot air balloon rides offer breathtaking views of the Dubai
              desert, letting you witness stunning sunrises and vast golden
              dunes from a unique perspective. Whether celebrating a special
              occasion, planning a romantic getaway, or seeking adventure, we
              have you covered.
            </div>
            <div className={styles.sliderButtons}>
              <Image
                className={styles.arrowsIcon}
                loading="lazy"
                width={48}
                height={48}
                alt=""
                src="/arrows1@2x.png"
              />
              <Arrows arrowsHeight="unset" fearrowUp="/fearrowup1@2x.png" />
            </div>
          </div>
          <div className={styles.actions}>
            <Button
              darkMode={false}
              iconPosition="No icon"
              small={false}
              style="Secondary"
              button="Button"
              buttonColor="#000"
            />
            <div className={styles.button}>
              <div className={styles.button1}>Button</div>
              <Image
                className={styles.iconChevronRight}
                width={24}
                height={24}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Itinerary.propTypes = {
  className: PropTypes.string,
};

export default Itinerary;
