import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./content1.module.css";

const Content1 = ({
  className = "",
  heading,
  innerContentTwoHeight,
  heading1,
  headingAlignSelf,
  headingDisplay,
  headingMinHeight,
  text,
}) => {
  const innerContentTwoStyle = useMemo(() => {
    return {
      height: innerContentTwoHeight,
    };
  }, [innerContentTwoHeight]);

  const heading1Style = useMemo(() => {
    return {
      alignSelf: headingAlignSelf,
      display: headingDisplay,
      minHeight: headingMinHeight,
    };
  }, [headingAlignSelf, headingDisplay, headingMinHeight]);

  return (
    <div className={[styles.content, className].join(" ")}>
      <b className={styles.heading}>{heading}</b>
      <div className={styles.content1}>
        <div className={styles.innerContentTwo} style={innerContentTwoStyle}>
          <h3 className={styles.heading1} style={heading1Style}>
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

Content1.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  innerContentTwoHeight: PropTypes.string,
  headingAlignSelf: PropTypes.string,
  headingDisplay: PropTypes.string,
  headingMinHeight: PropTypes.string,
};

export default Content1;
