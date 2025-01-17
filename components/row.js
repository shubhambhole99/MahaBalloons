import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./row.module.css";

const Row = ({ className = "" }) => {
  return (
    <div className={[styles.row, className].join(" ")}>
      <div className={styles.imageOneContainerParent}>
        <div className={styles.imageOneContainer}>
          <div className={styles.img}>
            <Image
              className={styles.placeholderImageIcon}
              width={400}
              height={500}
              alt=""
              src="/placeholder-image-21@2x.png"
            />
            <Image
              className={styles.playButtonIcon}
              loading="lazy"
              width={64}
              height={64}
              alt=""
              src="/play-button1.svg"
            />
          </div>
          <div className={styles.img}>
            <Image
              className={styles.placeholderImageIcon}
              width={400}
              height={500}
              alt=""
              src="/placeholder-image-31@2x.png"
            />
            <Image
              className={styles.playButtonIcon}
              loading="lazy"
              width={64}
              height={64}
              alt=""
              src="/play-button1.svg"
            />
          </div>
        </div>
        <div className={styles.img2}>
          <Image
            className={styles.placeholderImageIcon2}
            loading="lazy"
            width={840}
            height={500}
            alt=""
            src="/placeholder-image-41@2x.png"
          />
          <Image
            className={styles.playButtonIcon2}
            width={64}
            height={64}
            alt=""
          />
        </div>
        <div className={styles.imageOneContainer}>
          <video className={styles.img3} controls>
            <source src />
          </video>
          <div className={styles.img}>
            <Image
              className={styles.placeholderImageIcon}
              width={400}
              height={500}
              alt=""
              src="/placeholder-image-61@2x.png"
            />
            <Image
              className={styles.playButtonIcon}
              loading="lazy"
              width={64}
              height={64}
              alt=""
              src="/play-button1.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.imgParent}>
        <div className={styles.img5}>
          <Image
            className={styles.placeholderImageIcon}
            width={400}
            height={500}
            alt=""
            src="/placeholder-image-71@2x.png"
          />
          <Image
            className={styles.playButtonIcon}
            loading="lazy"
            width={64}
            height={64}
            alt=""
            src="/play-button1.svg"
          />
        </div>
        <div className={styles.img5}>
          <Image
            className={styles.placeholderImageIcon}
            width={400}
            height={500}
            alt=""
            src="/placeholder-image-81@2x.png"
          />
          <Image
            className={styles.playButtonIcon}
            loading="lazy"
            width={64}
            height={64}
            alt=""
            src="/play-button1.svg"
          />
        </div>
        <div className={styles.img5}>
          <Image
            className={styles.placeholderImageIcon}
            width={400}
            height={500}
            alt=""
            src="/placeholder-image-91@2x.png"
          />
          <Image
            className={styles.playButtonIcon}
            loading="lazy"
            width={64}
            height={64}
            alt=""
            src="/play-button1.svg"
          />
        </div>
      </div>
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
};

export default Row;
