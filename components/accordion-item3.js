import { useCallback } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./accordion-item3.module.css";

const AccordionItem3 = ({ className = "" }) => {
  const onAccordionHeaderClick = useCallback((event) => {
    const element = event.target;

    const accItem = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector("[data-acc-content]");
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling || accItem?.parentElement?.nextElementSibling;
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      accItem?.parentElement?.previousElementSibling;
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      siblingContainerAccItem?.querySelector("[data-acc-item]") ||
      siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const openStyleObject = {
      "grid-template-rows": "1fr",
    };
    const closeStyleObject = {
      "padding-top": "0px",
      "padding-bottom": "0px",
      "margin-bottom": "0px",
      "margin-top": "0px",
      "grid-template-rows": "0fr",
    };

    function applyStyles(element, styleObject) {
      Object.assign(element.style, styleObject);
    }

    function removeStyles(element, styleObject) {
      Object.keys(styleObject).forEach((key) => {
        element?.style.removeProperty(key);
      });
    }

    if (isOpen) {
      removeStyles(accContent, openStyleObject);
      applyStyles(accContent, closeStyleObject);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent =
        siblingAccItem?.querySelector("[data-acc-content]");
      setTimeout(() => {
        removeStyles(siblingAccContent, closeStyleObject);
        applyStyles(siblingAccContent, openStyleObject);
      }, 1);
    }
  }, []);

  return (
    <div
      className={[styles.accordionItem, className].join(" ")}
      data-acc-item
      data-acc-open
      data-acc-original
      data-acc-default-open
    >
      <div
        className={styles.question}
        data-acc-header
        onClick={onAccordionHeaderClick}
      >
        <div className={styles.question1}>
          Why should I fly in a hot air balloon in Dubai?
        </div>
        <Image
          className={styles.icon}
          loading="lazy"
          width={32}
          height={32}
          alt=""
          src="/icon.svg"
        />
      </div>
      <div className={styles.accordionContentaccordionDef} data-acc-content>
        <div className={styles.container}>
          <div className={styles.answer}>
            <div className={styles.text}>
              Undoubtedly, one of the best ways to view the beautiful scenery of
              the rejuvenating desert versus the magic of Dubai skyline is by a
              Hot Air Balloon Ride. You can enjoy what a wonderful comfort is to
              be lightly lifted off the ground in a hot air balloon ride.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AccordionItem3.propTypes = {
  className: PropTypes.string,
};

export default AccordionItem3;
