import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./slide.module.css";

const Slide = ({
  className = "",
  slideMinWidth,
  slideContentBackgroundImage,
  perfumes,
  perfumesDisplay,
  perfumesMinWidth,
  playButton,
}) => {
  const slideStyle = useMemo(() => {
    return {
      minWidth: slideMinWidth,
    };
  }, [slideMinWidth]);

  const slideContentStyle = useMemo(() => {
    return {
      backgroundImage: slideContentBackgroundImage,
    };
  }, [slideContentBackgroundImage]);

  const perfumesStyle = useMemo(() => {
    return {
      display: perfumesDisplay,
      minWidth: perfumesMinWidth,
    };
  }, [perfumesDisplay, perfumesMinWidth]);

  return (
    <div className={[styles.slide, className].join(" ")} style={slideStyle}>
      <div className={styles.slideContent} style={slideContentStyle}>
        <div className={styles.perfumes}>
          “Borem ipsum dolor sit amet, consectetur adipiscing elit Nunc
          vulputate. Borem ipsum dolor sit amet.”
        </div>
        <div className={styles.slideInfo}>
          <div className={styles.perfumes1} style={perfumesStyle}>
            {perfumes}
          </div>
        </div>
        <Image
          className={styles.playButtonIcon}
          loading="lazy"
          width={44}
          height={44}
          alt=""
          src={playButton}
        />
      </div>
    </div>
  );
};

Slide.propTypes = {
  className: PropTypes.string,
  perfumes: PropTypes.string,
  playButton: PropTypes.string.isRequired,

  /** Style props */
  slideMinWidth: PropTypes.string,
  slideContentBackgroundImage: PropTypes.string,
  perfumesDisplay: PropTypes.string,
  perfumesMinWidth: PropTypes.string,
};

export default Slide;
