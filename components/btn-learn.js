import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./btn-learn.module.css";

const BtnLearn = ({
  className = "",
  showBtnLearn,
  btnLearnBorder,
  btnLearnBackgroundColor,
  button,
  buttonHeight,
  buttonDisplay,
  buttonColor,
  buttonWidth,
}) => {
  const btnLearnStyle = useMemo(() => {
    return {
      border: btnLearnBorder,
      backgroundColor: btnLearnBackgroundColor,
    };
  }, [btnLearnBorder, btnLearnBackgroundColor]);

  const buttonStyle = useMemo(() => {
    return {
      height: buttonHeight,
      display: buttonDisplay,
      color: buttonColor,
      width: buttonWidth,
    };
  }, [buttonHeight, buttonDisplay, buttonColor, buttonWidth]);

  return (
    showBtnLearn && (
      <div
        className={[styles.btnLearn, className].join(" ")}
        style={btnLearnStyle}
      >
        <div className={styles.button} style={buttonStyle}>
          {button}
        </div>
      </div>
    )
  );
};

BtnLearn.propTypes = {
  className: PropTypes.string,
  showBtnLearn: PropTypes.bool,
  button: PropTypes.string,

  /** Style props */
  btnLearnBorder: PropTypes.string,
  btnLearnBackgroundColor: PropTypes.string,
  buttonHeight: PropTypes.string,
  buttonDisplay: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonWidth: PropTypes.string,
};

export default BtnLearn;
