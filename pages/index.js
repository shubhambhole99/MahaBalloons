import Personalizedpackages from "../components/Sliders/PersonalizedPackages/personalizedpackages";
import { ToastContainer } from "react-toastify";
import FrameComponent1 from "../components/frame-component1";
import Testimonial from "/components/testimonials"
import HomeContent from "/Db/Home";
import Featuredin from "../components/featuredin";
import Packages from "../components/Sliders/Packages/packages";
import BlogPosts from "../components/blog-posts";
import BtnLearn from "../components/btn-learn";
import AboutUs from "../components/about-us";
import Footer from "../components/footer";
import FAQ from "../components/f-a-q";
import "react-toastify/dist/ReactToastify.min.css";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./index.module.scss";
import Gift from "../components/Giftanunforgettable/index"
import FrameComponent from "../components/frame-component";

const DeskHome = ({ pageProps, className = "" }) => {
  return (
    <>
      <div className={styles.deskHome}>
        <ToastContainer />
        <FrameComponent mahaBalloonAdventuresLogo="/maha-balloon-adventures-logo-2@2x.png" />

        <FrameComponent1 />
        <div className="parent">
          <Featuredin />
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
            <Packages />
          </section>
          <Gift />
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
        </div>
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


