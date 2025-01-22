import { useCallback } from "react";
import Image from "next/image";
import AccordionItem from "./accordion-item";
import AccordionItem1 from "./accordion-item1";
import PropTypes from "prop-types";
import styles from "./f-a-q.module.css";

const FAQ = ({ className = "", content, title }) => {
  // console.log(content, title)
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
    <section className={[styles.faq, className].join(" ")}>
      <div className={styles.container}>
        <Image
          className={styles.placeholderImageIcon}
          width={600}
          height={418}
          alt=""
          src="/placeholder-image1@2x.png"
        />
        <div className={styles.details}>
          <div className={styles.content}>
            <h1 className={styles.frequentlyAskedQuestions}>
              {title}
            </h1>
          </div>
          <div className={styles.accordion} data-acc-group>
            {content && content.map((item) => (
              <>
                {/* Start */}
                <AccordionItem
                  accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
                  question={item.qes.en}
                  icon="/icon-10.svg"
                  text={item.ans.en}
                />
                <div
                  className={styles.accordionItemOpen}
                  data-acc-item
                  data-acc-open
                >
                  <div
                    className={styles.question}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <div className={styles.question1}>
                      {item.qes.en}
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon-19@2x.png"
                    />
                  </div>
                  <div className={styles.accordionContent} data-acc-content>
                    <div className={styles.container1}>
                      <div className={styles.answer}>
                        <div className={styles.text}>
                          {item.ans.en}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.accordionContent1} />
                  <div className={styles.div} />
                </div>
                {/* ends here */}

              </>

            ))}


           





          </div>
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;
