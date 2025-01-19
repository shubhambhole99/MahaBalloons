import Image from "next/image";
import FrameComponent1 from "../components/frame-component1";
import AboutUs from "../components/about-us";
import Arrows from "../components/arrows";
import BtnLearn from "../components/btn-learn";
import Slide from "../components/slide";
import FrameComponent2 from "../components/frame-component2";
import BlogPosts from "../components/blog-posts";
import Footer from "../components/footer";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import OurPackages from "/components/Home/OurPackages/Index";
// import Navbar from "/components/Layout/Navbar/Navbar";
// import {fr}
const DeskHome = ({pageProps}) => {
  console.log(pageProps)
  let router=useRouter();
  return (
    
    <div className={styles.deskHome}>
      {/* <Navbar/> */}
      {/* <br/> */}
      <FrameComponent1 />
      <AboutUs />
      <section className={styles.quickBooking}>
      {/* <OurPackages/> */}
      {/* <AuthComp
          // show={true}
          // setShow={setModalShow}
          // onHide={() => setModalShow(false)}
        /> */}








        <div className={styles.sectionTitle}>
          <div className={styles.subheading}>
            Choose From The Best Hot Air Balloon Packages in Dubai
          </div>
          <div className={styles.content}>
            <h1 className={styles.bookLuxuryHot}>
              Book Luxury Hot Air Balloon Packages in UAE
            </h1>
            <div className={styles.sliderButtons}>
              <Image
                className={styles.arrowsIcon}
                loading="lazy"
                width={48}
                height={48}
                alt=""
                src="/arrows1@2x.png"
                />
              <Arrows fearrowUp="/fearrowup1@2x.png" />
            </div>
            <div
              className={styles.text}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. `}</div>
          </div>
        </div>
        
        <div className={styles.content1}>
          <div className={styles.content2}>
         {/* Classic Package*/}
            <div className={styles.card}>
              <div className={styles.image}>
                <Image
                  className={styles.placeholderImageIcon}
                  loading="lazy"
                  width={400}
                  height={300}
                  alt=""
                  src="/placeholder-image-2@2x.png"
                />
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <div className={styles.featured}>Featured</div>
                  </div>
                </div>
              </div>
              <div className={styles.content3}>
                <div className={styles.sectionTitle}>
                  <div className={styles.plan}>
                    <h3 className={styles.heading}>CLASSIC PACKAGE</h3>
                    <div className={styles.heading1}>
                      ADULTS: AED 1200 / CHILD: AED 1150
                    </div>
                  </div>
                  <div className={styles.text1}>
                    Experience breathtaking beauty in the Dubai desert with our
                    Classic Hot Air Balloon Package. Enjoy stunning panoramic
                    views as you gently ascend into the sky at an accessible,
                    affordable price.
                  </div>
                  <div className={styles.details1}>
                    <div className={styles.content4}>
                      <div className={styles.subheading}>Time</div>
                      <div className={styles.text1}>45 - 60 Minutes</div>
                    </div>
                    <div className={styles.content4}>
                      <div className={styles.subheading}>Location</div>
                      <div className={styles.text1}>
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
                    buttonHeight="unset"
                    buttonDisplay="unset"
                    buttonColor="#fff"
                    buttonWidth="unset"
                  />
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="1px solid #7ab342"
                    btnLearnBackgroundColor="unset"
                    button="View Details"
                    buttonHeight="unset"
                    buttonDisplay="unset"
                    buttonColor="#000"
                    buttonWidth="unset"
                  />
                </div>
              </div>
            </div>
            {/* classic Package */}
            <div className={styles.card}>
              <div className={styles.image}>
                <Image
                  className={styles.placeholderImageIcon}
                  loading="lazy"
                  width={400}
                  height={300}
                  alt=""
                  src="/placeholder-image-3@2x.png"
                />
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <div className={styles.featured}>Featured</div>
                  </div>
                </div>
              </div>
              <div className={styles.content3}>
                <div className={styles.sectionTitle}>
                  <div className={styles.plan}>
                    <h3 className={styles.heading}>MAJESTIC PACKAGE</h3>
                    <div className={styles.heading1}>
                      ADULTS: AED 1300 / CHILD: AED 1250
                    </div>
                  </div>
                  <div className={styles.text1}>
                    Elevate your adventure with our Deluxe Package. Enjoy
                    exclusive extras and luxurious touches as you float gently
                    over the stunning Dubai desert at sunrise, ensuring a
                    memorable, sophisticated journey.
                  </div>
                  <div className={styles.details1}>
                    <div className={styles.content4}>
                      <div className={styles.subheading}>Time</div>
                      <div className={styles.text1}>45 - 60 Minutes</div>
                    </div>
                    <div className={styles.content4}>
                      <div className={styles.subheading}>Location</div>
                      <div className={styles.text1}>
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
                    buttonHeight="unset"
                    buttonDisplay="unset"
                    buttonColor="#fff"
                    buttonWidth="unset"
                  />
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="1px solid #7ab342"
                    btnLearnBackgroundColor="unset"
                    button="View Details"
                    buttonHeight="unset"
                    buttonDisplay="unset"
                    buttonColor="#000"
                    buttonWidth="unset"
                  />
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.image}>
                <Image
                  className={styles.placeholderImageIcon}
                  loading="lazy"
                  width={400}
                  height={300}
                  alt=""
                  src="/placeholder-image-4@2x.png"
                />
                <div className={styles.tags}>
                  <div className={styles.tag}>
                    <div className={styles.featured}>Featured</div>
                  </div>
                </div>
              </div>
              <div className={styles.content3}>
                <div className={styles.sectionTitle}>
                  <div className={styles.plan}>
                    <h3 className={styles.heading4}>ROYAL PACKAGE</h3>
                    <div className={styles.heading1}>
                      ADULTS: AED 1550 / CHILD: AED 1450
                    </div>
                  </div>
                  <div className={styles.text1}>
                    Enjoy a complete desert experience with pick-up and drop-off
                    from Dubai. Start with unlimited refreshments before an
                    unforgettable 45-60 minute hot air balloon flight, followed
                    by a signed flight certificate.
                  </div>
                  <div className={styles.details1}>
                    <div className={styles.content4}>
                      <div className={styles.subheading}>Time</div>
                      <div className={styles.text1}>45 - 60 Minutes</div>
                    </div>
                    <div className={styles.content4}>
                      <div className={styles.subheading}>Location</div>
                      <div className={styles.text1}>
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
                    buttonHeight="unset"
                    buttonDisplay="unset"
                    buttonColor="#fff"
                    buttonWidth="unset"
                  />
                  <BtnLearn
                    showBtnLearn
                    btnLearnBorder="1px solid #7ab342"
                    btnLearnBackgroundColor="unset"
                    button="View Details"
                    buttonHeight="unset"
                    buttonDisplay="unset"
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
            <div className={styles.actions3}>
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
          <div className={styles.sectionTitle1}>
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
                  src="/arrows-1@2x.png"
                />
                <Arrows arrowsHeight="unset" fearrowUp="/fearrowup1@2x.png" />
              </div>
              <div
                className={styles.text}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. `}</div>
            </div>
          </div>
          <div className={styles.content13}>
            <div className={styles.dates1}>
              <div className={styles.button}>
                <div className={styles.wed07Aug1}>Wed 07 Aug</div>
              </div>
              <div className={styles.button1}>
                <div className={styles.planDescription}>Thu 08 Aug</div>
              </div>
              <div className={styles.button1}>
                <div className={styles.planDescription}>Fri 09 Aug</div>
              </div>
              <div className={styles.button1}>
                <div className={styles.planDescription}>Sat 10 Aug</div>
              </div>
              <div className={styles.button1}>
                <div className={styles.planDescription}>Sun 11 Aug</div>
              </div>
            </div>
            <div className={styles.content14}>
              <div className={styles.card}>
                <div className={styles.image3}>
                  <Image
                    className={styles.placeholderImageIcon3}
                    loading="lazy"
                    width={400}
                    height={300}
                    alt=""
                    src="/placeholder-image-5@2x.png"
                  />
                  <div className={styles.tags}>
                    <div className={styles.tag}>
                      <div className={styles.featured3}>Featured</div>
                    </div>
                  </div>
                </div>
                <div className={styles.content15}>
                  <div className={styles.sectionTitle1}>
                    <div className={styles.plan}>
                      <h3 className={styles.heading7}>
                        CELESTIAL PRIVATE ROMANCE
                      </h3>
                      <div className={styles.heading1}>PRICE ON REQUEST /</div>
                    </div>
                    <div className={styles.planDescription}>
                      Elevate your proposal to new heights with this
                      unforgettable hot air balloon ride over the Dubai desert.
                      Experience a magical sunrise ride, pop the question, and
                      enjoy a delightful breakfast together.
                    </div>
                    <div className={styles.details7}>
                      <div className={styles.content4}>
                        <div className={styles.subheading}>Time</div>
                        <div className={styles.text1}>45 - 60 Minutes</div>
                      </div>
                      <div className={styles.content17}>
                        <div className={styles.subheading}>Location</div>
                        <div className={styles.text21}>
                          Margham Dubai, United Arab Emirates
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actions3}>
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
                <div className={styles.image3}>
                  <Image
                    className={styles.placeholderImageIcon3}
                    loading="lazy"
                    width={400}
                    height={300}
                    alt=""
                    src="/placeholder-image-6@2x.png"
                  />
                  <div className={styles.tags}>
                    <div className={styles.tag}>
                      <div className={styles.featured3}>Featured</div>
                    </div>
                  </div>
                </div>
                <div className={styles.content15}>
                  <div className={styles.sectionTitle1}>
                    <div className={styles.plan}>
                      <h3 className={styles.heading7}>GROUP BOOKING</h3>
                      <div className={styles.heading1}>PRICE ON REQUEST /</div>
                    </div>
                    <div className={styles.planDescription}>
                      Enjoy exclusive group rates, tailored packages, and
                      personalized service:We offer tailored arrangements for
                      all group types, ensuring a unique and personalized
                      experience. Whether for family, friends, or colleagues.
                    </div>
                    <div className={styles.details7}>
                      <div className={styles.content4}>
                        <div className={styles.subheading}>Time</div>
                        <div className={styles.text1}>45 - 60 Minutes</div>
                      </div>
                      <div className={styles.content17}>
                        <div className={styles.subheading}>Location</div>
                        <div className={styles.text21}>
                          Margham Dubai, United Arab Emirates
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.actions3}>
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
              <div className={styles.card5}>
                <div className={styles.image5}>
                  <Image
                    className={styles.placeholderImageIcon3}
                    loading="lazy"
                    width={400}
                    height={300}
                    alt=""
                    src="/placeholder-image-7@2x.png"
                  />
                  <div className={styles.tags}>
                    <div className={styles.tag}>
                      <div className={styles.featured3}>Featured</div>
                    </div>
                  </div>
                </div>
                <div className={styles.content15}>
                  <div className={styles.sectionTitle1}>
                    <div className={styles.plan5}>
                      <h3 className={styles.heading11}>CORPORATE EVENT</h3>
                      <div className={styles.heading12}>PRICE ON REQUEST /</div>
                    </div>
                    <div className={styles.text27}>
                      CORPORATE EVENT Take your corporate event to new heights.
                      4000 feet above sea level to be exact! Let your next
                      corporate adventure be the best one yet for your friends
                    </div>
                    <div className={styles.details7}>
                      <div className={styles.content17}>
                        <div className={styles.text28}>Time</div>
                        <div className={styles.text29}>45 - 60 Minutes</div>
                      </div>
                      <div className={styles.content17}>
                        <div className={styles.text28}>Location</div>
                        <div className={styles.text29}>
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
      <section className={styles.testimonials}>
        <div className={styles.testimonialSlider}>
          <div className={styles.title}>
            <div className={styles.sectionTitle2}>
              <div className={styles.subheading2}>
                Customer Feedback about the best hot air balloon in Uae
              </div>
              <div className={styles.content24}>
                <h1 className={styles.heading13}>Customer Testimonials</h1>
                <div
                  className={styles.text}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
              </div>
            </div>
          </div>
          <div className={styles.slider}>
            <div className={styles.currentSlide}>
              <div className={styles.perfumes}>
                “Borem ipsum dolor sit amet, consectetur adipiscing elit Nunc
                vulputate. Borem ipsum dolor sit amet.”
              </div>
              <div className={styles.slideContent}>
                <div className={styles.perfumes1}>Ajay</div>
              </div>
              <Image
                className={styles.playButtonIcon}
                loading="lazy"
                width={44}
                height={44}
                alt=""
                src="/play-button2.svg"
              />
            </div>
            <Slide perfumes="Danielle J" playButton="/play-button-11.svg" />
            <Slide
              slideMinWidth="unset"
              slideContentBackgroundImage="url('/23@3x.png')"
              perfumes="Suhail Ismail"
              perfumesDisplay="unset"
              perfumesMinWidth="unset"
              playButton="/play-button-11.svg"
            />
            <Slide
              slideMinWidth="unset"
              slideContentBackgroundImage="url('/22@3x.png')"
              perfumes="Shweta Dubey"
              perfumesDisplay="unset"
              perfumesMinWidth="unset"
              playButton="/play-button-11.svg"
            />
          </div>
          <div className={styles.content25}>
            <div className={styles.sliderDotsContainer}>
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
                src="/arrows-1@2x.png"
              />
              <Arrows arrowsHeight="48px" fearrowUp="/fearrowup1@2x.png" />
            </div>
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <BlogPosts />
      <Footer
        icon="/icon-20@2x.png"
        iconFacebook="/icon--facebook12.svg"
        iconInstagram="/icon--instagram12.svg"
        iconX="/icon--x11.svg"
        iconLinkedIn="/icon--linkedin11.svg"
        iconYoutube="/icon--youtube2.svg"
      />
    </div>
  );
};

export default DeskHome;
// 'use client';

// import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement, reset } from '../store/counter'; // Adjust the path as needed
// import "./index.module.scss"

// export default function Counter() {
//   const dispatch = useDispatch();
//   const count = useSelector((state) => state.counter.value);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Redux Counter</h1>
//       <h2 className={styles.red}>Count: {count}</h2>
//       <div>
//         <button onClick={() => dispatch(increment())}>Increment</button>
//         <button onClick={() => dispatch(decrement())}>Decrement</button>
//         <button onClick={() => dispatch(reset())}>Reset</button>
//       </div>
//     </div>
//   );
// }
