import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBooking } from "/store/booking";

import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import { RiErrorWarningFill } from "react-icons/ri";
function Index(props) {
  const [viewDetails, SetVIewDetails] = useState(true);
  const {
    currentStep,
    asGift,
    setAsGift,
    setAsGiftStep,
    asGiftStep,
    setCurrentStep,
    checkOutAmont,
    lastSubmit,
    handleCheckout,
    isCheckout,
    isPassengerValidated,
    slotDetails,
  } = props;
  return (
    <div className={styles.footer393ld}>
      <div className={`${styles.FooterBTNS}`}>
        {asGift ? (
          <div></div>
        ) : lastSubmit ? (
          <div></div>
        ) : (
          <div className={styles.DOts}>
            <span
              className={currentStep == 1 ? styles.active : ""}
              onClick={() => setCurrentStep(1)}
            ></span>
            <span
              className={currentStep == 2 ? styles.active : ""}
              onClick={() => setCurrentStep(2)}
            ></span>
            <span
              className={currentStep == 3 ? styles.active : ""}
              onClick={() => setCurrentStep(3)}
            ></span>
            <span
              className={currentStep == 4 ? styles.active : ""}
              onClick={() => {
                setCurrentStep(4);
              }}
            ></span>
          </div>
        )}

        <div className={styles.btns}>
          {!asGift ? (
            <></>
          ) : (
            <button
              className={`${styles.btnNl} ${styles.btnNlSecondary} ${styles.mx3}`}
              onClick={async () => {
                if (asGift) {
                  setAsGiftStep(1);
                  setAsGift(false);

                  return;
                }
                if (currentStep == 1) {
                  return;
                }

                setCurrentStep((prev) => prev - 1);
              }}
            >
              Back
            </button>
          )}

          {currentStep == 4 && lastSubmit ? (
            <button
              className={`${styles.btnNl} ${styles.btnNlPrimary} ${styles.mt3}`}
              onClick={(e) => {
                handleCheckout(e);
              }}
            >
              {isCheckout ? "Processing" : "Checkout"}
            </button>
          ) : currentStep == 4 && !lastSubmit ? (
            <></>
          ) : (
            <button
              className={`${styles.btnNl} ${styles.btnNlPrimary}`}
              onClick={async () => {
                if (currentStep == 2 && !slotDetails) {
                  toast.info("Please Select a Booking Date");
                  return;
                }
                if (currentStep == 4 && !lastSubmit) {
                  toast.info("Please Submit All Data First");
                  return;
                }
                setCurrentStep((prev) => prev + 1);
              }}
            >
              {checkOutAmont ? `AED ${checkOutAmont} Continue` : "Continue"}
            </button>
          )}
        </div>
      </div>
      {/* <div
        className={`styles.mt3 ${
          viewDetails ? styles.notdisabled : styles.disabledCtn
        }`}
      > */}
      <div className={styles.bottom}>
        <div
          className={styles.infoIcon}
          onClick={() => SetVIewDetails(!viewDetails)}
        >
          <RiErrorWarningFill size={40} />
        </div>
        <div className={styles.para}>
          Passengers must be at least 5 years old to join the flight, While the
          approximate pick-up time is between 3AM & 5AM, The exact timing
          depends on the sunrise of the month and will be provided the evening
          before your experience.
        </div>
      </div>
    </div>

  );
}

export default Index;
