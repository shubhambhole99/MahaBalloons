import React from "react";
import { Col, Row } from "react-bootstrap";
import coin from "/assets/icons/GiftCoin.svg";
import { FaCheck } from "react-icons/fa6";
import { PhoneInput } from "react-international-phone";
import styles from "./styles.module.scss";
function Index(props) {
  return (
    <div className={styles.asGiftCheckoutF32e}>
    <Row className={styles.ItemROw}>
      <Col className={styles.colHalf} md={8}>
        <div className={`${styles.detailForm} ${styles.mt40}`}>
          <div className={styles.secTitle}>Contact Details</div>
          <Row className={`${styles.g4} ${styles.mt3}`}>
            <Col md={6}>
              <div className={styles.formGroup}>
                <label htmlFor="name">First Name</label>
                <input className={styles.inputField} name="FName" type="text" />
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Last Name</label>
                <input className={styles.inputField} name="LName" type="text" />
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Email</label>
                <input
                  className={styles.inputField}
                  name="email"
                  type="Email"
                  placeholder="abc@gamil.com"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className={`${styles.formGroup} ${styles.formGroupPhone}`}>
                <label htmlFor="name">Mobile Number</label>
                <PhoneInput defaultCountry="ae" />
              </div>
            </Col>
            <Col xs={12}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Country</label>
                <select className={styles.selectOption} name="country" id="">
                  <option value="" defaultChecked disabled>
                    Select a Country
                  </option>

                  <option value="uae">UAE</option>
                  <option value="UK">UK</option>
                </select>
              </div>
            </Col>
          </Row>

          <div className={`${styles.secTitle} ${styles.mt5}`}>Gift To</div>
          <Row className={`${styles.g4} ${styles.mt3}`}>
            <Col md={6}>
              <div className={styles.formGroup}>
                <label htmlFor="name">First Name</label>
                <input className={styles.inputField} name="FName" type="text" />
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Last Name</label>
                <input className={styles.inputField} name="LName" type="text" />
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Email</label>
                <input
                  className={styles.inputField}
                  name="email"
                  type="Email"
                  placeholder="abc@gamil.com"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className={`${styles.formGroup} ${styles.formGroupPhone}`}>
                <label htmlFor="name">Mobile Number</label>
                <PhoneInput defaultCountry="ae" />
              </div>
            </Col>
            <Col xs={12}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Country</label>
                <select className={styles.selectOption} name="country" id="">
                  <option value="" defaultChecked disabled>
                    Select a Country
                  </option>

                  <option value="uae">UAE</option>
                  <option value="UK">UK</option>
                </select>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col md={4}>
        <div className={styles.giftCardWrapper}>
          <div className={`${styles.giftCard} ${styles.mt40}`}>
            <div className="d-flex justify-content-between align-items-center">
              <img src={coin} alt="" height={80} width={80} />
              <div className={styles.secTitle}>Gift Card</div>
            </div>
            <div className={styles.Price}>AED {props?.checkOutAmont}</div>
          </div>
          <p className={styles.mt2}>*This gift card is valid for 1 year only</p>
        </div>
      </Col>
    </Row>
  </div>
  );
}

export default Index;
