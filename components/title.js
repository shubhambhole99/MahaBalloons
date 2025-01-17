import PropTypes from "prop-types";
import styles from "./title.module.css";

const Title = ({ className = "" }) => {
  return (
    <div className={[styles.title, className].join(" ")}>
      <div className={styles.sectionTitle}>
        <div className={styles.subheading}>Blog</div>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            See what our Happy Customers Have to Say!
          </h1>
          <div
            className={styles.text}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.button1}>Upload</div>
      </div>
      <div className={styles.button2}>
        <div className={styles.viewAll}>View All</div>
      </div>
    </div>
  );
};

Title.propTypes = {
  className: PropTypes.string,
};

export default Title;
