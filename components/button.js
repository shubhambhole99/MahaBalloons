import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({
  className = "",
  darkMode = false,
  iconPosition = "No icon",
  small = false,
  style = "Primary",
  button,
  buttonColor,
}) => {
  const button1Style = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className={[styles.root, className].join(" ")}
      data-darkMode={darkMode}
      data-iconPosition={iconPosition}
      data-small={small}
      data-style={style}
    >
      <div className={styles.button} style={button1Style}>
        {button}
      </div>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  button: PropTypes.string,

  /** Variant props */
  darkMode: PropTypes.bool,
  iconPosition: PropTypes.number,
  small: PropTypes.bool,
  style: PropTypes.string,

  /** Style props */
  buttonColor: PropTypes.string,
};

export default Button;
