import Image from "next/image";
import Content from "./content";
import Content1 from "./content1";
import PropTypes from "prop-types";
import styles from "./safety.module.css";

const Safety = ({ className = "" }) => {
  return (
    <section className={[styles.safety, className].join(" ")}>
      <div className={styles.sectionTitle}>
        <div className={styles.subheading}>Safety Measures</div>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Top Reasons to Fly with Maha Balloon Adventures
          </h1>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.content2}>
          <div className={styles.column}>
            <Content
              heading="01"
              heading1="Expertise and Safety First"
              text="At Maha Balloon Adventures, safety is our top priority. Our experienced pilots are certified and trained to ensure a safe and enjoyable flight experience. We strictly adhere to all safety regulations set by the General Civil Aviation Authority (GCAA), giving you peace of mind as you soar through the skies."
            />
            <Content1
              heading="02"
              heading1="Unmatched Scenic Views"
              text="Experience the breathtaking beauty of the Dubai desert like never before. Our flights typically take place just before sunrise, allowing you to capture the stunning colours of the sky as the sun rises over the horizon. You’ll have the chance to see iconic landmarks, wildlife, and the breathtaking landscape, all while floating peacefully in the sky."
            />
            <Content
              heading="03"
              heading1="Tailored Packages for Everyone"
              headingMinWidth="173px"
              text="We offer a variety of packages to suit different preferences and budgets. Whether you choose our Classic, Majestic, or Royal package, each option is designed to provide a unique and memorable experience tailored to your needs."
            />
            <Content
              heading="04"
              heading1="Exceptional Customer Service"
              headingMinWidth="173px"
              text="Our dedicated team is committed to providing you with exceptional service from the moment you book your flight until you land. We pride ourselves on our hospitality and attention to detail, ensuring a seamless and enjoyable experience for all our guests."
            />
            <Content
              heading="05"
              heading1="Captivating Wildlife Sightings"
              headingMinWidth="167px"
              text="During flights, guests have the opportunity to spot local wildlife, including Arabian oryx and camels, adding an exciting element to the adventure and connecting them with the natural beauty of the desert."
            />
          </div>
          <Image
            className={styles.placeholderImageIcon}
            loading="lazy"
            width={480}
            height={1332}
            alt=""
            src="/placeholder-image-33@2x.png"
          />
          <div className={styles.column}>
            <Content
              heading="06"
              heading1="Comfortable and Spacious Balloons"
              headingMinWidth="158px"
              text="Our hot air balloons are designed to accommodate up to 24 passengers, ensuring a comfortable and spacious environment for everyone. You can relax and enjoy the ride without feeling cramped."
            />
            <Content
              heading="07"
              heading1="Exceptional Value"
              headingMinWidth="152px"
              text="We offer competitive pricing without compromising on quality. Our commitment to providing outstanding value ensures that you receive a premium experience at an affordable price, making your adventure both accessible and unforgettable."
            />
            <Content
              heading="08"
              heading1="Commemorative Flight Certificates"
              headingMinWidth="173px"
              text="Every guest receives a personalized E-Flight certificate signed by the pilot as a keepsake of your unforgettable adventure. It’s a perfect memento to remember your experience."
            />
            <Content1
              heading="09"
              innerContentTwoHeight="unset"
              heading1="Positive Guest Feedback"
              headingAlignSelf="unset"
              headingDisplay="inline-block"
              headingMinHeight="68px"
              text="We are proud to have received numerous positive reviews from our guests, highlighting our commitment to excellence. Our customers frequently commend us for our friendly staff, professional service, and unforgettable experiences."
            />
            <Content
              heading="10"
              heading1="Environmental Responsibility"
              headingMinWidth="122px"
              text="Maha Balloon Adventures is committed to environmental sustainability and responsible tourism practices, ensuring that their operations have minimal impact on the beautiful desert landscape they showcase."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Safety.propTypes = {
  className: PropTypes.string,
};

export default Safety;
