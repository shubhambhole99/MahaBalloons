import { useCallback } from "react";
import Image from "next/image";
import AccordionItem from "./accordion-item";
import AccordionItem1 from "./accordion-item1";
import PropTypes from "prop-types";
import styles from "./f-a-q.module.css";

const FAQ = ({ className = "" }) => {
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
              question="How experienced are your balloon pilots?"
              icon="/icon-10.svg"
              text="All our pilots at Maha B have GCAA UAE General Civil Aviation Authority license and a vast experience in flying thus offering safety to the clients."
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
                  How experienced are your balloon pilots?
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
                      Our flights are suitable for passengers aged 5 to 80
                      years. Unfortunately, children under 5 and adults over 80
                      are not permitted to fly. Children under 18 must be
                      accompanied by a parent or guardian. Please note that the
                      maximum weight limit is 120 kg. Guests exceeding this
                      limit will need pilot approval and may incur an additional
                      charge
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
              question="What safety measures do you have in this place?"
              icon="/icon-19@2x.png"
              text="First of all, let us note that the safety issue prevails in this respective sphere. Every flight done in our balloon uses highly trained and licensed pilots whose aim is to provide a safe and fun experience. In adherence to safety practices, we observe measures provided by the General Civil Aviation Authority (GCAA) to give you the desired comfort while flying over the beautiful Dubai desert."
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
                  What safety measures do you have in this place?
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
                      Our flights are suitable for passengers aged 5 to 80
                      years. Unfortunately, children under 5 and adults over 80
                      are not permitted to fly. Children under 18 must be
                      accompanied by a parent or guardian. Please note that the
                      maximum weight limit is 120 kg. Guests exceeding this
                      limit will need pilot approval and may incur an additional
                      charge
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
              question="Do you have any certifications or awards?"
              icon="/icon-19@2x.png"
              text="Yes, we are please to have several accreditations from the General Civil Aviation Authority (GCAA) to ensure that we compete high on safety and its operational standards. We are known by the numerous awards and recognitions we have received. Moreover, our commitment to safety, excellence in customer relations and in offering amazing experiences, place us amongst the best hot air balloon operators in Dubai"
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
                  Do you have any certifications or awards?
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
                      Our flights are suitable for passengers aged 5 to 80
                      years. Unfortunately, children under 5 and adults over 80
                      are not permitted to fly. Children under 18 must be
                      accompanied by a parent or guardian. Please note that the
                      maximum weight limit is 120 kg. Guests exceeding this
                      limit will need pilot approval and may incur an additional
                      charge
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="What is the capacity of your balloons?"
              icon="/icon-19@2x.png"
              text="Maha B offers two types of balloons for different experiences: One of them can transport up to 20 passengers while the other is a balloon that can take up to 24 passengers. For private purposes, we offer the balloon with seating capacity for 6 passengers to guarantee a more individualized experience."
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
                  What is the capacity of your balloons?
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
                      Our flights are suitable for passengers aged 5 to 80
                      years. Unfortunately, children under 5 and adults over 80
                      are not permitted to fly. Children under 18 must be
                      accompanied by a parent or guardian. Please note that the
                      maximum weight limit is 120 kg. Guests exceeding this
                      limit will need pilot approval and may incur an additional
                      charge
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="How is the weather handled for balloon rides?"
              icon="/icon-19@2x.png"
              text="In the course of the flight, if the weather hampers the chances, Maha B will advise on flying at the next possible date. If we cannot reschedule, we will give a full refund within 10 working days as indicated in our cancellation policy."
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
                  How is the weather handled for balloon rides?
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
                      Our flights are suitable for passengers aged 5 to 80
                      years. Unfortunately, children under 5 and adults over 80
                      are not permitted to fly. Children under 18 must be
                      accompanied by a parent or guardian. Please note that the
                      maximum weight limit is 120 kg. Guests exceeding this
                      limit will need pilot approval and may incur an additional
                      charge
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Can you accommodate special requests or celebrations?"
              icon="/icon-19@2x.png"
              text="Yes, Special requests for celebrations are welcome. Whatever the celebration, be it a birthday, anniversary, family event, graduation or any other special event, we ensure that your occasion is memorable. Have your hot air balloon ride with additional choices such as. A gourmet breakfast, birthday cake, or romantic accents in case it is an anniversary. Families with children from five and up to elderly people can enjoy wonderful views together; graduates and other people who have significant anniversaries in their lives: birthdays or retirements, for example, could celebrate such events with our flight."
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
                  Can you accommodate special requests or celebrations?
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
                      Our flights are suitable for passengers aged 5 to 80
                      years. Unfortunately, children under 5 and adults over 80
                      are not permitted to fly. Children under 18 must be
                      accompanied by a parent or guardian. Please note that the
                      maximum weight limit is 120 kg. Guests exceeding this
                      limit will need pilot approval and may incur an additional
                      charge
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Do you provide transportation to the balloon launch site?"
              icon="/icon-19@2x.png"
              text="Yes, All clients who hire our services are provided with transportation to and from the site where the balloon launch will be conducted."
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
                  Do you provide transportation to the balloon launch site?
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
                      Our flights are suitable for passengers aged 5 to 80
                      years. Unfortunately, children under 5 and adults over 80
                      are not permitted to fly. Children under 18 must be
                      accompanied by a parent or guardian. Please note that the
                      maximum weight limit is 120 kg. Guests exceeding this
                      limit will need pilot approval and may incur an additional
                      charge
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <div
              className={styles.accordionItem}
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.question14}>
                <div className={styles.question1}>
                  What is your refund policy?
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
              <div className={styles.answer7}>
                <div className={styles.text7}>
                  <ul className={styles.anyCancellationThatIsDone}>
                    <li className={styles.anyCancellationThat}>
                      Any cancellation that is done 72 hours or more before the
                      time of the flight will be fully reimbursed.
                    </li>
                    <li className={styles.anyCancellationThat}>
                      The clients who would wish to cancel their tickets are
                      allowed to do so, but they will only be credited 50% of
                      the ticket amount if such a cancellation is done 48 hours
                      to the actual flight time.
                    </li>
                    <li className={styles.anyCancellationThat}>
                      Any cancellations that are done within 24 hours to the
                      particular flight are not refundable whatsoever.
                    </li>
                    <li>
                      Any passenger who does not turn up at the agreed point and
                      time of pickup, they are considered a no show. In this
                      case though, the full charge for the booked flight will be
                      incurred and no refund shall be available. For
                      cancellation request kindly email us via the channel you
                      booked the tickets with.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                  What is your refund policy?
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
                      Our flights are suitable for passengers aged 5 to 80
                      years. Unfortunately, children under 5 and adults over 80
                      are not permitted to fly. Children under 18 must be
                      accompanied by a parent or guardian. Please note that the
                      maximum weight limit is 120 kg. Guests exceeding this
                      limit will need pilot approval and may incur an additional
                      charge
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem
              accordionItemBorderBottom="unset"
              question="Do you offer training or certification for aspiring balloon pilots?"
              icon="/icon-19@2x.png"
              text="You should note that we are not an organisation that provides training and certification to those who want to become balloon pilots. However, all the guests are provided with flight certificate that is signed by the pilot as a token to take away. This certificate makes one to have a good memory of the hot air balloon ride."
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
                  Do you offer training or certification for aspiring balloon
                  pilots?
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
                      Our flights are suitable for passengers aged 5 to 80
                      years. Unfortunately, children under 5 and adults over 80
                      are not permitted to fly. Children under 18 must be
                      accompanied by a parent or guardian. Please note that the
                      maximum weight limit is 120 kg. Guests exceeding this
                      limit will need pilot approval and may incur an additional
                      charge
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.accordionContent1} />
              <div className={styles.div} />
            </div>
            <AccordionItem1
              question="Is the flight suitable for everyone?"
              icon="/icon-19@2x.png"
              text="Our flights are suitable for passengers aged 5 to 80 years. Unfortunately, children under 5 and adults over 80 are not permitted to fly. Children under 18 must be accompanied by a parent or guardian. Please note that the maximum weight limit is 120 kg. Guests exceeding this limit will need pilot approval and may incur an additional charge"
            />
            <div
              className={styles.accordionItemClose}
              data-acc-item
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.question14}>
                <div className={styles.question1}>
                  Is the flight suitable for everyone?
                </div>
                <Image
                  className={styles.icon10}
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/icon-10.svg"
                />
              </div>
              <div className={styles.answer7}>
                <div className={styles.text7}>
                  All our pilots at Maha B have GCAA UAE General Civil Aviation
                  Authority license and a vast experience in flying thus
                  offering safety to the clients.
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

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;
