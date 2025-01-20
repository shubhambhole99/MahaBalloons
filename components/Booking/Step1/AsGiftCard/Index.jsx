import React, { useEffect } from "react";
import styles from "./styles.module.scss";
function Index(props) {
  const { adultAmount, adultPrice, childAmount, childPrice, checkOutAmont } =
    props;
  useEffect(() => {
    let totalAdultsPrice = adultPrice * adultAmount;
    let totalChildPrice = childPrice * childAmount;
    props?.setCheckOutAmount(totalAdultsPrice + totalChildPrice);
  }, [adultAmount, childAmount]);
  return (
    <div  className={styles.GiftCard392}>
    <div  className={`${styles.secTitle} ${styles.mt40}`}>Customize Your Gift Card Value</div>
    <p className={`${styles.para} ${styles.mt3}`}>
      You’re in control! Decide the value of your gift card. Simply select the
      amount that suits your generosity. Need help calculating? Consider the
      unit prices of our offerings to tailor the perfect amount for your gift.
    </p>
    <div className={`${styles.guestInfo} ${styles.mt40}`}>
      <div className={styles.title}>{props?.adultAmount} Adult</div>
      <div className={styles.amont}>Aed {adultPrice * adultAmount}</div>
    </div>
    <div className={`${styles.guestInfo} ${styles.mt40}`}>
      <div className={styles.title}>{props?.childAmount} Child</div>
      <div className={styles.amont}>Aed {childPrice * childAmount}</div>
    </div>
    <div className={`${styles.giftamountWrapper} ${styles.mt40}`}>
      <div className={`${styles.secTitle} ${styles.mb3}`}>Gift Card Value</div>

      <div className={`${styles.inputGroup} ${styles.mb3}`}>
        <span className={styles.inputGroupText} id="basic-addon1">
          AED
        </span>
        <input
          type="text"
          className={`${styles.formControl} ${styles.inputField}`}
          value={checkOutAmont}
          disabled
        />
      </div>
      <p className={styles.msgInfo}>Minimum gift card value is Aed 200</p>
    </div>
  </div>
  );
}

export default Index;
