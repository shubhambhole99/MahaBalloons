import Image from "next/image";
import FrameComponent1 from "../components/frame-component1";
import AboutUs from "../components/about-us";
import Arrows from "../components/arrows";
import BtnLearn from "../components/btn-learn";
// import FAQ from "../components/frame-component2";
import BlogPosts from "../components/blog-posts";
import FAQ from "../components/f-a-q";
import Footer from "../components/footer";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";
import OurPackages from "/components/Home/OurPackages/Index";
import Slider from "react-slick";
import { fetchPackagesData } from "/api/commonApi";
import ourtestimonial from "../Db/Testimonial_home";
import blogDataTs from "/Db/blogs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Testimonial from "/components/testimonials"
import Packages from "../components/Sliders/Packages/packages";
import CustomPackages from "/Db/packages";
import Personalizedpackages from "../components/Sliders/PersonalizedPackages/personalizedpackages";
// import Testimonial from "/components/Testimonial/Index";
import Card from "/components/Card";
import { IoIosCloseCircle } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import Slide from "../components/slide";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeContent from "/Db/Home";

const DeskHome = ({ pageProps, className = "" }) => {
  return (
<>
    <div className={styles.deskHome}>
      <ToastContainer />
      <FrameComponent1 />
      <AboutUs />
      <section className={styles.quickBooking}>
        <div className={styles.sectionTitle}>
          <div className={styles.subheading}>
            Choose From The Best Hot Air Balloon Packages in Dubai
          </div>
          <div className={styles.content}>
            <h1 className={styles.bookLuxuryHot}>
              Book Luxury Hot Air Balloon Packages in UAE
            </h1>
          </div>
        </div>
      </section>
      <Packages />
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
            </div>
          </div>
        </div>
      </section>
      <Personalizedpackages />
      <Testimonial />
      <FAQ 
      content={HomeContent?.faqsList}
      title={"Frequently Asked Questions about Hot Air Balloons in UAE"}
      />
      <section className={styles.quickBooking}>
        <div className={styles.sectionTitle}>
          <div className={styles.subheading}>
          Tourist Guides on Things To Do In Dubai UAE
          </div>
          <div className={styles.content}>
            <h1 className={styles.bookLuxuryHot}>
            Blogs about things to do in Dubai
            </h1>
          </div>
        </div>
      </section>
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
    </>
  );
};

export default DeskHome;
