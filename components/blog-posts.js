import Image from "next/image";
import Card from "./card";
import Arrows from "./arrows";
import PropTypes from "prop-types";
import styles from "./blog-posts.module.css";
import blogDataTs from "/Db/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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
        {/* <div className={styles.content1}> */}
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
          {blogDataTs.map((item, index) => (
            <SwiperSlide>
              {/* <p>hi</p> */}
             <Card
            //  placeholderImage="/placeholder-image-93@2x.png"
            placeholderImage={item.featured_img}
             text={item.readTime.en}
             heading={item.title.en}
             text1={item.short_des.en}
            //  text1="Dubai: A dreamer’s utopia where aspirations soar high – a desert oasis that radiates luxury and cutting-edge technology in every direction. If you’re contemplating the best way to soak in the splendor of this stunning city from above,"
           />
           </SwiperSlide>
          ))}

          </Swiper>
        </div>

        {/* </div> */}
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
