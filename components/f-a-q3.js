import { useCallback } from "react";
import Image from "next/image";
import AccordionItem from "./accordion-item";
import PropTypes from "prop-types";
import styles from "./f-a-q3.module.css";

const FAQ3 = ({ className = "" }) => {
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
    <div className={[styles.faq, className].join(" ")}>
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
            <div
              className={styles.accordionItem}
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
                  How can I contact Maha Balloon Adventures?
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
              <div
                className={styles.accordionContentaccordionDef}
                data-acc-content
              >
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      <p className={styles.forInquiriesContactUsAt}>
                        <span>For inquiries, contact us at:</span>
                      </p>
                      <p className={styles.forInquiriesContactUsAt}>
                        <span>Email: </span>
                        <a
                          className={styles.infomahaballoonadventurescom}
                          href="mailto: info@mahaballoonadventures.com"
                          target="_blank"
                        >
                          <span>
                            <span
                              className={styles.infomahaballoonadventurescom1}
                            >
                              info@mahaballoonadventures.com
                            </span>
                          </span>
                        </a>
                      </p>
                      <p className={styles.forInquiriesContactUsAt}>
                        <span>Phone No: +971 50 260 0101</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.accordionItemClose}
              data-acc-item
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.question2}>
                <div className={styles.question1}>
                  How can I contact Maha Balloon Adventures?
                </div>
                <Image
                  className={styles.icon1}
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.answer1}>
                <div className={styles.text1}>
                  Our customer service team is available from 9 AM to 6 PM,
                  Sunday through Friday.
                </div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
              question="What are your customer service hours?"
              icon="/icon-24@2x.png"
              text="Our customer service team is available from 9 AM to 6 PM, Sunday through Friday."
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
                  What are your customer service hours?
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
              <div className={styles.accordionContent1} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
              question="Where are you located?"
              icon="/icon-24@2x.png"
              text="We are located in Dubai, UAE. For specific address details, please contact us directly."
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
                <div className={styles.question1}>Where are you located?</div>
                <Image
                  className={styles.icon}
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className={styles.accordionContent1} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Can I visit your office in person?"
              icon="/icon-24@2x.png"
              text="Yes, you can visit our office. Please contact us to schedule an appointment."
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
                  Can I visit your office in person?
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
              <div className={styles.accordionContent1} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="How quickly will I receive a response to my inquiry?"
              icon="/icon-24@2x.png"
              text="We aim to respond to all inquiries within 24 hours during business days."
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
                  How quickly will I receive a response to my inquiry?
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
              <div className={styles.accordionContent1} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Do you offer support in multiple languages?"
              icon="/icon-24@2x.png"
              text="Yes, our team can assist you in several languages. Please specify your preferred language when contacting us."
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
                  Do you offer support in multiple languages?
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
              <div className={styles.accordionContent1} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Can I speak to someone directly about my booking?"
              icon="/icon-24@2x.png"
              text="Of course! Our experts are on hand to have a conversation regarding your reservation. Please call us or send us an email to organize it."
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
                  Can I speak to someone directly about my booking?
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
              <div className={styles.accordionContent1} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Is there a live chat option available?"
              icon="/icon-24@2x.png"
              text="Right now, there is no option for live chat. But you can email or phone us anytime for immediate assistance."
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
                  Is there a live chat option available?
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
              <div className={styles.accordionContent1} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="How do I update or change my booking details?"
              icon="/icon-24@2x.png"
              text="To alter the details of your bookings, kindly reach out through email or phone with your reference number for bookings."
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
                  How do I update or change my booking details?
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
              <div className={styles.accordionContent1} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="What information do I need to provide when contacting you?"
              icon="/icon-24@2x.png"
              text="When contacting us, please provide your full name, booking reference number (if applicable), and any specific details related to your inquiry."
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
                  What information do I need to provide when contacting you?
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
              <div className={styles.accordionContent1} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
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
    </div>
  );
};

FAQ3.propTypes = {
  className: PropTypes.string,
};

export default FAQ3;
