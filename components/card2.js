import { useMemo } from "react";
import Image from "next/image";
import BtnLearn from "./btn-learn";
import PropTypes from "prop-types";
import styles from "./card2.module.css";

const Card2 = ({
  className = "",
  showCard,
  cardWidth,
  cardMinWidth,
  cardGridColumn,
  cardGridRow,
  placeholderImage,
  text,
  heading,
  headingMargin,
  text1,
  textAlignSelf,
}) => {
  const cardStyle = useMemo(() => {
    return {
      width: cardWidth,
      minWidth: cardMinWidth,
      gridColumn: cardGridColumn,
      gridRow: cardGridRow,
    };
  }, [cardWidth, cardMinWidth, cardGridColumn, cardGridRow]);

  const heading2Style = useMemo(() => {
    return {
      margin: headingMargin,
    };
  }, [headingMargin]);

  const text1Style = useMemo(() => {
    return {
      alignSelf: textAlignSelf,
    };
  }, [textAlignSelf]);

  return (
    showCard && (
      <div className={[styles.card, className].join(" ")} style={cardStyle}>
        <Image
          className={styles.placeholderImageIcon}
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
            <div className={styles.heading} style={heading2Style}>
              {heading}
            </div>
            <div className={styles.text2} style={text1Style}>
              {text1}
            </div>
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
    )
  );
};

Card2.propTypes = {
  className: PropTypes.string,
  showCard: PropTypes.bool,
  placeholderImage: PropTypes.string.isRequired,
  text: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,

  /** Style props */
  cardWidth: PropTypes.string,
  cardMinWidth: PropTypes.string,
  cardGridColumn: PropTypes.string,
  cardGridRow: PropTypes.string,
  headingMargin: PropTypes.string,
  textAlignSelf: PropTypes.string,
};

export default Card2;
