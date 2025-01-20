import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
function Index(props) {
  const { handlePassengerSubmit, loading, setPickUpData, pickUpData } = props;
  const [optontype, setOptionType] = useState(1);
  const packageval = useSelector((state) => state?.booking?.package);

  const [customInput, setCustomInput] = useState("");
  console.log("🚀 ~ Index ~ customInput:", customInput);

  const handleChange = (e) => {
    setPickUpData({
      ...pickUpData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{border:"1px solid red"}} className={styles.Step3Dkfds}>
    <Row  style={{border:"1px solid red"}} className={styles.step2Size3}>
      <Col  style={{border:"1px solid red"}} className={styles.colHalf} md={8}>
        <div  style={{border:"1px solid red"}} className={`${styles.wrapper}`}>
          <div className={styles.secTitle}>Pickup Details</div>

          {optontype == 1 ? (
            <>
              <Row>
                <Col xs={12}>
                  <div className={`${styles.formGroup} `}>
                    <label>Please enter your address</label>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={`${styles.formGroup}`}>
                    <label htmlFor="country">Country</label>
                    <input
                      className={styles.inputField}
                      type="text"
                      name="country"
                      value={pickUpData?.country}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className={`${styles.formGroup}`}>
                    <label htmlFor="city">City</label>
                    <input
                      className={styles.inputField}
                      type="text"
                      name="city"
                      value={pickUpData?.city}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className={`${styles.formGroup} `}>
                    <label htmlFor="house_no">House No</label>
                    <input
                      type="text"
                      className={styles.inputField}
                      name="house_no"
                      value={pickUpData?.house_no}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className={`${styles.formGroup} ${styles.mt4}`}>
                    <label htmlFor="address">Street Address</label>
                    <input
                      type="text"
                      className={styles.inputField}
                      name="address"
                      value={pickUpData?.address}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className={`${styles.formGroup} ${styles.mt4}`}>
                    <label htmlFor="area">Area</label>
                    <input
                      className={styles.inputField}
                      type="text"
                      name="area"
                      value={pickUpData?.area}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className={`${styles.formGroup} ${styles.mt4}`}>
                    <label htmlFor="landmark">Landmark</label>
                    <input
                      className={styles.inputField}
                      type="text"
                      name="landmark"
                      value={pickUpData?.landmark}
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>
            </>
          ) : optontype == 3 ? (
            <div className={`${styles.formGroup} ${styles.mt4}`}>
              <label htmlFor="address"> Which hotel you are residing?</label>
              <input
                type="text"
                className={styles.inputField}
                name="address"
                value={pickUpData?.address}
                onChange={(e) => handleChange(e)}
              />
            </div>
          ) : optontype == 2 ? (
            <></>
          ) : null}
        </div>
        <button
          className={`${styles.btnNl} ${styles.btnNlPrimary} ${styles.mt4}`}
          onClick={handlePassengerSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </Col>
      <Col md={4}>
        <div className={`${styles.CardWrapper} ${styles.mt40}`}>
          <div className={styles.flightCard}>
            <div className={styles.secTitle}>{packageval?.title}</div>
            <div className={`${styles.details} ${styles.mt3}`}>
              <div className={styles.title}>Time</div>
              <p className={`${styles.para} ${styles.mt1}`}>45 - 60 Minutes</p>
              <div className={styles.title}>Location</div>
              <p className={`${styles.para} ${styles.mt1}`}>Margham Dubai, United Arab Emirates</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
  );
}

export default Index;
