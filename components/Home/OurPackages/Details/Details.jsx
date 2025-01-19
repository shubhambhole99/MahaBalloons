import React from "react";
import { FaCircle } from "react-icons/fa6";
import styles from "./style.module.scss";

function Details(props) {
  const { key, activity, details, feature_img } = props;
  return (
    <div className={styles.PackCardDetails933k} {...props}>
      <div className={styles.cardDetails}>
        {/* Uncomment and update if `feature_img` is used */}
        {/* <div className={styles.imaWrapper}>
          <img src={feature_img ? feature_img : cat1} alt="Feature" />
        </div> */}
        <div className={styles.details}>
          <div className={styles.secTitle}>
            <FaCircle size={6} /> {activity}
          </div>
          {/* Uncomment if `details` is needed */}
          {/* <p>{details}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Details;
