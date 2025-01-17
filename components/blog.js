import Card2 from "./card2";
import PropTypes from "prop-types";
import styles from "./blog.module.css";

const Blog = ({ className = "" }) => {
  return (
    <section className={[styles.blog, className].join(" ")}>
      <div className={styles.title}>
        <div className={styles.sectionTitle}>
          <div className={styles.subheading}>Blog</div>
          <div className={styles.content}>
            <h1 className={styles.heading}>{`Latest News & Articles`}</h1>
            <div
              className={styles.text}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.viewAll}>View All</div>
        </div>
      </div>
      <div className={styles.row}>
        <Card2
          showCard={false}
          cardWidth="400px"
          cardMinWidth="unset"
          cardGridColumn="unset"
          cardGridRow="unset"
          placeholderImage="/placeholder-image-27@2x.png"
          text="5 min read"
          heading="The Best Aerial View In Dubai!"
          headingMargin="unset"
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          textAlignSelf="stretch"
        />
        <Card2
          showCard={false}
          cardWidth="400px"
          cardMinWidth="unset"
          cardGridColumn="unset"
          cardGridRow="unset"
          placeholderImage="/placeholder-image-34@2x.png"
          text="5 min read"
          heading="The Best Aerial View In Dubai!"
          headingMargin="unset"
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          textAlignSelf="stretch"
        />
        <Card2
          showCard={false}
          cardWidth="400px"
          cardMinWidth="unset"
          cardGridColumn="unset"
          cardGridRow="unset"
          placeholderImage="/placeholder-image-27@2x.png"
          text="5 min read"
          heading="The Best Aerial View In Dubai!"
          headingMargin="unset"
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          textAlignSelf="stretch"
        />
        <Card2
          showCard={false}
          cardWidth="400px"
          cardMinWidth="unset"
          cardGridColumn="unset"
          cardGridRow="unset"
          placeholderImage="/placeholder-image-34@2x.png"
          text="5 min read"
          heading="The Best Aerial View In Dubai!"
          headingMargin="unset"
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          textAlignSelf="stretch"
        />
        <Card2
          showCard={false}
          cardWidth="840px"
          cardMinWidth="unset"
          cardGridColumn="unset"
          cardGridRow="unset"
          placeholderImage="/placeholder-image-63@2x.png"
          text="5 min read"
          heading="The Best Aerial View In Dubai!"
          headingMargin="unset"
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          textAlignSelf="unset"
        />
        <Card2
          showCard
          cardWidth="400px"
          cardMinWidth="380px"
          cardGridColumn="unset"
          cardGridRow="unset"
          placeholderImage="/placeholder-image-62@2x.png"
          text="5 min read"
          heading="Hot Air Balloon vs. Helicopter: Which Dubai Adventure Is Right for You?"
          headingMargin="0"
          text1="Dubai: A dreamer’s utopia where aspirations soar high – a desert oasis that radiates luxury and cutting-edge technology in every direction. If you’re contemplating the best way to soak in the splendor of this stunning city from above,"
          textAlignSelf="unset"
        />
        <Card2
          showCard
          cardWidth="400px"
          cardMinWidth="380px"
          cardGridColumn="unset"
          cardGridRow="unset"
          placeholderImage="/placeholder-image-72@2x.png"
          text="10 min read"
          heading="Why a Hot Air Balloon Ride is the Best Way to See Dubai’s Desert"
          headingMargin="0"
          text1="If you think Dubai is all about beaches, shopping malls, amusement parks, and skyscrapers, you are missing out on the adventure quotient. The Emirates offers a wide range of activities that adventure enthusiasts can indulge in to satisfy their hunger for adventure."
          textAlignSelf="unset"
        />
        <Card2
          showCard
          cardWidth="400px"
          cardMinWidth="380px"
          cardGridColumn="unset"
          cardGridRow="unset"
          placeholderImage="/placeholder-image-83@2x.png"
          text="8 min read"
          heading="Best Time of Year for Hot Air Balloon Rides in Dubai"
          headingMargin="0"
          text1="Think about drifting serenely over the Arabian desert, watching the sunrise cast a golden glow over the endless dunes and clear weather! Doesn’t that sound magical? he question here is when is the best time to take this spectacular journey?"
          textAlignSelf="unset"
        />
        <Card2
          showCard
          cardWidth="400px"
          cardMinWidth="380px"
          cardGridColumn="unset"
          cardGridRow="unset"
          placeholderImage="/placeholder-image-103@2x.png"
          text="6 min read"
          heading="What to Expect on Your First Hot Air Balloon Adventure in Dubai"
          headingMargin="0"
          text1="Imagine floating over the golden sand dunes of Dubai and soaking in the breathtaking views from above. Sounds like a lifetime experience, right? Indeed, it is! If you are an adventure seeker and want to indulge in thrilling activities"
          textAlignSelf="unset"
        />
      </div>
      <div className={styles.actions}>
        <div className={styles.btnLoad}>
          <div className={styles.button1}>Load More</div>
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = {
  className: PropTypes.string,
};

export default Blog;
