import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./blog2.module.css";

const Blog2 = ({ className = "" }) => {
  return (
    <section className={[styles.blog, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.content2}>
            <div className={styles.tag}>
              <div className={styles.category}>Category</div>
            </div>
            <div className={styles.minRead}>10 min read</div>
          </div>
          <h1 className={styles.blogTitleHeading}>
            Why a Hot Air Balloon Ride is the Best Way to See Dubai’s Desert
          </h1>
        </div>
        <div className={styles.content3}>
          <Image
            className={styles.placeholderImageIcon}
            loading="lazy"
            width={1280}
            height={600}
            alt=""
            src="/placeholder-image-26@2x.png"
          />
          <div className={styles.content4}>
            <div className={styles.content5}>
              <div className={styles.column}>
                <div className={styles.writtenBy}>Written by</div>
                <div className={styles.fullName}>Adam Smith</div>
              </div>
              <div className={styles.column1}>
                <div className={styles.publishedOn}>Published on</div>
                <div className={styles.january2021}>14 September 2024</div>
              </div>
            </div>
            <div className={styles.shareButtons}>
              <div className={styles.shareButton}>
                <Image
                  className={styles.iconLinkAlt}
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--linkalt.svg"
                />
              </div>
              <div className={styles.shareButton}>
                <Image
                  className={styles.iconLinkAlt}
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--linkedin2.svg"
                />
              </div>
              <div className={styles.shareButton}>
                <Image
                  className={styles.iconLinkAlt}
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--x2.svg"
                />
              </div>
              <div className={styles.shareButton}>
                <Image
                  className={styles.iconLinkAlt}
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/icon--facebook2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.text1}>
          If you think Dubai is all about beaches, shopping malls, amusement
          parks, and skyscrapers, you are missing out on the adventure quotient.
          The Emirates offers a wide range of activities that adventure
          enthusiasts can indulge in to satisfy their hunger for adventure. If
          you love adrenaline, there’s no way you should stop yourself from
          indulging in a hot air balloon ride in Dubai. The balloons fly at a
          height between 1,000 to 4,000 feet above the ground, and you can
          witness views like never before. The balloons offer you the window to
          drift up high in the air, feel the thrill, and enjoy 360-degree views
          of the surroundings. Indeed they are the best way to see the Dubai
          desert and in case you are wondering why, let us take you through the
          key points that make this activity a top choice in your bucket list.
        </div>
        <div className={styles.img}>
          <Image
            className={styles.placeholderImageIcon1}
            width={400}
            height={300}
            alt=""
            src="/placeholder-image-34@2x.png"
          />
          <Image
            className={styles.placeholderImageIcon1}
            width={400}
            height={300}
            alt=""
            src="/placeholder-image-34@2x.png"
          />
          <Image
            className={styles.placeholderImageIcon1}
            width={400}
            height={300}
            alt=""
            src="/placeholder-image-34@2x.png"
          />
        </div>
        <div className={styles.div}>
          <h3 className={styles.paragraph}>The Vast Arabian Desert</h3>
          <div className={styles.text1}>
            The primary highlight of your Dubai desert hot air ballooning would
            be the expansive Arabian Desert. From the top, the desert would look
            like folds of golden sand dunes that create an almost hypnotic
            landscape as far as the eyes can see. Especially in the early
            morning, sunlight can transform the desert and the dunes into an
            ever-changing play of shadows and light, so you get more depth and
            texture during your scenic Dubai desert tours. In the majestic
            desert scenery in Dubai, you will see undulating patterns in the
            sands that are invisible from the ground. With the bird’s eye view
            of the Dubai desert, you can appreciate the natural beauty of the
            vast expense, and acknowledge how the desert is so much more than
            just barren land; but a mystery that showcases subtle shifts in the
            color of the sand, ranging from deep orange to pale beige.
          </div>
        </div>
        <div className={styles.div}>
          <h3 className={styles.paragraph}>
            Dubai Desert Conservation Reserve
          </h3>
          <div className={styles.text1}>
            During your aerial desert tour in Dubai, you will pass over the
            Dubai Desert Conservation Reserve (DDCR), a protected area
            established to preserve the natural desert ecosystem. This reserve
            covers about 225 square kilometers and is home to different desert
            wildlife and flora. As your hot air balloon floats silently over the
            desert, from your aerial vantage point, you will have a chance to
            spot Arabian Oryx, which were once nearly extinct, and graceful
            gazelles moving through the desert. After rigorous conservation
            efforts, these species have come back to life, which makes the
            reserve a sanctuary for rare animals and plants that are perfectly
            adapted to the harsh desert environment. Besides, in the calmness of
            the early morning, you can also observe these animals without
            disturbing their natural habitat, so they can be a truly rare and
            unforgettable sight that will be etched in your mind for years to
            come.
          </div>
        </div>
        <div className={styles.div}>
          <h3 className={styles.paragraph}>Fossil Rock and Red Dune Areas</h3>
          <div className={styles.text1}>
            Depending on your flight path, you can also catch a glimpse of the
            fossil rock, which is a stunning sandstone formation located in the
            desert. Among all the spectacular desert sights in Dubai, this is
            something that feels like history in a landmark. Why? Because the
            Fossil Rock, named for the marine fuels embedded in its rocks, dates
            back millions of years. You get an extraordinary look at the
            desert’s ancient past, and around Fossil Rock, you will also notice
            areas of red dunes, which are a distinctive feature of Dubai’s
            desert. The dunes get their reddish tint from the high iron oxide
            content in the sand, and the contrast between the golden sand of the
            surrounding dunes, and the deep red of this specific area also adds
            an extra layer of visual interest to your journey.
          </div>
        </div>
        <div className={styles.div}>
          <h3 className={styles.paragraph}>Oases and Palm Groves</h3>
          <div className={styles.text1}>
            Lush oases are scattered throughout the deserts, and they look like
            green pockets of life that seem almost magical against the barren
            landscape. During the tour of your Dubai desert landscape in a hot
            air balloon, you can spot these tranquil oases surrounded by
            clusters of palm trees and sometimes small pools of water. What’s
            poetic about these spots is these oases have been a lifeline for
            travelers and nomadic tribes in the desert for centuries, so they
            provide sustenance in air environments. In addition, witnessing
            these green islands from the top also creates a striking contrast to
            the seemingly endless stretches of desert, so you can remember that
            life thrives even in the harshest of conditions. You get a glimpse
            into the ancient way of life in the desert, where even the slightest
            sign of life was crucial for survival.
          </div>
        </div>
        <div className={styles.div}>
          <h3 className={styles.paragraph}>Camel Canvas in the Desert</h3>
          <div className={styles.text1}>
            No trip to the Arabian Desert is complete without the iconic sight
            of camel caravans slowly making their way across the sand. As your
            hot air balloon glides over the desert, you might spot groups of
            camels, known as the "ships of the desert," moving in flocks through
            the dunes. These camels are often part of traditional Bedouin
            herding or part of desert safaris that take tourists on a ride
            through the sand. The sight of these animals trekking across the
            desert is both timeless and serene, adding to the overall experience
            of the balloon ride. In a nutshell, during your alternate desert
            tours in Dubai, the presence of these camel caravans connects you to
            the rich history and culture of the region, where camels are
            essential for transportation and survival.
          </div>
        </div>
        <div className={styles.div}>
          <h3 className={styles.paragraph}>
            The Majestic Hajar Mountains in the Distance
          </h3>
          <div className={styles.text1}>
            While the desert is the primary focus of your flight, in the
            distance, you might also spot the rugged outline of the Hajar
            Mountains, which form the border between the UAE and Oman. These
            mountains stand in stark contrast to the flat desert, with their
            jagged peaks reaching up into the sky. Although the Hajar Mountains
            are far from the city, they are visible on clear days from your hot
            air balloon. Their looming presence on the horizon offers a dramatic
            contrast to the smooth, rolling dunes below
          </div>
        </div>
        <div className={styles.div}>
          <h3 className={styles.paragraph}>
            The Dubai Skyline in the Distance
          </h3>
          <div className={styles.text1}>
            <p className={styles.howCanYou}>
              How can you miss the most surprising and unique sights of the
              Dubai skyline? The hot air balloon helps you get a clear view of
              the iconic skyline, including the towering Burj Khalifa, the
              world’s tallest building, and the palm-shaped Palm Jumeirah
              island. The juxtaposition of Dubai’s futuristic cityscape against
              the timeless desert creates a stunning visual contrast. It’s a
              reminder of how quickly modern civilization has risen in the
              middle of an ancient and untouched environment.
            </p>
            <p className={styles.howCanYou}>
              Rooting for mesmerizing Dubai desert sunrise views? Schedule your
              ride with Maha Balloon Adventures today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Blog2.propTypes = {
  className: PropTypes.string,
};

export default Blog2;
