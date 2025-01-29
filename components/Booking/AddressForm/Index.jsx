import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
function Index(props) {
  const {
    loading,
    formData,
    handleAddressFormData,
    hanldeSubmitData,
    adultAmount,
    childAmount,
    lastSubmit,
    referalCode,
    setreferalCode,
    checkOutAmont,
    isDoubledWeight,
  } = props;
  const packageval = useSelector((state) => state?.booking?.package);
  let RefCode = localStorage.getItem("referral_code");
  return (
    <div className={styles.AddressFormr903Dkfds}>
    <Row  className={styles.step2Size3}>
      <Col className={`${styles.colHalf} ${styles.firsthalf}`} md={8}>
        <div className={`${styles.wrapper} ${styles.mt40}`}>
          <div className={styles.secTitle}>Pickup Details</div>
          <Row>
            <Col xs={12}>
              <div className={`${styles.formGroup} `}>
                <label>Please enter your address</label>
              </div>
            </Col>
            <Col md={6}>
              <div className={`${styles.formGroup} `}>
                <label htmlFor="country">Country</label>
                <input
                style={{ width: "40%" }}
                  className={styles.inputField}
                  type="text"
                  name="country"
                  value={formData?.country}
                  placeholder="UAE"
                  onChange={handleAddressFormData}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className={`${styles.formGroup} `}>
                <label htmlFor="city">City</label>
                <input
                style={{ width: "40%" }}
                  className={styles.inputField}
                  type="text"
                  name="city"
                  value={formData?.city}
                  placeholder="Dubai"
                  onChange={handleAddressFormData}
                />
              </div>
            </Col>
            <Col xs={12}>
              <div className={`${styles.formGroup} `}>
                <label htmlFor="address">Address</label>
                <textarea
                style={{ width: "40%" }}
                  className={styles.inputField}
                  type="text"
                  name="address"
                  value={formData?.address}
                  onChange={handleAddressFormData}
                  rows={4}
                />
              </div>
            </Col>
          </Row>
        </div>
        {lastSubmit ? (
          <button className={`${styles.btnNl} ${styles.btnNlPrimary} ${styles.mt4}`} disabled={true}>
            Submitted
          </button>
        ) : (
          <button
            className={`${styles.btnNl} ${styles.btnNlPrimary} ${styles.mt4}`}
            onClick={hanldeSubmitData}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        )}
      </Col>
      <Col md={4}>
        <div className={`${styles.CardWrapper} ${styles.colHalf}`}>
          <div className={styles.flightCard}>
            <div className={styles.secTitle}>{packageval?.title}</div>
            <div className={`${styles.details} `}>
              <div className={styles.title}>Time</div>
              <p className={`${styles.para} `}>45 - 60 Minutes</p>
              <div className={styles.title}>Location</div>
              <p className={`${styles.para} `}>Margham Dubai, United Arab Emirates</p>
              <p className={`${styles.para} `}>Adults: {adultAmount} </p>
              <p className={`${styles.para} `}>Childs: {childAmount} </p>
              <p className={`${styles.para} `}>
                Sub Total:
                <strong> AED {checkOutAmont} </strong>
                {isDoubledWeight && `(Weight Doubled)`}
              </p>
              <p style={{ fontSize: "12px", margin: "0" }}>
                Price is Doubled for Passenger over 120KG{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.formGroup} ${styles.mt4}`}>
          <label htmlFor="address">Referral Code</label>
          <input
          style={{ width: "40%" }}
            className={styles.inputField}
            type="text"
            onChange={(e) => {
              setreferalCode(e.target.value);
            }}
          />
        </div>
      </Col>
    </Row>
  </div>

  );
}

export default Index;
