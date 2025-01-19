import Image from "next/image";
import BtnLearn from "./btn-learn";
import PropTypes from "prop-types";
import styles from "./card.module.css";

const Card = ({ className = "", placeholderImage, text, heading, text1 }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <img
        className={styles.placeholderImageIcon}
        loading="lazy"
        width={411}
        height={300}
        alt=""
        src={placeholderImage}
      />
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.container}>
            <div className={styles.text}>Category</div>
          </div>
          <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.content1}>
          <h3 className={styles.heading}>{heading}</h3>
          <div className={styles.text2}>{text1}</div>
        </div>
        <BtnLearn
          showBtnLearn
          btnLearnBorder="1px solid #7ab342"
          btnLearnBackgroundColor="unset"
          button="Read More"
          buttonHeight="unset"
          buttonDisplay="unset"
          buttonColor="#000"
          buttonWidth="unset"
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string.isRequired,
  text: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
};

export default Card;
