'use client'
import Image from "next/image";
import Header1 from "../../components/header1";
import { useRef, useState, useEffect } from "react";
import { fetchPackagesData } from "/api/commonApi";

import Card1 from "../../components/card1";
import BtnLearn from "../../components/btn-learn";
import FrameComponent4 from "../../components/frame-component4";
import Card2 from "../../components/card2";
import Arrows from "../../components/arrows";
import Footer from "../../components/footer";
import styles from "../desk-things-to-do.module.css";
import { Helmet } from "react-helmet";
import content from "/Db/thingsTodo";
import { Navigation } from "swiper/modules";
import Slide from "/components/slide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Slider from "../../components/Sliders/Discoverthebestthings/Slider";
import BlogPosts from "../../components/blog-posts"
// import content from "/Db/thingsTodo";
import FAQ from "../../components/f-a-q";

const DeskThingsToDo = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  let [packagesData, setPackagesData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
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
    <>
      <Helmet>
        <title>
          Best Things to Do in Dubai | Outdoor Activities | Maha Balloon
        </title>
        <meta
          name="title"
          content="Best Things to Do in Dubai | Outdoor Activities | Maha Balloon"
        />
        <meta
          name="description"
          content="Explore the Best Things To Do in Dubai! From the Burj Khalifa and Dubai Mall to Desert Safaris and Nightlife, Discover unforgettable Outdoor Activities."
        />
        {/* <link
          rel="canonical"
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }things-to-do`}
        />

        <link
          rel="alternate"
          hreflang={`${lang}`}
          href={`${import.meta.env.VITE_BASE_SITEURL}/${
            lang && `${lang}/`
          }things-to-do`}
        /> */}
      </Helmet>
      <Header1 />
      <Slider
        data={content?.sightSeeing1}
        title={{ en: "Discover the Best Things to Do in Dubai" }}
      />
         <Slider
        data={content?.sightSeeing2}
        title={{  en: "From Hot Air Balloon Rides to Desert Safaris: Dubai's Top Experiences" }}
      />
         <Slider
        data={content?.sightSeeing3}
        title={{ en: "Must-Visit Attractions for Every Visitor" }}
      />
        <Slider
        data={content?.sightSeeing4}
        title={{ en: "Tours and Safaris" }}
      />
      



      <div className={styles.deskThingsToDo}>


     
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.column}>
              <h1 className={styles.heading4}>
                <p
                  className={styles.giftAnUnforgettable}
                >{`Gift an Unforgettable Hot Air `}</p>
                <p className={styles.giftAnUnforgettable}>
                  Balloon Adventure Today !!
                </p>
              </h1>
            </div>
            <div className={styles.column1}>
              <div className={styles.text4}>
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
          <FAQ 
              content={content?.faqsList}
              title={"Frequently Asked Questions "}
            />
        {/* <FrameComponent4 /> */}
        <section className={styles.blogWrapper}>
          <div className={styles.blog}>
            <div className={styles.title4}>
              <div className={styles.sectionTitle4}>
                <div className={styles.subheading4}>Blogs</div>
                <div className={styles.content}>
                  <h1 className={styles.heading}>
                    Tourist Guides on Things To Do In Dubai UAE
                  </h1>
                  <div
                    className={styles.text}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
                </div>
              </div>
              <div className={styles.button4}>
                <div className={styles.viewAll}>View All</div>
              </div>
            </div>
            </div>
            </section>
        <BlogPosts />
            {/* <div className={styles.content10}>
              <div className={styles.dots}>
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
            </div> */}
          
        <Footer
          icon="/icon-25@2x.png"
          iconFacebook="/icon--facebook.svg"
          iconInstagram="/icon--instagram.svg"
          iconX="/icon--x.svg"
          iconLinkedIn="/icon--linkedin.svg"
          iconYoutube="/icon--youtube.svg"
        />
    </div>
    </>
  );
};

export default DeskThingsToDo;
