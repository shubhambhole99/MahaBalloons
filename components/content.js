import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./content.module.css";

const Content = ({
  className = "",
  heading,
  heading1,
  headingMinWidth,
  text,
}) => {
  const headingStyle = useMemo(() => {
    return {
      minWidth: headingMinWidth,
    };
  }, [headingMinWidth]);

  return (
    <div className={[styles.content, className].join(" ")}>
      <b className={styles.heading}>{heading}</b>
      <div className={styles.content1}>
        <div className={styles.innerContentOne}>
          <h3 className={styles.heading1} style={headingStyle}>
            {heading1}
          </h3>
          <Image
            className={styles.icon}
            loading="lazy"
            width={34}
            height={34}
            alt=""
            src="/icon2@2x.png"
          />
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  headingMinWidth: PropTypes.string,
};

export default Content;
