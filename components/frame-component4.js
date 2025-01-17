import { useCallback } from "react";
import Image from "next/image";
import AccordionItem2 from "./accordion-item2";
import PropTypes from "prop-types";
import styles from "./frame-component4.module.css";

const FrameComponent4 = ({ className = "" }) => {
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
                Frequently Asked Questions
              </h1>
            </div>
            <div className={styles.accordion} data-acc-group>
              <AccordionItem2
                question="Can I combine a hot air balloon ride with a desert safari?"
                icon="/icon.svg"
                text="Yes, many tour operators provide deals in which one is given the opportunity for the hot air balloon and a desert safari, which is an amazing way of experiencing Dubai’s desert from the skies and in the vehicle."
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
                      Can I combine a hot air balloon ride with a desert safari?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
                question="What are the top attractions to visit in Dubai?"
                icon="/icon-24@2x.png"
                text="The landmarks to visit in Dubai include Burj Khalifa, Dubai Fountain, Burj Al Arab, Palm Jumeirah, Dubai Mall, and the Dubai Miracle Garden. If you want a combination of fun and leisure, then you don’t want to leave Jumeirah Beach and the Dubai Aquarium."
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
                      What are the top attractions to visit in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
                question="How can I book multiple activities in Dubai?"
                icon="/icon-24@2x.png"
                text="Popular forms of excursions include booking several activities at once via travel companies or directly via tour operators and Dubai tourism websites. Services are well available, and most of them display package deals or activity passes for easier use."
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
                      How can I book multiple activities in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="What is the best way to explore Dubai’s landmarks?"
                icon="/icon-24@2x.png"
                text="The best means to get an overview of the landmarks in Dubai include hiring tour services, hop-on-hop-off shuttle bus service, or hiring a car. To experience different ways one can take a helicopter ride, hot air balloon, or a cruise tour and explore the beauty of Dubai."
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
                      What is the best way to explore Dubai’s landmarks?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="What is the best time to visit Dubai for outdoor activities?"
                icon="/icon-24@2x.png"
                text="The ideal time to go out is during the dry season, between November and March, since temperatures are not extremely hot and it is perfect for visiting beaches and parks or going on desert trips."
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
                      What is the best time to visit Dubai for outdoor
                      activities?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="What are the must-see cultural attractions in Dubai?"
                icon="/icon-24@2x.png"
                text="Cultural attractions mostly include the Dubai Museum, the Al Fahidi Historical Society, the Etihad Museum, the Spice Souk, and the Gold Souk."
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
                      What are the must-see cultural attractions in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="Are there any adventure sports available in Dubai?"
                icon="/icon-24@2x.png"
                text="Yes, Dubai comes with its unique form of adventure sports such as skydiving, sandboarding, dune bashing, skiing within Ski Dubai, and water sports such as jet skiing and parasailing."
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
                      Are there any adventure sports available in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="What shopping experiences are unique to Dubai?"
                icon="/icon-24@2x.png"
                text="Explore and experience shopping in the traditional souk, super luxury malls like the Dubai Mall and Mall of the Emirates, and shopping festivals like the Dubai Shopping Festival."
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
                      What shopping experiences are unique to Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="Can I visit Dubai’s beaches all year round?"
                icon="/icon-24@2x.png"
                text="Some of Dubai’s beaches are open all year round, but the best time to enjoy the beach is during the dry season, which is from November to March. During summer it is very hot, and sometimes it reaches high temperatures that becomes difficult to visit the beaches."
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
                      Can I visit Dubai’s beaches all year round?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="What dining options are available in Dubai?"
                icon="/icon-24@2x.png"
                text="Visitors can indulge in a variety of delicious food from world-class restaurants offering continental dishes to local food and beverages, including Emirati foods. Dubai is the best destination to discover and explore diverse traditional foods in restaurants, street food, takeaways, cafes and pubs, and fast food meals."
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
                      What dining options are available in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="Are there any free attractions in Dubai?"
                icon="/icon-24@2x.png"
                text="Yes, you can take a walk through the traditional souks and the public beaches. One can explore the Al Fahidi Historical Neighborhood too. Anyone can also watch the Dubai Fountain show for free."
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
                      Are there any free attractions in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="What are the best spots for photography in Dubai?"
                icon="/icon-24@2x.png"
                text="The most popular places to photograph are Burj Khalifa, Dubai Marina, Palm Jumeirah, Dubai Fountain, and the Dubai Miracle Garden. Some stunning desert photography can be taken either in the early morning or in the evening through a desert safari."
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
                      What are the best spots for photography in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="How safe is Dubai for tourists?"
                icon="/icon-24@2x.png"
                text="There is a low crime rate in this country, and hence Dubai is known to be safe for tourists. Although crime in the city is very low, tourists are encouraged to exercise normal safety measures as they tour the city and adhere to the local regulations."
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
                      How safe is Dubai for tourists?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="Can I experience traditional Emirati culture in Dubai?"
                icon="/icon-24@2x.png"
                text="Of course, it’s possible to discover Emirati culture during travel, visit cultural sites, attend festivals, try Emirati cuisine, and visit museums in Dubai and the rest of the UAE, including the Dubai Museum and the Etihad Museum."
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
                      Can I experience traditional Emirati culture in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="What are the best outdoor activities in Dubai?"
                icon="/icon-24@2x.png"
                text="Dubai gives you the best outdoor activities to explore such as desert safaris, hot air balloons, beach activities, and visits to the Dubai Parks and Resorts."
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
                      What are the best outdoor activities in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="Are there any eco-friendly attractions in Dubai?"
                icon="/icon-24@2x.png"
                text="Yes, one of the eco-friendly attractions is Dubai Creek which supports local wildlife and sustainable activities at the Al Marmoom Desert Conservation Reserve."
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
                      Are there any eco-friendly attractions in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="What unique experiences does Dubai offer that I can’t find elsewhere?"
                icon="/icon-24@2x.png"
                text="Distinct experiences include a ride to the top of the tallest building in the world, Burj Khalifa; skiing in the middle of the desert; and tasting the royal feel of one of the most luxurious hotels in the world, Burj Al Arab."
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
                      What unique experiences does Dubai offer that I can’t find
                      elsewhere?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="How can I make the most of my 3-day trip to Dubai?"
                icon="/icon-24@2x.png"
                text="When preparing for a three-day excursion, the following activities to be explored are picnic areas, historical sites, cultural exhibits, and entertainment hubs. To make the most of it plan a mix of top attractions like visiting the Burj Khalifa, Dubai Mall, a desert safari, and taking time to enjoy the beaches and local dining."
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
                      How can I make the most of my 3-day trip to Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="What are the top night-time activities in Dubai?"
                icon="/icon-24@2x.png"
                text="Some of the best activities during nighttime in Dubai are going out for dinner in Dubai Marina, taking the night cruise, experiencing dining at rooftop restaurants, and having a night out at Downtown Dubai and JBR."
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
                      What are the top night-time activities in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="Can I find wellness and spa experiences in Dubai?"
                icon="/icon-24@2x.png"
                text="Yes, Dubai does boast plenty for wellness and spa, or at least for luxury spas in its hotels, wellness retreats at places such as the Talise Spa, and even specialised treatments at the Armani Spa."
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
                      Can I find wellness and spa experiences in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="What are the best ways to experience Dubai’s nightlife?"
                icon="/icon-24@2x.png"
                text="Night entertainment at Downtown Dubai, Dubai Marina, and JBR are some places you never want to miss. The nightclubs, live music concerts and rooftop bars make Dubai come to life at night."
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
                      What are the best ways to experience Dubai’s nightlife?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="Are there any art and cultural festivals in Dubai?"
                icon="/icon-24@2x.png"
                text="Indeed, art and culture festivals are prevalent in Dubai, with examples being the Art Dubai, the Dubai International Film Festival, and the Dubai Food Festival."
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
                      Are there any art and cultural festivals in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="What are the transportation options for tourists in Dubai?"
                icon="/icon-24@2x.png"
                text="Taxis, Metro, buses, water taxis, and car rentals are some of the transport means available for use when in Paris. The Metro is also very useful as it provides an easy means to get to most of the tourist sites."
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
                      What are the transportation options for tourists in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="Can I find guided tours for exploring Dubai’s attractions?"
                icon="/icon-24@2x.png"
                text="Yes, guided tours are available for different attractions, and individuals can organise the tours online or with the help of local tour operators. This means that the available choices are private tours, group tours, and themed tours."
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
                      Can I find guided tours for exploring Dubai’s attractions?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="What are the best places to stay in Dubai for easy access to attractions?"
                icon="/icon-24@2x.png"
                text="Some of the favourite places to stay include Downtown Dubai which is closer to Burj Khalifa and shopping malls, Dubai Marina for fun lovers and beach lovers, and also Jumeirah for luxurious hotels and beaches."
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
                      What are the best places to stay in Dubai for easy access
                      to attractions?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="Are there any unique shopping festivals in Dubai?"
                icon="/icon-24@2x.png"
                text="Yes, the major shopping festivals are, for example, the Dubai Shopping Festival and the Dubai Summer Surprises, in which there are sales, promotions, and shows."
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
                      Are there any unique shopping festivals in Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="How do I stay connected while visiting Dubai?"
                icon="/icon-24@2x.png"
                text="You can use available communication services, which include buying a local SIM card, using international roaming, or using the available free Wi-Fi found in most public places and hotels."
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
                      How do I stay connected while visiting Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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
              <AccordionItem2
                accordionItemBorderBottom="unset"
                question="What should I pack for a trip to Dubai?"
                icon="/icon-24@2x.png"
                text="The climate is comparatively hot; therefore, take lightweight clothing, but still, some of the places are conservative, and it is suggested to bring some long clothes. Swimwear is needed for visiting beaches and swimming pools and one should also take at least a jacket or any kind of warm clothes for indoors."
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
                      What should I pack for a trip to Dubai?
                    </div>
                    <Image
                      className={styles.icon}
                      width={32}
                      height={32}
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className={styles.answer}>
                    <div className={styles.text}>
                      Yes, many tour operators provide deals in which one is
                      given the opportunity for the hot air balloon and a desert
                      safari, which is an amazing way of experiencing Dubai’s
                      desert from the skies and in the vehicle.
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

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
