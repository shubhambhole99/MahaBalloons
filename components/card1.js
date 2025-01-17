import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./card1.module.css";

const Card1 = ({
  className = "",
  placeholderImage,
  detailsPadding,
  heading,
  heading1,
  text,
}) => {
  const detailsStyle = useMemo(() => {
    return {
      padding: detailsPadding,
    };
  }, [detailsPadding]);

  return (
    <div className={[styles.card, className].join(" ")}>
      <Image
        className={styles.placeholderImageIcon}
        width={400}
        height={300}
        alt=""
        src={placeholderImage}
      />
      <div className={styles.content}>
        <div className={styles.details} style={detailsStyle}>
          <div className={styles.plan}>
            <div className={styles.heading}>{heading}</div>
            <div className={styles.heading1}>{heading1}</div>
          </div>
          <div className={styles.text}>{text}</div>
          <div className={styles.details1}>
            <div className={styles.content1}>
              <div className={styles.text1}>Time</div>
              <div className={styles.text}>45 - 60 Minutes</div>
            </div>
            <div className={styles.content1}>
              <div className={styles.text1}>Location</div>
              <div className={styles.text}>
                Margham Dubai, United Arab Emirates
              </div>
            </div>
          </div>
        </div>
        <div className={styles.action}>
          <div className={styles.view}>
            <div className={styles.question}>View Details</div>
            <Image
              className={styles.icon}
              width={32}
              height={32}
              alt=""
              src="/icon3.svg"
            />
          </div>
          <div className={styles.reserve}>
            <div className={styles.question1}>Reserve</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string.isRequired,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  detailsPadding: PropTypes.string,
};

export default Card1;
