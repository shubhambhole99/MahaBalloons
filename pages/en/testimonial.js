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
      <TopNavigation />
      <section className={styles.mainContentWrapper}>
        <div className={styles.mainContent}>
          <Title />
          <Row />
        </div>
      </section>
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.column}>
            <h1 className={styles.heading}>
              <p
                className={styles.giftAnUnforgettable}
              >{`Gift an Unforgettable Hot Air `}</p>
              <p className={styles.giftAnUnforgettable}>
                Balloon Adventure Today !!
              </p>
            </h1>
          </div>
          <div className={styles.column1}>
            <div className={styles.text}>
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
      <FAQ2 />
      <footer className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.links}>
            <div className={styles.column2}>
              <Image
                className={styles.mahaBalloonAdventuresLogo2}
                loading="lazy"
                width={94}
                height={75}
                alt=""
                src="/maha-balloon-adventures-logo-2-1@2x.png"
              />
            </div>
            <div className={styles.column3}>
              <div className={styles.quickLinks}>Quick Links</div>
              <div className={styles.footerLinks}>
                <div className={styles.link}>
                  <div className={styles.aboutUs}>About Us</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.aboutUs}>Experiences</div>
                </div>
                <div className={styles.link2}>
                  <div className={styles.merchandise}>Merchandise</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.aboutUs}>Things To Do</div>
                </div>
              </div>
            </div>
            <div className={styles.column3}>
              <div className={styles.quickLinks}>Company</div>
              <div className={styles.footerLinks}>
                <div className={styles.link}>
                  <div className={styles.aboutUs}>Contact Us</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.aboutUs}>Blogs</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.aboutUs}>Faqs</div>
                </div>
                <div className={styles.link2}>
                  <div className={styles.merchandise}>Careers</div>
                </div>
              </div>
            </div>
            <div className={styles.column3}>
              <div className={styles.quickLinks}>Support</div>
              <div className={styles.footerLinks}>
                <div className={styles.link}>
                  <div className={styles.aboutUs}>+971502600101</div>
                </div>
                <div className={styles.link}>
                  <div className={styles.infomahaballoonadventurescom}>
                    info@mahaballoonadventures.com
                  </div>
                </div>
                <div className={styles.link}>
                  <div className={styles.aboutUs}>Margham Dubai, UAE</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.newslatter}>
            <div className={styles.subscriptionPrompt}>
              <div className={styles.quickLinks}>Subscribe</div>
              <div className={styles.joinOurNewsletter}>
                Join our newsletter to stay up to date on features and releases.
              </div>
            </div>
            <div className={styles.actions1}>
              <div className={styles.form}>
                <TextInput type="Default" />
                <Button
                  darkMode={false}
                  iconPosition="No icon"
                  small={false}
                  style="Primary"
                  button="Subscribe"
                  buttonColor="#000"
                />
              </div>
              <div className={styles.joinOurNewsletter}>
                {`By subscribing you agree to with our `}
                <span className={styles.privacyPolicy}>Privacy Policy</span> and
                provide consent to receive updates from our company.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerLinks} data-acc-group>
          <div
            className={styles.credits}
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className={styles.credits1}>
              <div className={styles.moreInformations}>More informations</div>
            </div>
            <Image
              className={styles.icon}
              loading="lazy"
              width={21}
              height={21}
              alt=""
              src="/icon-25@2x.png"
            />
          </div>
          <div className={styles.accordionItemMock} data-acc-item data-acc-open>
            <div
              className={styles.creditsOpen}
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.credits1}>
                <div className={styles.moreInformations}>More informations</div>
              </div>
              <Image
                className={styles.icon}
                loading="lazy"
                width={21}
                height={21}
                alt=""
                src="/icon-25@2x.png"
              />
              <div className={styles.accordionContent} />
            </div>
            <div className={styles.accordionContent1} data-acc-content>
              <div className={styles.accordionContentWrap}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
          <div
            className={styles.credits3}
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className={styles.divider} />
            <div className={styles.row}>
              <div className={styles.credits4}>
                <div className={styles.moreInformations}>
                  <span>© 2024 Designed with 💕in UAE by Prism Digital: D</span>
                  <a
                    className={styles.igitalMarketingAgencyDubai}
                    href="https://www.prism-me.com/"
                    target="_blank"
                  >
                    <span>
                      <span className={styles.privacyPolicy}>
                        igital Marketing Agency Dubai.
                      </span>
                    </span>
                  </a>
                </div>
                <div className={styles.footerLinks3}>
                  <div className={styles.termsOfService}>Privacy Policy</div>
                  <div className={styles.termsOfService}>Terms of Service</div>
                  <div className={styles.termsOfService}>Cookies Settings</div>
                </div>
              </div>
              <div className={styles.socialLinks}>
                <Image
                  className={styles.iconFacebook}
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--facebook1.svg"
                />
                <Image
                  className={styles.iconFacebook}
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--instagram1.svg"
                />
                <Image
                  className={styles.iconFacebook}
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--x1.svg"
                />
                <Image
                  className={styles.iconFacebook}
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--linkedin1.svg"
                />
                <Image
                  className={styles.iconFacebook}
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--youtube.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.accordionItemMock} data-acc-item data-acc-open>
            <div
              className={styles.creditsOpen}
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className={styles.credits1}>
                <div className={styles.moreInformations}>More informations</div>
              </div>
              <Image
                className={styles.icon}
                loading="lazy"
                width={21}
                height={21}
                alt=""
                src="/icon-25@2x.png"
              />
              <div className={styles.accordionContent} />
            </div>
            <div className={styles.accordionContent1} data-acc-content>
              <div className={styles.accordionContentWrap}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DeskTestimonials;
