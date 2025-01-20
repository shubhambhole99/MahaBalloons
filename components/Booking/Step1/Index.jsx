import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa6";
import CalnderWraper from "./Calender/Index";
import AsGiftCard from "./AsGiftCard/Index";
import AsGiftCheckout from "./AsGiftCheckout/Index";
import styles from "./styles.module.scss";

function Index(props) {
  const {
    adultAmount,
    setAdultAmount,
    childAmount,
    setChildAmount,
    setslotDetails,
    setInitialCheckOutAmount,
  } = props;
  const packageval = useSelector((state) => state?.booking?.package);

  return (
    <div className={styles.step1dk3}>
    {props?.asGiftStep == 2 ? (
      <AsGiftCheckout checkOutAmont={props?.checkOutAmont} />
    ) : (
      <Row style={{border:"2px solid green"}}className={styles.step1Size}>
        <Col xs={12} className={styles.colHalf} md={8}>
          <div className={`${styles.wrapper}`}>
            <div className={styles.secTitle}>{packageval?.title}</div>
            <p className={`${styles.para} `}>{packageval?.short_detail}</p>
            <div className={`${styles.secTitle} `}>Choose Guests</div>
            {/* Adults Qty */}
            <div className={`${styles.guestSec}`}>
              <div className={styles.secTitle}>Adult (above 11 yrs)</div>

              <div className={styles.amount}>
                <div
                  className={styles.qtyIcon}
                  onClick={() => {
                    if (adultAmount == 0) {
                      return;
                    }
                    setAdultAmount((prev) => prev - 1);
                  }}
                >
                  <FaMinus size={16} />
                </div>
                {adultAmount}
                <div
                  className={styles.qtyIcon}
                  onClick={() => {
                    if (adultAmount >= 10) {
                      setAdultAmount(10);
                      return;
                    }
                    setAdultAmount((prev) => prev + 1);
                  }}
                >
                  <FaPlus size={16} />
                </div>
              </div>
            </div>
            {/* info */}
            <div className={`${styles.info} `}>
              <div className={styles.subTitle}>
                from AED {packageval?.price_adult}
              </div>
              <p className={`${styles.details} `}>
                *Passenger should be under 120kgs
              </p>
            </div>

            {/* Adults Qty */}
            <div className={`${styles.guestSec}`}>
              <div className={styles.secTitle}>Child (5 - 11 yrs)</div>

              <div className={styles.amount}>
                <div
                  className={styles.qtyIcon}
                  onClick={() => {
                    if (childAmount == 0) {
                      return;
                    }
                    setChildAmount((prev) => prev - 1);
                  }}
                >
                  <FaMinus size={16} />
                </div>
                {childAmount}
                <div
                  className={styles.qtyIcon}
                  onClick={() => {
                    if (adultAmount >= 10) {
                      setChildAmount(10);
                      return;
                    }
                    setChildAmount((prev) => prev + 1);
                  }}
                >
                  <FaPlus size={16} />
                </div>
              </div>
            </div>
            {/* info */}
            <div className={`${styles.info}`}>
              <div className={styles.subTitle}>
                from AED {packageval?.price_child}
              </div>
            </div>
          </div>
        </Col>
        <Col className={styles.secTitle} md={4}>
          {props?.asGift ? (
            <AsGiftCard
              adultAmount={adultAmount}
              adultPrice={packageval?.price_adult}
              childAmount={childAmount}
              childPrice={packageval?.price_child}
              setCheckOutAmount={props?.setCheckOutAmount}
              checkOutAmont={props?.checkOutAmont}
            />
          ) : props?.currentStep == 2 ? (
            <CalnderWraper
              adultAmount={adultAmount}
              childAmount={childAmount}
              setCheckOutAmount={props?.setCheckOutAmount}
              setInitialCheckOutAmount={setInitialCheckOutAmount}
              setslotDetails={setslotDetails}
            />
          ) : null}
        </Col>
      </Row>
    )}
  </div>
  );
}

export default Index;
