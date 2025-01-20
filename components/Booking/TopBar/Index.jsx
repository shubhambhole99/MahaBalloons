import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setBooking } from "/store/booking";
import styles from "./styles.module.scss";

function Index(props) {
  const dispatch = useDispatch();

  return (
    <div className={props?.asGiftStep == 2 ? `${styles.topBar32} ${styles.bderBTM}` : styles.topBar32}>
    <div className={styles.titleSec}>
      {props?.asGiftStep == 2 ? (
        <div className={styles.secTitle}>Checkout</div>
      ) : (
        <div className={styles.breadCrub}>
          {props?.currentStep <= 2 ? (
            <div className={`${styles.secTitle} ${styles.active}`}>Booking</div>
          ) : props?.currentStep == 3 ? (
            <>
              <div
                className={styles.secTitle}
                onClick={() => {
                  if (props?.lastSubmit) {
                    return;
                  }
                  props?.setCurrentStep(1);
                }}
              >
                Booking
                <IoIosArrowForward size={16} />
              </div>
              <div
                className={`${styles.secTitle} ${styles.active}`}
                onClick={() => {
                  if (props?.lastSubmit) {
                    return;
                  }
                  props?.setCurrentStep(3);
                }}
              >
                Contact Details
                <IoIosArrowForward size={16} />
              </div>
            </>
          ) : props?.currentStep == 4 ? (
            <>
              <div
                className={styles.secTitle}
                onClick={() => {
                  if (props?.lastSubmit) {
                    return;
                  }
                  props?.setCurrentStep(1);
                }}
              >
                Booking
                <IoIosArrowForward size={16} />
              </div>
              <div
                className={styles.secTitle}
                onClick={() => {
                  if (props?.lastSubmit) {
                    return;
                  }
                  props?.setCurrentStep(3);
                }}
              >
                Contact Details
                <IoIosArrowForward size={16} />
              </div>
              <div className={`${styles.secTitle} ${styles.active}`}>
                Pickup
                <IoIosArrowForward size={16} />
              </div>
            </>
          ) : (
            <>
              <div className={styles.secTitle}>
                Booking
                <IoIosArrowForward size={16} />
              </div>
              <div className={styles.secTitle}>
                Contact Details
                <IoIosArrowForward size={16} />
              </div>
              <div className={styles.secTitle}>
                Pickup
                <IoIosArrowForward size={16} />
              </div>
              <div className={`${styles.secTitle} ${styles.active}`}>
                Details
                <IoIosArrowForward size={16} />
              </div>
            </>
          )}
        </div>
      )}
      <div className={styles.endHalf}>
        <div
          className={styles.closeIcon}
          onClick={() => {
            props?.handleClose();
          }}
        >
          <IoMdClose size={30} />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Index;
