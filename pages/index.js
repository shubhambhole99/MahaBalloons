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
import Slider from "react-slick";
import { fetchPackagesData } from "/api/commonApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import CustomPackages from "/Db/packages";
import ourtestimonial from "../Db/Testimonial_home";
import blogDataTs from "/Db/blogs";
import { ToastContainer } from "react-toastify";
    import "react-toastify/dist/ReactToastify.min.css";

// import "swiper/swiper-bundle.min.css";

// import Navbar from "/components/Layout/Navbar/Navbar";
// import {fr}
const DeskHome = ({ pageProps }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  console.log(pageProps)
  let router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  let [isLoading, setIsLoading] = useState(false);
  let [packagesData, setPackagesData] = useState([]);
  const sliderRef = useRef();

  useEffect(() => {
    const fetchPackageListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const data = await fetchPackagesData();
        if (Array.isArray(data)) {
          setPackagesData(data);
        }
        console.log(data)
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchPackageListData();
  }, []);

  return (
    
    <div className={styles.deskHome}>
      <ToastContainer/>
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
        {/* h1 */}




        {/* h1 */}







        <div className={styles.sectionTitle}>
          <div className={styles.subheading}>
            Choose From The Best Hot Air Balloon Packages in Dubai
          </div>
          <div className={styles.content}>
            <h1 className={styles.bookLuxuryHot}>
              Book Luxury Hot Air Balloon Packages in UAE
            </h1>
            <div className={styles.sliderButtons}>
              <button ref={prevButtonRef} className={styles.arrows}>
              <Image
                className={styles.fearrowUpIcon}
                loading="lazy"
                width={48}
                height={48}
                alt=""
                src="/leftarrow.png"
                ref={prevButtonRef} // Assigning ref to the previous button
              />
              </button>
              <button ref={nextButtonRef} className={styles.arrows}>
                <Image
                  className={styles.fearrowUpIcon}
                  loading="lazy"
                  width={48}
                  height={48}
                  alt=""
                  src="/fearrowup@2x.png" // Use the appropriate image for the next button
                  ref={nextButtonRef}
                />
              </button>
            </div>
            <div
              className={styles.text}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. `}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-start gap-4 max-w-full text-left text-xl ">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full max-w-full"
          >
            {packagesData?.map((item) => (
              // <Card
              //   {...item}
              //   key={item?.id}
              //   active={active}
              //   setActive={setActive}
              //   setExtraDetails={setExtraDetails}
              //   PrevArrow={<PrevArrow />}
              //   NextArrow={<NextArrow />}
              //   packageVal={item}
              // />

              <SwiperSlide>
                <div className={styles.card}>
                  <div className={styles.image}>
                    <Image
                      className={styles.placeholderImageIcon}
                      loading="lazy"
                      width={300}
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
                        <h3 className={styles.heading}>{item.title}</h3>
                        <div className={styles.heading1}>
                          ADULTS: AED {item.price_adult} / CHILD: AED {item.price_child}
                        </div>
                      </div>
                      <div className={styles.text1}>
                        {item.short_detail}
                      </div>
                      <div className={styles.details1}>
                        <div className={styles.content4}>
                          <div className={styles.subheading}>Time</div>
                          <div className={styles.text1}>{item.duration}</div>
                        </div>
                        <div className={styles.content4}>
                          <div className={styles.subheading}>Location</div>
                          <div className={styles.text1}>
                            {item.location}
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
              </SwiperSlide>
            ))}


          </Swiper>

        </div>

        <div className={styles.content1}>
          <div className={styles.content2}>
          
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
            
              {/* celestial */}
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-start gap-4 max-w-full text-left text-xl ">
          <Swiper
            // style={{backgroundColor:"green",border:"1px solid red"}}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full max-w-full "
          >
             {CustomPackages?.map((item) => (
              // <Card
              //   {...item}
              //   key={item?.id}
              //   active={active}
              //   setActive={setActive}
              //   setExtraDetails={setExtraDetails}
              // />
          
            <SwiperSlide>
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
                        {item.title}
                      </h3>
                      <div className={styles.heading1}>PRICE ON REQUEST /</div>
                    </div>
                    <div className={styles.planDescription}>
                     {item.short_detail}
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
              {/* celestial */}
              </SwiperSlide>
                ))}
              </Swiper>
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
