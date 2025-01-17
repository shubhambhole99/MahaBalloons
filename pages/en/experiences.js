import Image from "next/image";
import Banner from "../../components/banner";
import Arrows from "../../components/arrows";
import BtnLearn from "../../components/btn-learn";
import Slide from "../../components/slide";
import FAQ1 from "../../components/f-a-q1";
import Footer from "../../components/footer";
import styles from ".././desk-experiences.module.css";

const DeskExperiences = () => {
  return (
    <div className={styles.deskExperiences}>
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
      <section className={styles.quickBooking}>
        <div className={styles.sectionTitle}>
          <div className={styles.subheading}>Plans</div>
          <div className={styles.content12}>
            <h1 className={styles.exploreOurPackages}>Explore Our Packages</h1>
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
                  src="/placeholder-image-2@2x.png"
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
                    <h3 className={styles.heading}>CLASSIC PACKAGE</h3>
                    <div className={styles.heading1}>
                      ADULTS: AED 1200 / CHILD: AED 1150
                    </div>
                  </div>
                  <div className={styles.linkFour}>
                    Experience breathtaking beauty in the Dubai desert with our
                    Classic Hot Air Balloon Package. Enjoy stunning panoramic
                    views as you gently ascend into the sky at an accessible,
                    affordable price.
                  </div>
                  <div className={styles.details1}>
                    <div className={styles.content16}>
                      <div className={styles.subheading}>Time</div>
                      <div className={styles.detailValue}>45 - 60 Minutes</div>
                    </div>
                    <div className={styles.content17}>
                      <div className={styles.subheading}>Location</div>
                      <div className={styles.empty}>
                        Margham Dubai, United Arab Emirates
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.actions}>
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="unset"
                    btnLearnBackgroundColor="#7ab342"
                    button="Book Now"
                    buttonHeight="24px"
                    buttonDisplay="inline-block"
                    buttonColor="#fff"
                    buttonWidth="unset"
                  />
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="1px solid #7ab342"
                    btnLearnBackgroundColor="unset"
                    button="View Details"
                    buttonHeight="24px"
                    buttonDisplay="inline-block"
                    buttonColor="#000"
                    buttonWidth="unset"
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
                  src="/placeholder-image-3@2x.png"
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
                    <h3 className={styles.heading}>MAJESTIC PACKAGE</h3>
                    <div className={styles.heading1}>
                      ADULTS: AED 1300 / CHILD: AED 1250
                    </div>
                  </div>
                  <div className={styles.linkFour}>
                    Elevate your adventure with our Deluxe Package. Enjoy
                    exclusive extras and luxurious touches as you float gently
                    over the stunning Dubai desert at sunrise, ensuring a
                    memorable, sophisticated journey.
                  </div>
                  <div className={styles.details1}>
                    <div className={styles.content16}>
                      <div className={styles.subheading}>Time</div>
                      <div className={styles.detailValue}>45 - 60 Minutes</div>
                    </div>
                    <div className={styles.content17}>
                      <div className={styles.subheading}>Location</div>
                      <div className={styles.empty}>
                        Margham Dubai, United Arab Emirates
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.actions}>
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="unset"
                    btnLearnBackgroundColor="#7ab342"
                    button="Book Now"
                    buttonHeight="24px"
                    buttonDisplay="inline-block"
                    buttonColor="#fff"
                    buttonWidth="unset"
                  />
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="1px solid #7ab342"
                    btnLearnBackgroundColor="unset"
                    button="View Details"
                    buttonHeight="24px"
                    buttonDisplay="inline-block"
                    buttonColor="#000"
                    buttonWidth="unset"
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
                  src="/placeholder-image-4@2x.png"
                />
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <div className={styles.pageOne}>Featured</div>
                  </div>
                </div>
              </div>
              <div className={styles.content15}>
                <div className={styles.sectionTitle}>
                  <div className={styles.plan2}>
                    <h3 className={styles.heading4}>ROYAL PACKAGE</h3>
                    <div className={styles.heading5}>
                      ADULTS: AED 1550 / CHILD: AED 1450
                    </div>
                  </div>
                  <div className={styles.thirdDescription}>
                    Enjoy a complete desert experience with pick-up and drop-off
                    from Dubai. Start with unlimited refreshments before an
                    unforgettable 45-60 minute hot air balloon flight, followed
                    by a signed flight certificate.
                  </div>
                  <div className={styles.details1}>
                    <div className={styles.content17}>
                      <div className={styles.text8}>Time</div>
                      <div className={styles.text9}>45 - 60 Minutes</div>
                    </div>
                    <div className={styles.content17}>
                      <div className={styles.text8}>Location</div>
                      <div className={styles.text9}>
                        Margham Dubai, United Arab Emirates
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.actions2}>
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="unset"
                    btnLearnBackgroundColor="#7ab342"
                    button="Book Now"
                    buttonHeight="24px"
                    buttonDisplay="inline-block"
                    buttonColor="#fff"
                    buttonWidth="unset"
                  />
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="1px solid #7ab342"
                    btnLearnBackgroundColor="unset"
                    button="View Details"
                    buttonHeight="24px"
                    buttonDisplay="inline-block"
                    buttonColor="#000"
                    buttonWidth="unset"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                    src="/placeholder-image-5@2x.png"
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
                      <h3 className={styles.heading}>
                        CELESTIAL PRIVATE ROMANCE
                      </h3>
                      <div className={styles.heading1}>PRICE ON REQUEST /</div>
                    </div>
                    <div className={styles.linkFour}>
                      Elevate your proposal to new heights with this
                      unforgettable hot air balloon ride over the Dubai desert.
                      Experience a magical sunrise ride, pop the question, and
                      enjoy a delightful breakfast together.
                    </div>
                    <div className={styles.details1}>
                      <div className={styles.content16}>
                        <div className={styles.subheading}>Time</div>
                        <div className={styles.detailValue}>
                          45 - 60 Minutes
                        </div>
                      </div>
                      <div className={styles.content17}>
                        <div className={styles.subheading}>Location</div>
                        <div className={styles.empty}>
                          Margham Dubai, United Arab Emirates
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actions}>
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="unset"
                      btnLearnBackgroundColor="#7ab342"
                      button="Get a Quote"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#fff"
                      buttonWidth="unset"
                    />
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="1px solid #7ab342"
                      btnLearnBackgroundColor="unset"
                      button="View Details"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#000"
                      buttonWidth="unset"
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
                    src="/placeholder-image-6@2x.png"
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
                      <h3 className={styles.heading}>GROUP BOOKING</h3>
                      <div className={styles.heading1}>PRICE ON REQUEST /</div>
                    </div>
                    <div className={styles.linkFour}>
                      Enjoy exclusive group rates, tailored packages, and
                      personalized service:We offer tailored arrangements for
                      all group types, ensuring a unique and personalized
                      experience. Whether for family, friends, or colleagues.
                    </div>
                    <div className={styles.details1}>
                      <div className={styles.content16}>
                        <div className={styles.subheading}>Time</div>
                        <div className={styles.detailValue}>
                          45 - 60 Minutes
                        </div>
                      </div>
                      <div className={styles.content17}>
                        <div className={styles.subheading}>Location</div>
                        <div className={styles.empty}>
                          Margham Dubai, United Arab Emirates
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actions}>
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="unset"
                      btnLearnBackgroundColor="#7ab342"
                      button="Get a Quote"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#fff"
                      buttonWidth="unset"
                    />
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="1px solid #7ab342"
                      btnLearnBackgroundColor="unset"
                      button="View Details"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#000"
                      buttonWidth="unset"
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
                    src="/placeholder-image-7@2x.png"
                  />
                  <div className={styles.tags}>
                    <div className={styles.tag}>
                      <div className={styles.pageOne}>Featured</div>
                    </div>
                  </div>
                </div>
                <div className={styles.content15}>
                  <div className={styles.sectionTitle}>
                    <div className={styles.plan2}>
                      <h3 className={styles.heading4}>CORPORATE EVENT</h3>
                      <div className={styles.heading5}>PRICE ON REQUEST /</div>
                    </div>
                    <div className={styles.thirdDescription}>
                      CORPORATE EVENT Take your corporate event to new heights.
                      4000 feet above sea level to be exact! Let your next
                      corporate adventure be the best one yet for your friends
                    </div>
                    <div className={styles.details1}>
                      <div className={styles.content17}>
                        <div className={styles.text8}>Time</div>
                        <div className={styles.text9}>45 - 60 Minutes</div>
                      </div>
                      <div className={styles.content17}>
                        <div className={styles.text8}>Location</div>
                        <div className={styles.text9}>
                          Margham Dubai, United Arab Emirates
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actions6}>
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="unset"
                      btnLearnBackgroundColor="#7ab342"
                      button="Get a Quote"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#fff"
                      buttonWidth="unset"
                    />
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="1px solid #7ab342"
                      btnLearnBackgroundColor="unset"
                      button="View Details"
                      buttonHeight="24px"
                      buttonDisplay="inline-block"
                      buttonColor="#000"
                      buttonWidth="unset"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.testimonialContentWrapper}>
        <div className={styles.testimonialContent}>
          <div className={styles.title}>
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
          </div>
          <div className={styles.slider}>
            <div className={styles.slidePreview}>
              <div className={styles.perfumes}>
                “Borem ipsum dolor sit amet, consectetur adipiscing elit Nunc
                vulputate. Borem ipsum dolor sit amet.”
              </div>
              <div className={styles.previewDetails}>
                <div className={styles.perfumes1}>Ajay</div>
              </div>
              <Image
                className={styles.playButtonIcon}
                loading="lazy"
                width={44}
                height={44}
                alt=""
                src="/play-button.svg"
              />
            </div>
            <Slide
              slideMinWidth="283px"
              slideContentBackgroundImage="url('/slide-content@3x.png')"
              perfumes="Danielle J"
              perfumesDisplay="inline-block"
              perfumesMinWidth="71px"
              playButton="/play-button-1.svg"
            />
            <Slide
              slideMinWidth="283px"
              slideContentBackgroundImage="url('/23@3x.png')"
              perfumes="Suhail Ismail"
              perfumesDisplay="unset"
              perfumesMinWidth="unset"
              playButton="/play-button-1.svg"
            />
            <Slide
              slideMinWidth="283px"
              slideContentBackgroundImage="url('/22@3x.png')"
              perfumes="Shweta Dubey"
              perfumesDisplay="unset"
              perfumesMinWidth="unset"
              playButton="/play-button-1.svg"
            />
          </div>
          <div className={styles.content37}>
            <div className={styles.navigationControls}>
              <div className={styles.sliderDots}>
                <div className={styles.dot} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
              </div>
            </div>
            <div className={styles.sliderButtons}>
              <Image
                className={styles.arrowsIcon}
                loading="lazy"
                width={48}
                height={48}
                alt=""
                src="/arrows@2x.png"
              />
              <Arrows arrowsHeight="48px" fearrowUp="/fearrowup@2x.png" />
            </div>
          </div>
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
      <FAQ1 />
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
