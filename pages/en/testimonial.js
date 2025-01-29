import { useCallback } from "react";
import Image from "next/image";
import TopNavigation from "../../components/top-navigation";
import Title from "../../components/title";
import Row from "../../components/row";
import BtnLearn from "../../components/btn-learn";
import FAQ2 from "../../components/f-a-q2";
import TextInput from "../../components/text-input";
import Button from "../../components/button";
import styles from "../desk-testimonials.module.css";
// import FrameComponent from "../../components/frame-component";
import FAQ from "../../components/f-a-q";
import testimonial from "/Db/testimonial";
import Footer from "../../components/footer";
import Gift from "../../components/Giftanunforgettable/index"
import Testimonial from "/components/testimonials"
import FrameComponent from "../../components/frame-component";

const DeskTestimonials = () => {
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
    <div className={styles.deskTestimonials}>
      <FrameComponent />
      <TopNavigation />

      <div className="parent">
        <Testimonial />
        <br />
        {/* <section className={styles.mainContentWrapper}>
        <div className={styles.mainContent}>
          <Title />
          <Row />
        </div>
      </section> */}

        <Gift />

        <FAQ
          content={testimonial?.faqsList}
          title={"Frequently Asked Questions "}
        />
      </div>
      <Footer
        icon="/icon-25@2x.png"
        iconFacebook="/icon--facebook.svg"
        iconInstagram="/icon--instagram.svg"
        iconX="/icon--x.svg"
        iconLinkedIn="/icon--linkedin.svg"
        iconYoutube="/icon--youtube.svg"
      />
    </div>
  );
};

export default DeskTestimonials;
