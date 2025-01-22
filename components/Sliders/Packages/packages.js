import React from 'react'
import { useRef, useState, useEffect } from "react";
import Card from "/components/Card";
import { IoIosCloseCircle } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Slide from "/components/slide";
import styles from "./packages.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import CustomPackages from "/Db/packages";
import Image from "next/image";
import { fetchPackagesData } from "/api/commonApi";
import BtnLearn from "/components/btn-learn";


const packages = () => {
     const prevButtonRef = useRef(null);
      const nextButtonRef = useRef(null);
      let [packagesData, setPackagesData] = useState([]);
      let [isLoading, setIsLoading] = useState(false);

      useEffect(() => {
          const fetchPackageListData = async () => {
            try {
              setIsLoading(true); // Show the loader
              const data = await fetchPackagesData();
              if (Array.isArray(data)) {
                setPackagesData(data);
              }
              console.log(data)
            } catch (error) {
              console.error("Error fetching Data:", error);
            } finally {
              setIsLoading(false); // Hide the loader
            }
          };
      
          fetchPackageListData();
        }, []);
  return (
    <>
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
            {packagesData?.map((item) => (
              // <Card
              //   {...item}
              //   key={item?.id}
              //   active={active}
              //   setActive={setActive}
              //   setExtraDetails={setExtraDetails}
              //   PrevArrow={<PrevArrow />}
              //   NextArrow={<NextArrow />}
              //   packageVal={item}
              // />

              <SwiperSlide>
                <div className={styles.card}>
                  <div className={styles.image}>
                    <Image
                      className={styles.placeholderImageIcon}
                      loading="lazy"
                      width={300}
                      height={300}
                      alt=""
                      src="/placeholder-image-2@2x.png"
                    />
                    
                  </div>
                  <div className={styles.content3}>
                    <div className={styles.sectionTitle}>
                      <div className={styles.plan}>
                        <h3 className={styles.heading}>{item.title}</h3>
                        <div className={styles.heading1}>
                          ADULTS: AED {item.price_adult} / CHILD: AED {item.price_child}
                        </div>
                      </div>
                      <div className={styles.text1}>
                        {item.short_detail}
                      </div>
                      <div className={styles.details1}>
                        <div className={styles.content4}>
                          <div className={styles.subheading}>Time</div>
                          <div className={styles.text1}>{item.duration}</div>
                        </div>
                        <div className={styles.content4}>
                          <div className={styles.subheading}>Location</div>
                          <div className={styles.text1}>
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.actions}>
                      <BtnLearn
                        showBtnLearn
                        btnLearnBorder="unset"
                        btnLearnBackgroundColor="#7ab342"
                        button="Book Now"
                        buttonHeight="unset"
                        buttonDisplay="unset"
                        buttonColor="#fff"
                        buttonWidth="unset"
                      />
                      <BtnLearn
                        showBtnLearn
                        btnLearnBorder="1px solid #7ab342"
                        btnLearnBackgroundColor="unset"
                        button="View Details"
                        buttonHeight="unset"
                        buttonDisplay="unset"
                        buttonColor="#000"
                        buttonWidth="unset"
                      />
                    </div>
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
        </div>
        </>
  )
}

export default packages


