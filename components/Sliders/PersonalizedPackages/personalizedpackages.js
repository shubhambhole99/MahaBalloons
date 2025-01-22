import { useRef, useState, useEffect } from "react";
import Card from "/components/Card";
import { IoIosCloseCircle } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Slide from "/components/slide";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { fetchPackagesData } from "/api/commonApi";
import BtnLearn from "/components/btn-learn";
import CustomPackages from "/Db/packages";
import React from 'react'
import styles from "../PersonalizedPackages/woh.module.scss"

const personalizedpackages = () => {

 const prevButtonRef = useRef(null);
      const nextButtonRef = useRef(null);


    return (
        <div className={styles.quickBooking}>

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
    )
}

export default personalizedpackages


