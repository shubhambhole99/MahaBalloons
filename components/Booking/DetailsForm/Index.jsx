import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PhoneInput } from "react-international-phone";

function Index(props) {
  const { formData, handleDetailsFormData } = props;
  const packageval = useSelector((state) => state?.booking?.package);

  return (
    <div className={styles.ContactFormDSds003j}>
    <div className={`${styles.secTitle} ${styles.mt3}`}>Contact Details</div>
    <Row className={styles.step2Size}>
      <Col className={styles.colHalf} md={8}>
        <div className={`${styles.wrapper} ${styles.mt40}`}>
          <Row>
            <Col xs="12" md="6">
              <div className={`${styles.formGroup} ${styles.mt3}`}>
                <label htmlFor="name">
                  First Name <span style={{ color: "red" }}>*</span>
                </label>
                <div className={styles.inputGroup}>
                  <input
                    name="name"
                    type="text"
                    className={`${styles.formControl} ${styles.inputField}`}
                    onChange={handleDetailsFormData}
                    value={formData?.name}
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
                    onChange={handleDetailsFormData}
                    value={formData?.last_name}
                  />
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs="12" md="6">
              <div className={`${styles.formGroup} ${styles.mt3}`}>
                <label htmlFor="email">
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <div className={styles.inputGroup}>
                  <input
                    name="email"
                    type="text"
                    className={`${styles.formControl} ${styles.inputField}`}
                    onChange={handleDetailsFormData}
                    value={formData?.email}
                  />
                </div>
              </div>
            </Col>
            <Col xs="12" md="6">
              <div className={`${styles.formGroup} ${styles.formGroupPhone} ${styles.mt3}`}>
                <label htmlFor="phone">
                  Mobile Number <span style={{ color: "red" }}>*</span>
                </label>
                <PhoneInput
                  defaultCountry="ae"
                  onChange={(value) => handleDetailsFormData(value, true)}
                  value={formData?.phone}
                />
              </div>
            </Col>
          </Row>
        </div>
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
