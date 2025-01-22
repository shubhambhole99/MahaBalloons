import React from 'react'
import { useRef, useState, useEffect } from "react";
import content from "/Db/thingsTodo";
import styles from "./styles.module.scss"
import Card1 from "../../card1";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CustomPackages from "/Db/packages";
import { fetchPackagesData } from "/api/commonApi";
import BtnLearn from "/components/btn-learn";


const Discover = ({ data,title }) => {
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    // console.log(data)



    return (
        <>
            <section className={styles.package2}>
                <div className={styles.package1}>
                    <div className={styles.title}>
                        <div className={styles.sectionTitle}>
                            <div className={styles.subheading}>Explore</div>
                            <div className={styles.content}>
                                <h1 className={styles.heading}>
                                    {title.en}
                                </h1>
                                <div
                                    className={styles.text}
                                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
                            </div>
                        </div>
                        <div className={styles.sliderButtons}>
                            <Image
                                className={styles.buttonIcon}
                                width={48}
                                height={48}
                                alt=""
                                src="/arrows@2x.png"
                            />
                            <div className={styles.button}>
                                <Image
                                    className={styles.fearrowUpIcon}
                                    width={24}
                                    height={24}
                                    alt=""
                                    src="/fearrowup@2x.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.quickBooking}>

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
                    {data.map((item) => (
                        <SwiperSlide>
                            <div className={styles.row}>
                                <div className={styles.content1}>
                                    <Card1
                                        placeholderImage={item.thumb}
                                        heading={item.title}
                                        heading1={`ADULTS: AED ${item.price_adult} / CHILD: AED ${item.price_child}`}
                                        text={item.thumb_desc}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>


                    ))}

                </Swiper>


            </section>


        </>
    )
}

export default Discover