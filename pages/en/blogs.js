import { useCallback } from "react";
import Image from "next/image";
import Blog from "../../components/blog";
import BtnLearn from "../../components/btn-learn";
import AccordionItem3 from "../../components/accordion-item3";
import AccordionItem2 from "../../components/accordion-item2";
import TextInput from "../../components/text-input";
import Button from "../../components/button";
import styles from "../desk-blogs.module.css";
import FrameComponent from "../../components/frame-component";
import FAQ from "../../components/f-a-q";
import Footer from "../../components/footer";
import Gift from "../../components/Giftanunforgettable/index"

// import "../desk-blogs.module.css"
const DeskBlogs = () => {
  
  let faqsData = [
    {
      id: 0,
      qes: {en:"Why should I fly in a hot air balloon in Dubai?"},
      ans: {en:"Undoubtedly, one of the best ways to view the beautiful scenery of the rejuvenating desert versus the magic of Dubai skyline is by a Hot Air Balloon Ride. You can enjoy what a wonderful comfort is to be lightly lifted off the ground in a hot air balloon ride."},
    },
    {
      id: 0,
      qes: {en:"Do you sell gifts or souvenirs for a hot air balloon flight?"},
      ans: {en:"Yes indeed! Sure, you can take an enormous variety of gifts, mementos and souvenirs as a proof of having taken the hot air balloon uae. Carry back trendy merchandise by your side with you as a souvenir of your great ride."},
    },
    {
      id: 0,
      qes: {en:"How do I get to the take-off site?"},
      ans: {en:"We always know in our hearts to help you with your travel plans with all the questions for directions. The transport team will give detailed on how conveyance will be scheduled."},
    },
    {
      id: 0,
      qes: {en:"What happens if the weather is bad?"},
      ans: {en:"For us, security is the foremost. If the weather is not flight-compatible, we can reschedule your flight for a time when things are deemed best. Our weather experts forecast 24/7 to ensure smooth and safe experience for our beloved passengers."},
    },
  ];
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
    <div className={styles.deskBlogs}>
          <FrameComponent />
      <header className={styles.header}>
        <div className={styles.banner}>
        <div className="navbarspace"></div>
          <div className={styles.mediumLengthHeroHeadlineGoParent}>
            <h1 className={styles.mediumLengthHero}>Blogs</h1>
            <div className={styles.loremIpsumDolor}>Home - Blogs</div>
          </div>
        </div>
        <div className={styles.navLinkDropdown}>
          <div className={styles.moreInformations}>Merchandise</div>
          <Image className={styles.iconRelume} width={24} height={24} alt="" />
        </div>
       
      </header>
       <div className="parent">
      {/* <div className={styles.child1}> */}
      <Blog />
     <Gift/>
      <FAQ
        content={faqsData}
        title={"Frequently Asked Questions "}
        />
      {/* </div> */}
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

export default DeskBlogs;
