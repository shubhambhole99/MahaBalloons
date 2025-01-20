import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PhoneInput } from "react-international-phone";

function Index(props) {
  const {
    weightOption,
    setWeightOption,
    adultAmount,
    childAmount,
    passengersAdult,
    handleAdultChange,
    passengersChild,
    handleChildChange,
    handleAdultWeight,
    handleChildWeight,
    fieldsAdults,
    fieldsChilds,
    handleAdultPhoneChange,
    handleChildPhoneChange,
  } = props;
  const packageval = useSelector((state) => state?.booking?.package);

  return (
    <div className={styles.Step4DSds003j}>
      <div className={`${styles.secTitle} ${styles.mt3}`}>Enter Passengers Details</div>
      <Row className={styles.step2Size}>
        <Col className={`${styles.colHalf} ${styles.PassengerLIStCol}`} md={8}>
          {fieldsAdults?.map((item, i) => (
            <div className={`${styles.wrapper} ${styles.mt40}`} key={`adult-${i}`}>
              <div className={`${styles.secTitle} ${styles.mt5}`}>Passenger Adult {i + 1}</div>
              <Row>
                <Col xs="12" md="6">
                  <div className={`${styles.formGroup} ${styles.mt3}`}>
                    <label htmlFor="name">
                      Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className={styles.inputGroup}>
                      <input
                        name="name"
                        type="text"
                        className={`${styles.formControl} ${styles.inputField}`}
                        onChange={async (e) => {
                          await handleAdultChange(e, i);
                        }}
                        value={passengersAdult[i]?.name}
                      />
                    </div>
                  </div>
                </Col>
                <Col xs="12" md="6">
                  <div className={`${styles.formGroup} ${styles.mt3}`}>
                    <label htmlFor="last_name">
                      Last Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className={styles.inputGroup}>
                      <input
                        name="last_name"
                        type="text"
                        className={`${styles.formControl} ${styles.inputField}`}
                        onChange={async (e) => {
                          await handleAdultChange(e, i);
                        }}
                        value={passengersAdult[i]?.last_name}
                      />
                    </div>
                  </div>
                </Col>
              </Row>

              <div className={`${styles.formGroup} ${styles.mt3}`}>
                <label htmlFor="email">
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <div className={styles.inputGroup}>
                  <input
                    name="email"
                    type="text"
                    className={`${styles.formControl} ${styles.inputField}`}
                    onChange={async (e) => {
                      await handleAdultChange(e, i);
                    }}
                    value={passengersAdult[i]?.email}
                  />
                </div>
              </div>

              <div className={`${styles.formGroup} ${styles.formGroupPhone} ${styles.mt4}`}>
                <label htmlFor="phone">
                  Mobile Number <span style={{ color: "red" }}>*</span>
                </label>
                <PhoneInput
                  defaultCountry="ae"
                  onChange={(value) => handleAdultPhoneChange(value, i)}
                  value={passengersAdult[i]?.phone}
                />
              </div>

              <div className={`${styles.formGroup} ${styles.mt3}`}>
                <label htmlFor="weight">
                  Weight (KG) <span style={{ color: "red" }}>*</span>
                </label>
                <div className={styles.inputGroup}>
                  <input
                    name="weight"
                    type="number"
                    min="1"
                    max="120"
                    className={`${styles.formControl} ${styles.inputField}`}
                    onChange={async (e) => {
                      if (e.target.value > 220) {
                        toast.error("weight is not acceptable", {
                          toastId: "weightError",
                        });
                        return;
                      }
                      if (e.target.value >= 120) {
                        toast.info(
                          "If weight is more then 120kg Price is doubled",
                          {
                            toastId: "weightDoubled",
                          }
                        );
                      }
                      if (e.target.value < 0) {
                        return;
                      }
                      await handleAdultChange(e, i);
                    }}
                    value={passengersAdult[i]?.weight}
                  />
                </div>
              </div>
            </div>
          ))}
          {childAmount == 0 ? null : (
            <>
              {fieldsChilds?.map((item, i) => (
                <div className={`${styles.wrapper} ${styles.mt40}`} key={`child-${i}`}>
                  <div className={`${styles.secTitle} ${styles.mt5}`}>Passenger Child {i + 1}</div>
                  <Row>
                    <Col xs={12} md={6}>
                      <div className={`${styles.formGroup} ${styles.mt3}`}>
                        <label htmlFor="name">
                          Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <div className={styles.inputGroup}>
                          <input
                            name="name"
                            type="text"
                            className={`${styles.formControl} ${styles.inputField}`}
                            onChange={async (e) => {
                              await handleChildChange(e, i);
                            }}
                            value={passengersChild[i]?.name}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div className={`${styles.formGroup} ${styles.mt3}`}>
                        <label htmlFor="last_name">
                          Last Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <div className={styles.inputGroup}>
                          <input
                            name="last_name"
                            type="text"
                            className={`${styles.formControl} ${styles.inputField}`}
                            onChange={async (e) => {
                              await handleChildChange(e, i);
                            }}
                            value={passengersChild[i]?.last_name}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className={`${styles.formGroup} ${styles.mt3}`}>
                    <label htmlFor="email">
                      Email <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className={styles.inputGroup}>
                      <input
                        name="email"
                        type="text"
                        className={`${styles.formControl} ${styles.inputField}`}
                        onChange={async (e) => {
                          await handleChildChange(e, i);
                        }}
                        value={passengersChild[i]?.email}
                      />
                    </div>
                  </div>

                  <div className={`${styles.formGroup} ${styles.formGroupPhone} ${styles.mt4}`}>
                    <label htmlFor="phone">
                      Mobile Number <span style={{ color: "red" }}>*</span>
                    </label>
                    <PhoneInput
                      defaultCountry="ae"
                      onChange={(value) => handleChildPhoneChange(value, i)}
                      value={passengersChild[i]?.adult_phone}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.mt3}`}>
                    <label htmlFor="weight">
                      Weight (KG) <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className={styles.inputGroup}>
                      <input
                        name="weight"
                        type="number"
                        max={120}
                        className={`${styles.formControl} ${styles.inputField}`}
                        onChange={async (e) => {
                          if (e.target.value > 119) {
                            toast.error("weight under 120 kg is Allowed", {
                              toastId: "weightUnder",
                            });
                            return;
                          }
                          await handleChildChange(e, i);
                        }}
                        value={passengersChild[i]?.weight}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </Col>
        <Col md={4}>
          <div className={`${styles.CardWrapper} ${styles.mt40} ${styles.mb3}`}>
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
