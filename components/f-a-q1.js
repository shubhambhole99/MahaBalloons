import { useCallback } from "react";
import Image from "next/image";
import AccordionItem from "./accordion-item";
import AccordionItem1 from "./accordion-item1";
import PropTypes from "prop-types";
import styles from "./f-a-q1.module.css";

const FAQ1 = ({ className = "" }) => {
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
            <AccordionItem
              accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
              question="What can I expect during the hot air balloon ride?"
              icon="/icon.svg"
              text="During your flight, you'll experience a smooth, peaceful ascent into the sky, offering breathtaking views of Dubai's stunning desert landscapes. It's a serene, unforgettable adventure conducted by highly experienced and certified pilots."
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
                  What can I expect during the hot air balloon ride?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
              question="How early do balloon rides start?"
              icon="/icon-24@2x.png"
              text="Balloon rides often start at sunrise between 5-6 AM when the weather is perfect for smooth and secure flights."
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
                  How early do balloon rides start?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
              question="What is the duration of the entire experience?"
              icon="/icon-24@2x.png"
              text="The whole experience takes approximately 3 to 4 hours; this includes transport, briefing, 45 to 60 minutes of flight time, and other activities thereafter,"
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
                  What is the duration of the entire experience?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Is the flight suitable for all ages?"
              icon="/icon-24@2x.png"
              text="Flights are available for passengers aged from 5 up to 80 years old. However, children below 18 should be accompanied by an adult. In addition, young ones who are less than 5 and individuals above 80 cannot take part for security reasons."
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
                  Is the flight suitable for all ages?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Can I take photographs during the flight?"
              icon="/icon-24@2x.png"
              text="Absolutely! Photographs taken from the balloon are breathtaking, and one can capture some magnificent desert scenery."
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
                  Can I take photographs during the flight?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="What happens if there are high winds or bad weather?"
              icon="/icon-24@2x.png"
              text="In case of poor weather that would not allow for a tour, we reschedule your flight on the next available date. If such is not feasible, you will be issued a refund within ten working days."
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
                  What happens if there are high winds or bad weather?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Do you provide helmets or safety gear?"
              icon="/icon-24@2x.png"
              text="Helmets and other safety gear are generally not required, as the flight is smooth. However, all necessary safety measures are taken, and safety protocols are strictly followed."
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
                  Do you provide helmets or safety gear?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="How high do the balloons fly?"
              icon="/icon-24@2x.png"
              text="Normally, it varies between skies of around 1,000-3,000 feet above land depending on their ability to rise which gives a chance for excellent panoramas."
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
                  How high do the balloons fly?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Are the balloon rides accessible for people with disabilities?"
              icon="/icon-24@2x.png"
              text="Some providers offer accessibility options, but it’s best to confirm in advance to ensure accommodations for any special needs."
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
                  Are the balloon rides accessible for people with disabilities?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="What is the weight limit for passengers?"
              icon="/icon-24@2x.png"
              text="The maximum weight limit for each guest is limited to 120kg. Exceeding this limit may require the pilot’s approval as well as extra fees on top of it."
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
                  What is the weight limit for passengers?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Can I fly alone, or do I need to be in a group?"
              icon="/icon-24@2x.png"
              text="You may opt for solo flights or search for group ones according to your taste. Independent private bookings are meant for individuals or groups also available."
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
                  Can I fly alone, or do I need to be in a group?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="What is the procedure for boarding the balloon?"
              icon="/icon-24@2x.png"
              text="There will be footholds used to help you climb into the basket. Thus getting in is easy and the ground crew will ensure that all are safely inside before takeoff time elapses."
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
                  What is the procedure for boarding the balloon?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Can I extend the duration of my balloon ride?"
              icon="/icon-24@2x.png"
              text="More often than not the duration of flights is set but extensions can be granted on request through special packages."
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
                  Can I extend the duration of my balloon ride?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="What types of balloons do you use?"
              icon="/icon-24@2x.png"
              text="The sizes of our balloons are distinctive depending on the number of people in there. The larger ones that carry from 20-24 passengers serve the purposes of shared flights whereas smaller ones targeted for private use hold up to 6 people at most."
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
                  What types of balloons do you use?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Is there a minimum booking requirement for private flights?"
              icon="/icon-24@2x.png"
              text="Yes, there is a minimum requirement. The requirement varies across the different balloon sizes and levels of service requested. Customizable according to your preference private flight booking details are available."
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
                  Is there a minimum booking requirement for private flights?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Do you provide transportation to the landing site?"
              icon="/icon-24@2x.png"
              text="Yes sure! You can be picked up and dropped off around Dubai for seamless travel."
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
                  Do you provide transportation to the landing site?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Are there any food or drink options during the flight?"
              icon="/icon-24@2x.png"
              text="Food and drinks are generally not served during the flight, but some packages include refreshments after landing."
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
                  Are there any food or drink options during the flight?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Can I arrange a surprise balloon ride for someone?"
              icon="/icon-24@2x.png"
              text="Yes! We can help you plan a surprise balloon ride for special occasions like birthdays, anniversaries, or proposals, with customizable touches to make the experience memorable."
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
                  Can I arrange a surprise balloon ride for someone?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="What is the best time of year for a balloon ride in Dubai?"
              icon="/icon-24@2x.png"
              text="The best time for balloon rides is between October and April when the weather is cooler and more favorable for outdoor activities."
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
                  What is the best time of year for a balloon ride in Dubai?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Do you offer sunrise photography sessions?"
              icon="/icon-24@2x.png"
              text="Yes, sunrise balloon rides are ideal for photography, providing stunning lighting and views. Many guests use this opportunity for memorable photos."
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
                  Do you offer sunrise photography sessions?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Can I request a specific flight time or date?"
              icon="/icon-24@2x.png"
              text="Definitely. You can make requests for specific dates or flights; however, things like weather and existing reservations will affect whether those requests can be fulfilled."
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
                  Can I request a specific flight time or date?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="What is the policy for no-shows or late arrivals?"
              icon="/icon-24@2x.png"
              text="If you do not turn up at all, or arrive late, the full charge applies as this would be deemed cancellation. Always arrive on time at the specified pick-up point."
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
                  What is the policy for no-shows or late arrivals?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Can I combine a balloon ride with a sunset dinner?"
              icon="/icon-24@2x.png"
              text="In most cases, balloon flights happen during sunrise, but we can help schedule some other activities such as having your flight after which you can enjoy lunch prepared by professionals or celebrate your special occasions."
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
                  Can I combine a balloon ride with a sunset dinner?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="What is the cancellation policy for extreme weather conditions?"
              icon="/icon-24@2x.png"
              text="When extreme weather forces us to cancel flights, customers are allowed to either reschedule or refund their money completely according to our refund policy."
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
                  What is the cancellation policy for extreme weather
                  conditions?
                </div>
                <Image
                  className={styles.icon}
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-24@2x.png"
                />
              </div>
              <div className={styles.accordionContent} data-acc-content>
                <div className={styles.container1}>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Pilots don’t permit packing personal foodstuffs including
                      picnics inside during traveling time due to the occurrence
                      of safety and congestion problems; however, passengers can
                      opt for refreshing drinks immediately after they reach
                      down.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem1
              accordionItemHeight="128px"
              accordionItemBorderBottom="unset"
              question="Can I bring a picnic or personal snacks on the flight?"
              icon="/icon-24@2x.png"
              answerHeight="64px"
              text="Pilots don’t permit packing personal foodstuffs including picnics inside during traveling time due to the occurrence of safety and congestion problems; however, passengers can opt for refreshing drinks immediately after they reach down."
              textHeight="48px"
            />
            <div
              className={styles.accordionItemClose}
              data-acc-item
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.question48}>
                <div className={styles.question1}>
                  Can I bring a picnic or personal snacks on the flight?
                </div>
                <Image
                  className={styles.icon24}
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className={styles.answer24}>
                <div className={styles.text24}>
                  During your flight, you'll experience a smooth, peaceful
                  ascent into the sky, offering breathtaking views of Dubai's
                  stunning desert landscapes. It's a serene, unforgettable
                  adventure conducted by highly experienced and certified
                  pilots.
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FAQ1.propTypes = {
  className: PropTypes.string,
};

export default FAQ1;
