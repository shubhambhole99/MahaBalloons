import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
function Index(props) {
  const { totalResp, checkOutAmont, pickUpData } = props;
  return (
    <div className={styles.finalInfo00dk3}>
      <div className={`${styles.secTitle} ${styles.mt3}`}>Booking Details</div>
      <Row className={styles.totalInfo}>
        <Col md={12}>
          <Row className={styles.gy3}>
            <Col xs={12} md={4}>
              <div className={styles.infoD}>
                <div className={styles.title}>Total Passengers:</div>
                <p className={styles.para}>{totalResp?.passengers?.length}</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className={styles.infoD}>
                <div className={styles.title}>Total Amount:</div>
                <p className={styles.para}>AED {checkOutAmont} </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className={`${styles.infoD} ${styles.mt5}`}>
                <div className={styles.title}>Pickup Details</div>
              </div>
            </Col>
          </Row>
          <Row className={`${styles.g3} ${styles.mt2}`}>
            <Col md={4}>
              <div className={styles.infoD}>
                <div className={styles.title}>House No:</div>
                <p className={styles.para}>{totalResp?.pickup?.house_no}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.infoD}>
                <div className={styles.title}>Area :</div>
                <p className={styles.para}>{totalResp?.pickup?.area}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.infoD}>
                <div className={styles.title}>City :</div>
                <p className={styles.para}>{totalResp?.pickup?.city}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.infoD}>
                <div className={styles.title}>Address :</div>
                <p className={styles.para}>{totalResp?.pickup?.address}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.infoD}>
                <div className={styles.title}>Country :</div>
                <p className={styles.para}>{totalResp?.pickup?.country}</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

  );
}

export default Index;
