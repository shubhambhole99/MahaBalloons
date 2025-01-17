import { useCallback } from "react";
import Image from "next/image";
import AccordionItem from "./accordion-item";
import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ className = "" }) => {
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
    <section className={[styles.faqWrapper, className].join(" ")}>
      <div className={styles.faq}>
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
                Frequently Asked Questions about Hot Air Balloons in UAE
              </h1>
            </div>
            <div className={styles.accordion} data-acc-group>
              <AccordionItem
                question="Is a hot air balloon ride in Dubai safe?"
                icon="/icon-19@2x.png"
                text="Yes, a hot air balloon ride in Dubai is generally safe. Operators adhere to strict safety guidelines set by the UAE’s civil aviation authorities. The balloons are piloted by licensed, experienced professionals who conduct thorough safety checks before each flight. Weather conditions are closely monitored, and rides only proceed when it’s safe to fly. Additionally, hot air balloons are designed with safety in mind, making the experience enjoyable and secure for passengers."
              />
              <div
                className={styles.accordionItemMock}
                data-acc-item
                data-acc-open
              >
                <div
                  className={styles.accordionItemOpen}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className={styles.question}>
                    <div className={styles.question1}>
                      Is a hot air balloon ride in Dubai safe?
                    </div>
                    <Image
                      className={styles.icon}
                      loading="lazy"
                      width={32}
                      height={32}
                      alt=""
                      src="/icon-19@2x.png"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, a hot air balloon ride in Dubai is generally safe.
                      Operators adhere to strict safety guidelines set by the
                      UAE’s civil aviation authorities. The balloons are piloted
                      by licensed, experienced professionals who conduct
                      thorough safety checks before each flight. Weather
                      conditions are closely monitored, and rides only proceed
                      when it’s safe to fly. Additionally, hot air balloons are
                      designed with safety in mind, making the experience
                      enjoyable and secure for passengers.
                    </div>
                  </div>
                  <div className={styles.accordionContent} />
                </div>
                <div className={styles.accordionContent1} data-acc-content>
                  <div className={styles.accordionContentWrap}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <AccordionItem
                accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
                question="What should I wear for a hot air balloon ride?"
                icon="/icon-19@2x.png"
                text="For a hot air balloon ride, it’s best to dress in comfortable, casual clothing. Since the temperature can be cool in the early morning (when most rides occur), it’s advisable to wear layers that you can adjust as the day warms up. Closed-toe shoes like sneakers are ideal, as you may need to walk on uneven terrain during landing. Sunglasses and a hat can also help protect against the sun as the balloon ascends."
              />
              <div
                className={styles.accordionItemMock}
                data-acc-item
                data-acc-open
              >
                <div
                  className={styles.accordionItemOpen}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className={styles.question}>
                    <div className={styles.question1}>
                      What should I wear for a hot air balloon ride?
                    </div>
                    <Image
                      className={styles.icon}
                      loading="lazy"
                      width={32}
                      height={32}
                      alt=""
                      src="/icon-19@2x.png"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, a hot air balloon ride in Dubai is generally safe.
                      Operators adhere to strict safety guidelines set by the
                      UAE’s civil aviation authorities. The balloons are piloted
                      by licensed, experienced professionals who conduct
                      thorough safety checks before each flight. Weather
                      conditions are closely monitored, and rides only proceed
                      when it’s safe to fly. Additionally, hot air balloons are
                      designed with safety in mind, making the experience
                      enjoyable and secure for passengers.
                    </div>
                  </div>
                  <div className={styles.accordionContent} />
                </div>
                <div className={styles.accordionContent1} data-acc-content>
                  <div className={styles.accordionContentWrap}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <AccordionItem
                accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
                question="Can children participate in a hot air balloon ride?"
                icon="/icon-19@2x.png"
                text="Yes, children can participate in a hot air balloon ride, but there are usually age and height restrictions for safety reasons. Most operators in Dubai recommend that children be at least 5 or 6 years old to join the flight. It’s always best to check with the specific balloon company for their exact policy regarding child passengers."
              />
              <div
                className={styles.accordionItemMock}
                data-acc-item
                data-acc-open
              >
                <div
                  className={styles.accordionItemOpen}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className={styles.question}>
                    <div className={styles.question1}>
                      Can children participate in a hot air balloon ride?
                    </div>
                    <Image
                      className={styles.icon}
                      loading="lazy"
                      width={32}
                      height={32}
                      alt=""
                      src="/icon-19@2x.png"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, a hot air balloon ride in Dubai is generally safe.
                      Operators adhere to strict safety guidelines set by the
                      UAE’s civil aviation authorities. The balloons are piloted
                      by licensed, experienced professionals who conduct
                      thorough safety checks before each flight. Weather
                      conditions are closely monitored, and rides only proceed
                      when it’s safe to fly. Additionally, hot air balloons are
                      designed with safety in mind, making the experience
                      enjoyable and secure for passengers.
                    </div>
                  </div>
                  <div className={styles.accordionContent} />
                </div>
                <div className={styles.accordionContent1} data-acc-content>
                  <div className={styles.accordionContentWrap}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
              <AccordionItem
                accordionItemBorderBottom="unset"
                question="What are the best times for a hot air balloon ride in Dubai?"
                icon="/icon-19@2x.png"
                text="The best time for a hot air balloon ride in Dubai is early in the morning, just before sunrise. This is when the weather is calmest and the desert views are breathtaking. The cooler temperatures and golden light of the early morning create a magical experience as you soar above the sand dunes. It’s also the optimal time for spotting wildlife such as Arabian oryx and gazelles in their natural habitat."
              />
              <div
                className={styles.accordionItemMock}
                data-acc-item
                data-acc-open
              >
                <div
                  className={styles.accordionItemOpen}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className={styles.question}>
                    <div className={styles.question1}>
                      What are the best times for a hot air balloon ride in
                      Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      loading="lazy"
                      width={32}
                      height={32}
                      alt=""
                      src="/icon-19@2x.png"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, a hot air balloon ride in Dubai is generally safe.
                      Operators adhere to strict safety guidelines set by the
                      UAE’s civil aviation authorities. The balloons are piloted
                      by licensed, experienced professionals who conduct
                      thorough safety checks before each flight. Weather
                      conditions are closely monitored, and rides only proceed
                      when it’s safe to fly. Additionally, hot air balloons are
                      designed with safety in mind, making the experience
                      enjoyable and secure for passengers.
                    </div>
                  </div>
                  <div className={styles.accordionContent} />
                </div>
                <div className={styles.accordionContent1} data-acc-content>
                  <div className={styles.accordionContentWrap}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
