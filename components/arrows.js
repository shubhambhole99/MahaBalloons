import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./arrows.module.css";

const Arrows = ({ className = "", arrowsHeight, fearrowUp }) => {
  const arrowsStyle = useMemo(() => {
    return {
      height: arrowsHeight,
    };
  }, [arrowsHeight]);

  return (
    <div className={[styles.arrows, className].join(" ")} style={arrowsStyle}>
      <Image
        className={styles.fearrowUpIcon}
        loading="lazy"
        width={24}
        height={24}
        alt=""
        src={fearrowUp}
      />
    </div>
  );
};

Arrows.propTypes = {
  className: PropTypes.string,
  fearrowUp: PropTypes.string.isRequired,

  /** Style props */
  arrowsHeight: PropTypes.string,
};

export default Arrows;
