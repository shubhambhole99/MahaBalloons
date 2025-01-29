import Image from "next/image";
import Banner from "../../components/banner";
import Arrows from "../../components/arrows";
import BtnLearn from "../../components/btn-learn";
import Slide from "../../components/slide";
// import FAQ1 from "../../components/f-a-q1";
import FAQ from "../../components/f-a-q";
import experiencesData from "/Db/experiences";
import Footer from "../../components/footer";
import styles from ".././desk-experiences.module.css";
import Packages from "/components/Sliders/Packages/packages";
import Personalizedpackages from "/components/Sliders/PersonalizedPackages/personalizedpackages";
import Testimonial from "../../components/testimonials"
import FrameComponent from "../../components/frame-component";

const DeskExperiences = () => {
  return (
    <div className={styles.deskExperiences}>
      <FrameComponent mahaBalloonAdventuresLogo="/maha-balloon-adventures-logo-2@2x.png" />
      <header className={styles.header}>
        <Banner
          mahaBalloonAdventuresLogo="/maha-balloon-adventures-logo-2@2x.png"
          mediumLengthHeroHeadlineGoes="Experiences"
          loremIpsumDolorSitAmetConsect="Home - Experiences"
          wish="/wish.svg"
          account="/account.svg"
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

      </header>
      <div className="parent">
        <section className={styles.quickBooking}>
          <div className={styles.sectionTitle}>
            <div className={styles.subheading}>Plans</div>
            <div className={styles.content12}>
              <h1 className={styles.exploreOurPackages}>Explore Our Packages</h1>
            </div>
          </div>
        </section>
        <Packages />
        {/* Gift an Unforgettable */}
        <div className={styles.parents}>
          <section className={styles.cta}>
            <div className={styles.container}>
              <div className={styles.column}>
                <h1 className={styles.heading6}>
                  <p
                    className={styles.giftAnUnforgettable}
                  >{`Gift an Unforgettable Hot Air `}</p>
                  <p className={styles.giftAnUnforgettable}>
                    Balloon Adventure Today !!
                  </p>
                </h1>
              </div>

              <div className={styles.column1}>
                <div className={styles.perfumes}>
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
        </div>

        <section className={styles.quickBookingWrapper}>
          <div className={styles.quickBooking1}>
            <div className={styles.sectionTitle}>
              <div className={styles.subheading}>
                Customized Hot Air Balloon Packages in Dubai
              </div>
              <div className={styles.content12}>
                <h1 className={styles.bestPersonalizedHot}>
                  Best Personalized Hot Air Balloon Packages
                </h1>
              </div>
            </div>
          </div>
        </section>
        <Personalizedpackages />

        <section className={styles.testimonialContentWrapper}>
          <div className={styles.testimonialContent}>
            {/* <div className={styles.title}>
            <div className={styles.sectionTitle2}>
              <div className={styles.subheading2}>
                Customer Feedback about the best hot air balloon in Uae
              </div>
              <div className={styles.content36}>
                <h1 className={styles.heading13}>Customer Testimonials</h1>
                <div
                  className={styles.text}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
              </div>
            </div>
          </div> */}
          </div>
        </section>
        <Testimonial />

        <section>
          <div>


          </div>
        </section>
        <section className={styles.additional}>
          <div className={styles.sectionTitle}>
            <div className={styles.subheading3}>
              Choose From The Best Hot Air Balloon Packages in Dubai
            </div>
            <div className={styles.content12}>
              <h1 className={styles.additionalServices}>Additional Services</h1>
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
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. `}</div>
            </div>
          </div>
          <div className={styles.content13}>
            <div className={styles.dates}>
              <div className={styles.button2}>
                <div className={styles.wed07Aug}>Wed 07 Aug</div>
              </div>
              <div className={styles.button3}>
                <div className={styles.linkFour}>Thu 08 Aug</div>
              </div>
              <div className={styles.button3}>
                <div className={styles.linkFour}>Fri 09 Aug</div>
              </div>
              <div className={styles.button3}>
                <div className={styles.linkFour}>Sat 10 Aug</div>
              </div>
              <div className={styles.button3}>
                <div className={styles.linkFour}>Sun 11 Aug</div>
              </div>
            </div>
            <div className={styles.content14}>
              <div className={styles.card}>
                <div className={styles.image}>
                  <Image
                    className={styles.placeholderImageIcon2}
                    loading="lazy"
                    width={400}
                    height={300}
                    alt=""
                    src="/placeholder-image-8@2x.png"
                  />
                  <div className={styles.tags}>
                    <div className={styles.tag}>
                      <div className={styles.pageOne}>Featured</div>
                    </div>
                  </div>
                </div>
                <div className={styles.content15}>
                  <div className={styles.details12}>
                    <div className={styles.plan}>
                      <h3 className={styles.heading}>Flight Video</h3>
                      <div className={styles.heading1}>From AED 250</div>
                    </div>
                    <div className={styles.text24}>
                      Take your memories with you by purchasing an edited digital
                      copy of your flight (download link sent via email or
                      WhatsApp).
                    </div>
                    <div className={styles.details13}>
                      <div className={styles.content16}>
                        <div className={styles.pageOne}>Time</div>
                        <div className={styles.linkFour}>45 - 60 Minutes</div>
                      </div>
                      <div className={styles.content16}>
                        <div className={styles.pageOne}>Location</div>
                        <div className={styles.linkFour}>
                          Margham Dubai, United Arab Emirates
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actions7}>
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="unset"
                      btnLearnBackgroundColor="#7ab342"
                      button="Contact Us"
                      buttonHeight="unset"
                      buttonDisplay="unset"
                      buttonColor="#fff"
                      buttonWidth="unset"
                    />
                    <BtnLearn
                      showBtnLearn={false}
                      btnLearnBorder="1px solid #7ab342"
                      btnLearnBackgroundColor="unset"
                      button="View Details"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#000"
                      buttonWidth="88px"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.image}>
                  <Image
                    className={styles.placeholderImageIcon2}
                    loading="lazy"
                    width={400}
                    height={300}
                    alt=""
                    src="/placeholder-image-9@2x.png"
                  />
                  <div className={styles.tags}>
                    <div className={styles.tag}>
                      <div className={styles.pageOne}>Featured</div>
                    </div>
                  </div>
                </div>
                <div className={styles.content15}>
                  <div className={styles.sectionTitle}>
                    <div className={styles.plan}>
                      <h3 className={styles.heading}>Celebration Package</h3>
                      <div className={styles.heading1}>From AED 300</div>
                    </div>
                    <div className={styles.text24}>
                      Celebrate life’s special moments with a breathtaking
                      experience in the sky. Whether it's a birthday, anniversary,
                      proposal, or milestone event, make lasting memories with a
                      unique adventure that turns every occasion into an
                      unforgettable journey.
                    </div>
                    <div className={styles.details13}>
                      <div className={styles.content16}>
                        <div className={styles.pageOne}>Time</div>
                        <div className={styles.linkFour}>45 - 60 Minutes</div>
                      </div>
                      <div className={styles.content16}>
                        <div className={styles.pageOne}>Location</div>
                        <div className={styles.linkFour}>
                          Margham Dubai, United Arab Emirates
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actions7}>
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="unset"
                      btnLearnBackgroundColor="#7ab342"
                      button="Contact Us"
                      buttonHeight="unset"
                      buttonDisplay="unset"
                      buttonColor="#fff"
                      buttonWidth="unset"
                    />
                    <BtnLearn
                      showBtnLearn={false}
                      btnLearnBorder="1px solid #7ab342"
                      btnLearnBackgroundColor="unset"
                      button="View Details"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#000"
                      buttonWidth="88px"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.image2}>
                  <Image
                    className={styles.placeholderImageIcon2}
                    loading="lazy"
                    width={400}
                    height={300}
                    alt=""
                    src="/placeholder-image-10@2x.png"
                  />
                  <div className={styles.tags}>
                    <div className={styles.tag}>
                      <div className={styles.pageOne}>Featured</div>
                    </div>
                  </div>
                </div>
                <div className={styles.content15}>
                  <div className={styles.details16}>
                    <div className={styles.plan2}>
                      <h3 className={styles.heading4}>Private Transfer</h3>
                      <div className={styles.heading5}>From AED 600-800</div>
                    </div>
                    <div className={styles.thirdDescription}>
                      (In City AED 600 for Private 4x4 vehicle for pick up and
                      drop off within Dubai city. AED 800 for pick-ups outside
                      Dubai City- Jebel Ali, Bab Al Shams, and Sharjah). Please
                      contact us for pick up from other Emirates
                    </div>
                    <div className={styles.details13}>
                      <div className={styles.content16}>
                        <div className={styles.pageOne}>Time</div>
                        <div className={styles.linkFour}>45 - 60 Minutes</div>
                      </div>
                      <div className={styles.content16}>
                        <div className={styles.pageOne}>Location</div>
                        <div className={styles.linkFour}>
                          Margham Dubai, United Arab Emirates
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actions9}>
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="unset"
                      btnLearnBackgroundColor="#7ab342"
                      button="Contact Us"
                      buttonHeight="unset"
                      buttonDisplay="unset"
                      buttonColor="#fff"
                      buttonWidth="unset"
                    />
                    <BtnLearn
                      showBtnLearn={false}
                      btnLearnBorder="1px solid #7ab342"
                      btnLearnBackgroundColor="unset"
                      button="View Details"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#000"
                      buttonWidth="88px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FAQ
          content={experiencesData?.faqsList}
          title={"Frequently Asked Questions "}
        />
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

export default DeskExperiences;
