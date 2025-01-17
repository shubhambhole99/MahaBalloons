import { useCallback } from "react";
import Image from "next/image";
import AccordionItem1 from "./accordion-item1";
import AccordionItem from "./accordion-item";
import PropTypes from "prop-types";
import styles from "./f-a-q2.module.css";

const FAQ2 = ({ className = "" }) => {
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
              Frequently Asked Questions
            </h1>
          </div>
          <div className={styles.accordion} data-acc-group>
            <AccordionItem1
              accordionItemHeight="104px"
              accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
              question="Where can I read Customer testimonials in Dubai balloon?"
              icon="/icon.svg"
              answerHeight="40px"
              text="You can read customer testimonials on our Testimonials Page, where we showcase genuine reviews and Feedback on balloon rides Dubai from our guests."
              textHeight="24px"
            />
            <div
              className={styles.accordionItemClose}
              data-acc-item
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.question}>
                <div className={styles.question1}>
                  Where can I read Customer testimonials in Dubai balloon?
                </div>
                <Image
                  className={styles.icon}
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.answer}>
                <div className={styles.text}>
                  <span>
                    Submitting your testimonial is an easy task! You can either
                    fill out a form and submit it on our Testimonial page or
                    send us an e-mail at 
                  </span>
                  <a
                    className={styles.testimonialsmahaballoonadvent}
                    href="mailto:testimonials@mahaballoonadventures.com"
                    target="_blank"
                  >
                    <span>
                      <span className={styles.testimonialsmahaballoonadvent1}>
                        testimonials@mahaballoonadventures.com
                      </span>
                    </span>
                  </a>
                  <span>.</span>
                </div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <div
              className={styles.accordionItem}
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.question}>
                <div className={styles.question1}>
                  How can I submit my testimonial?
                </div>
                <Image
                  className={styles.icon}
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.answer}>
                <div className={styles.text}>
                  <span>
                    Submitting your testimonial is an easy task! You can either
                    fill out a form and submit it on our Testimonial page or
                    send us an e-mail at 
                  </span>
                  <a
                    className={styles.testimonialsmahaballoonadvent}
                    href="mailto:testimonials@mahaballoonadventures.com"
                    target="_blank"
                  >
                    <span>
                      <span className={styles.testimonialsmahaballoonadvent1}>
                        testimonials@mahaballoonadventures.com
                      </span>
                    </span>
                  </a>
                  <span>.</span>
                </div>
              </div>
            </div>
            <div
              className={styles.accordionItemOpen}
              data-acc-item
              data-acc-open
            >
              <div
                className={styles.question4}
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className={styles.question1}>
                  How can I submit my testimonial?
                </div>
                <Image
                  className={styles.icon2}
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className={styles.accordionContent1} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer2}>
                    <div className={styles.text2}>
                      You can read customer testimonials on our Testimonials
                      Page, where we showcase genuine reviews and Feedback on
                      balloon rides Dubai from our guests.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
              question="Can I see video testimonials from previous customers?"
              icon="/icon-24@2x.png"
              text="Yes, check out our Video Testimonials section for real stories and visual experiences shared by our happy adventurers."
            />
            <div
              className={styles.accordionItemOpen}
              data-acc-item
              data-acc-open
            >
              <div
                className={styles.question4}
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className={styles.question1}>
                  Can I see video testimonials from previous customers?
                </div>
                <Image
                  className={styles.icon2}
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className={styles.accordionContent1} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer2}>
                    <div className={styles.text2}>
                      You can read customer testimonials on our Testimonials
                      Page, where we showcase genuine reviews and Feedback on
                      balloon rides Dubai from our guests.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Can I share my testimonial on social media?"
              icon="/icon-24@2x.png"
              text="Absolutely! We encourage you to share your experience on social media. Tag us Insert Social media handles to join the conversation."
            />
            <div
              className={styles.accordionItemOpen}
              data-acc-item
              data-acc-open
            >
              <div
                className={styles.question4}
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className={styles.question1}>
                  Can I share my testimonial on social media?
                </div>
                <Image
                  className={styles.icon2}
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className={styles.accordionContent1} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer2}>
                    <div className={styles.text2}>
                      You can read customer testimonials on our Testimonials
                      Page, where we showcase genuine reviews and Feedback on
                      balloon rides Dubai from our guests.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FAQ2.propTypes = {
  className: PropTypes.string,
};

export default FAQ2;
