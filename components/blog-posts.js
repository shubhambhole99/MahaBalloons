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
import BtnLearn from "./btn-learn";
import { useRef, useState, useEffect } from "react";


const BlogPosts = ({ className = "" }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  return (
    <section className={[styles.blogPosts, className].join(" ")}>
      <div className={styles.blogSlider}>

        {/* <div className={styles.content1}> */}
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
            {blogDataTs.map((item, index) => (
              <SwiperSlide>
                {/* <p>hi</p> */}
                <div className={[styles.card, className].join(" ")}>
                  <img
                    className={styles.placeholderImageIcon}
                    loading="lazy"
                    width={411}
                    height={300}
                    alt=""
                    src={item.featured_img}
                  />
                  <div className={styles.content}>
                    <div className={styles.info}>
                      <div className={styles.container}>
                        <div className={styles.text}>Category</div>
                      </div>
                      <div className={styles.text}>{item.readTime.en}</div>
                    </div>
                    <div className={styles.content1}>
                      <h3 className={styles.heading}>{item.title.en}</h3>
                      <div className={styles.text2}>{item.short_des.en}</div>
                    </div>
                    <BtnLearn
                      showBtnLearn
                      btnLearnBorder="1px solid #7ab342"
                      btnLearnBackgroundColor="unset"
                      button="Read More"
                      buttonHeight="unset"
                      buttonDisplay="unset"
                      buttonColor="#000"
                      buttonWidth="unset"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
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
        </div>

        {/* </div> */}
        {/* <div className={styles.content2}>
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
        </div> */}
      </div>
    </section>
  );
};

BlogPosts.propTypes = {
  className: PropTypes.string,
};

export default BlogPosts;
