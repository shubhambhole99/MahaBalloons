import { useCallback } from "react";
import Image from "next/image";
import Banner1 from "../../components/banner1";
import Blog4 from "../../components/blog4";
import Arrows from "../../components/arrows";
import Card2 from "../../components/card2";
import BtnLearn from "../../components/btn-learn";
import AccordionItem3 from "../../components/accordion-item3";
import AccordionItem4 from "../../components/accordion-item4";
import Footer from "../../components/footer";
import styles from "../desk-blogs-inner.module.css";

const DeskBlogsInner = () => {
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
    <div className={styles.deskBlogsInner}>
      <header className={styles.header}>
        <Banner1
          bannerBackgroundImage="url('/banner4@3x.png')"
          mahaBalloonAdventuresLogo="/maha-balloon-adventures-logo-2@2x.png"
        />
        <div className={styles.navLinkDropdown}>
          <div className={styles.linkFour}>Merchandise</div>
          <Image
            className={styles.chevronDownIcon}
            width={24}
            height={24}
            alt=""
          />
        </div>
        <div className={styles.megaMenu}>
          <div className={styles.menu}>
            <div className={styles.menuList}>
              <div className={styles.pageGroupOne}>Page group one</div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page One</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Two</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Three</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Four</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.menuList}>
              <div className={styles.pageGroupOne}>Page group two</div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Five</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Six</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Seven</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Eight</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.pageGroupOne}>Featured from Blog</div>
            <div className={styles.blogList}>
              <div className={styles.blogItem}>
                <Image
                  className={styles.placeholderImageIcon}
                  width={160}
                  height={105}
                  alt=""
                  src="/placeholder-image@2x.png"
                />
                <div className={styles.content8}>
                  <div className={styles.content9}>
                    <div className={styles.pageOne}>Article Title</div>
                    <div className={styles.loremIpsumDolor8}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div className={styles.readMore}>Read more</div>
                </div>
              </div>
              <div className={styles.blogItem}>
                <Image
                  className={styles.placeholderImageIcon}
                  width={160}
                  height={105}
                  alt=""
                  src="/placeholder-image@2x.png"
                />
                <div className={styles.content8}>
                  <div className={styles.content9}>
                    <div className={styles.pageOne}>Article Title</div>
                    <div className={styles.loremIpsumDolor8}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div className={styles.readMore}>Read more</div>
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.button1}>See all articles</div>
              <Image
                className={styles.iconChevronRight}
                width={24}
                height={24}
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      <Blog4 />
      <section className={styles.related}>
        <div className={styles.content12}>
          <h1 className={styles.heading}>Related Blogs</h1>
          <div className={styles.sliderButtons}>
            <Image
              className={styles.arrowsIcon}
              loading="lazy"
              width={48}
              height={48}
              alt=""
              src="/arrows@2x.png"
            />
            <Arrows arrowsHeight="unset" fearrowUp="/fearrowup@2x.png" />
          </div>
          <div
            className={styles.text}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
        </div>
        <div className={styles.content13}>
          <Card2
            showCard
            cardWidth="unset"
            cardMinWidth="unset"
            cardGridColumn="unset"
            cardGridRow="unset"
            placeholderImage="/placeholder-image-62@2x.png"
            text="5 min read"
            heading="Hot Air Balloon vs. Helicopter: Which Dubai Adventure Is Right for You?"
            headingMargin="0"
            text1="Dubai: A dreamer’s utopia where aspirations soar high – a desert oasis that radiates luxury and cutting-edge technology in every direction. If you’re contemplating the best way to soak in the splendor of this stunning city from above,"
            textAlignSelf="unset"
          />
          <Card2
            showCard
            cardWidth="unset"
            cardMinWidth="unset"
            cardGridColumn="unset"
            cardGridRow="unset"
            placeholderImage="/placeholder-image-72@2x.png"
            text="10 min read"
            heading="Why a Hot Air Balloon Ride is the Best Way to See Dubai’s Desert"
            headingMargin="0"
            text1="If you think Dubai is all about beaches, shopping malls, amusement parks, and skyscrapers, you are missing out on the adventure quotient. The Emirates offers a wide range of activities that adventure enthusiasts can indulge in to satisfy their hunger for adventure."
            textAlignSelf="unset"
          />
          <Card2
            showCard
            cardWidth="unset"
            cardMinWidth="unset"
            cardGridColumn="unset"
            cardGridRow="unset"
            placeholderImage="/placeholder-image-83@2x.png"
            text="8 min read"
            heading="Best Time of Year for Hot Air Balloon Rides in Dubai"
            headingMargin="0"
            text1="Think about drifting serenely over the Arabian desert, watching the sunrise cast a golden glow over the endless dunes and clear weather! Doesn’t that sound magical? he question here is when is the best time to take this spectacular journey?"
            textAlignSelf="unset"
          />
        </div>
      </section>
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.column}>
            <h1 className={styles.heading1}>
              <p
                className={styles.giftAnUnforgettable}
              >{`Gift an Unforgettable Hot Air `}</p>
              <p className={styles.giftAnUnforgettable}>
                Balloon Adventure Today !!
              </p>
            </h1>
          </div>
          <div className={styles.column1}>
            <div className={styles.text1}>
              Customize and Gift a Hot Air Balloon Package for your loved one
              and get a Free Adventure for Yourself ! for a limited Time Only !!
            </div>
            <div className={styles.actions}>
              <BtnLearn
                showBtnLearn
                btnLearnBorder="1px solid #fff"
                btnLearnBackgroundColor="#fff"
                button="Book Now"
                buttonHeight="24px"
                buttonDisplay="inline-block"
                buttonColor="#000"
                buttonWidth="unset"
              />
              <BtnLearn
                showBtnLearn
                btnLearnBorder="1px solid #fff"
                btnLearnBackgroundColor="unset"
                button="WhatsApp Us"
                buttonHeight="24px"
                buttonDisplay="inline-block"
                buttonColor="#fff"
                buttonWidth="unset"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.faq}>
        <div className={styles.container1}>
          <Image
            className={styles.placeholderImageIcon2}
            width={600}
            height={418}
            alt=""
            src="/placeholder-image1@2x.png"
          />
          <div className={styles.details}>
            <div className={styles.content14}>
              <h1 className={styles.frequentlyAskedQuestions}>
                Frequently Asked Questions
              </h1>
            </div>
            <div className={styles.accordion} data-acc-group>
              <AccordionItem3 />
              <div
                className={styles.accordionItemClose}
                data-acc-item
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className={styles.question}>
                  <div className={styles.question1}>
                    Why should I fly in a hot air balloon in Dubai?
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
                  <div className={styles.text2}>
                    Yes indeed! Sure, you can take an enormous variety of gifts,
                    mementos and souvenirs as a proof of having taken the hot
                    air balloon uae. Carry back trendy merchandise by your side
                    with you as a souvenir of your great ride.
                  </div>
                </div>
                <div className={styles.accordionContent} />
                <div className={styles.div} />
              </div>
              <AccordionItem4
                question="Do you sell gifts or souvenirs for a hot air balloon flight?"
                text="Yes indeed! Sure, you can take an enormous variety of gifts, mementos and souvenirs as a proof of having taken the hot air balloon uae. Carry back trendy merchandise by your side with you as a souvenir of your great ride."
              />
              <div
                className={styles.accordionItemOpen}
                data-acc-item
                data-acc-open
              >
                <div
                  className={styles.question2}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className={styles.question1}>
                    Do you sell gifts or souvenirs for a hot air balloon flight?
                  </div>
                  <Image
                    className={styles.icon1}
                    loading="lazy"
                    width={32}
                    height={32}
                    alt=""
                    src="/icon.svg"
                  />
                </div>
                <div className={styles.accordionContent1} data-acc-content>
                  <div className={styles.container2}>
                    <div className={styles.answer1}>
                      <div className={styles.text3}>
                        Undoubtedly, one of the best ways to view the beautiful
                        scenery of the rejuvenating desert versus the magic of
                        Dubai skyline is by a Hot Air Balloon Ride. You can
                        enjoy what a wonderful comfort is to be lightly lifted
                        off the ground in a hot air balloon ride.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.accordionContent} />
                <div className={styles.div} />
              </div>
              <AccordionItem4
                accordionItemBorderBottom="1px solid rgba(0, 0, 0, 0.16)"
                question="How do I get to the take-off site?"
                text="We always know in our hearts to help you with your travel plans with all the questions for directions. The transport team will give detailed on how conveyance will be scheduled."
              />
              <div
                className={styles.accordionItemOpen}
                data-acc-item
                data-acc-open
              >
                <div
                  className={styles.question2}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className={styles.question1}>
                    How do I get to the take-off site?
                  </div>
                  <Image
                    className={styles.icon1}
                    loading="lazy"
                    width={32}
                    height={32}
                    alt=""
                    src="/icon.svg"
                  />
                </div>
                <div className={styles.accordionContent1} data-acc-content>
                  <div className={styles.container2}>
                    <div className={styles.answer1}>
                      <div className={styles.text3}>
                        Undoubtedly, one of the best ways to view the beautiful
                        scenery of the rejuvenating desert versus the magic of
                        Dubai skyline is by a Hot Air Balloon Ride. You can
                        enjoy what a wonderful comfort is to be lightly lifted
                        off the ground in a hot air balloon ride.
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.accordionContent} />
                <div className={styles.div} />
              </div>
              <AccordionItem4
                accordionItemBorderBottom="unset"
                question="What happens if the weather is bad?"
                text="For us, security is the foremost. If the weather is not flight-compatible, we can reschedule your flight for a time when things are deemed best. Our weather experts forecast 24/7 to ensure smooth and safe experience for our beloved passengers."
              />
              <div
                className={styles.accordionItemOpen}
                data-acc-item
                data-acc-open
              >
                <div
                  className={styles.question2}
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className={styles.question1}>
                    What happens if the weather is bad?
                  </div>
                  <Image
                    className={styles.icon1}
                    loading="lazy"
                    width={32}
                    height={32}
                    alt=""
                    src="/icon.svg"
                  />
                </div>
                <div className={styles.accordionContent1} data-acc-content>
                  <div className={styles.container2}>
                    <div className={styles.answer1}>
                      <div className={styles.text3}>
                        Undoubtedly, one of the best ways to view the beautiful
                        scenery of the rejuvenating desert versus the magic of
                        Dubai skyline is by a Hot Air Balloon Ride. You can
                        enjoy what a wonderful comfort is to be lightly lifted
                        off the ground in a hot air balloon ride.
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

export default DeskBlogsInner;
