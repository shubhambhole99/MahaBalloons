import Image from "next/image";
import Card from "./card";
import Arrows from "./arrows";
import PropTypes from "prop-types";
import styles from "./blog-posts.module.css";

const BlogPosts = ({ className = "" }) => {
  return (
    <section className={[styles.blogPosts, className].join(" ")}>
      <div className={styles.blogSlider}>
        <div className={styles.title}>
          <div className={styles.sectionTitle}>
            <div className={styles.subheading}>
              Tourist Guides on Things To Do In Dubai UAE
            </div>
            <div className={styles.content}>
              <h1 className={styles.heading}>
                Blogs about things to do in Dubai
              </h1>
              <div
                className={styles.text}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.viewAll}>View All</div>
          </div>
        </div>
        <div className={styles.content1}>
          <Card
            placeholderImage="/placeholder-image-93@2x.png"
            text="5 min read"
            heading="Hot Air Balloon vs. Helicopter: Which Dubai Adventure Is Right for You?"
            text1="Dubai: A dreamer’s utopia where aspirations soar high – a desert oasis that radiates luxury and cutting-edge technology in every direction. If you’re contemplating the best way to soak in the splendor of this stunning city from above,"
          />
          <Card
            placeholderImage="/placeholder-image-102@2x.png"
            text="10 min read"
            heading="Why a Hot Air Balloon Ride is the Best Way to See Dubai’s Desert"
            text1="If you think Dubai is all about beaches, shopping malls, amusement parks, and skyscrapers, you are missing out on the adventure quotient. The Emirates offers a wide range of activities that adventure enthusiasts can indulge in to satisfy their hunger for adventure."
          />
          <Card
            placeholderImage="/placeholder-image-111@2x.png"
            text="8 min read"
            heading="Best Time of Year for Hot Air Balloon Rides in Dubai"
            text1="Think about drifting serenely over the Arabian desert, watching the sunrise cast a golden glow over the endless dunes and clear weather! Doesn’t that sound magical? he question here is when is the best time to take this spectacular journey?"
          />
        </div>
        <div className={styles.content2}>
          <div className={styles.sliderDotsContainer}>
            <div className={styles.sliderDots}>
              <div className={styles.dot} />
              <div className={styles.dot1} />
              <div className={styles.dot1} />
              <div className={styles.dot1} />
              <div className={styles.dot1} />
            </div>
          </div>
          <div className={styles.arrowsParent}>
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
  );
};

BlogPosts.propTypes = {
  className: PropTypes.string,
};

export default BlogPosts;
