"use client"
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
import BtnLearn from "../../../components/btn-learn";
import { setBooking, setPackageId, setPackage } from "../../../store/booking";
import { useDispatch } from 'react-redux';
import { useSearchParams } from "next/navigation";
import moment from "moment";
import { useRouter } from 'next/navigation';

const packages = () => {
  const [guestsAmont, setGuestsAmont] = useState({ adult: "1", child: "0" });

  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  let [packagesData, setPackagesData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());
  const router = useRouter();
  const [active, setactive] = useState(null)
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

  let today = new Date();
  let Range1 = today;
  let Range2 = new Date(today);
  Range2.setDate(today.getDate() + 1);

  const params = useSearchParams();

  const handleBookingUpdate = async (selectedPackage) => {
    const selectedPackageData = await packagesData?.filter(
      (item) => item?.id == selectedPackage
    )[0];

    const dateValue = moment(value).format("YYYY-MM-DD");

    if (!dateValue) {
      toast.info("Please Select a Booking Date");
      return;
    }
    if (!selectedPackageData) {
      toast.info("Please Select a Valid Package");
      return;
    }
    if (!guestsAmont?.adult) {
      toast.info("Please Enter Guests");
      return;
    }
    // let today = new Date().getTime();
    // if (new Date(value)?.getTime() < today) {
    //   toast.error("Date Passed cant be Booked",{
    //     toastId: "bookingSameDate3",
    //   });
    //   return;
    // }

    dispatch(setPackageId(selectedPackageData?.id));
    dispatch(setPackage(selectedPackageData));
    console.log(router.pathname)
    router.push({
      pathname: "en/booking/",
      query: {
        booking_date: dateValue,
        adults: guestsAmont?.adult,
        child: guestsAmont?.child,
      },
    });
  };

  return (
    <>
      <div className={styles.quickBooking}>
        {/* <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-start gap-4 max-w-full text-left text-xl "> */}
        {/* <div className={styles.child1}> */}
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
          {packagesData && packagesData?.map((item) => (
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
                  <img
                    className={styles.placeholderImageIcon}
                    loading="lazy"
                    width={300}
                    height={300}
                    alt=""
                    src={item.package_image}
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
                  {active == item.id ? (
                    <div className="mt-3">
                      <ul>
                        {item.itineraries?.map((items, i) => (
                          <li key={"Iters" + i}>{items?.activity}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <div className={styles.actions}>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleBookingUpdate(item.id)
                      }}

                    >
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
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        if(active == item.id){
                          setactive(null)
                          return
                        }
                        setactive(item.id)
                      }}

                    >
                      <BtnLearn
                        showBtnLearn
                        btnLearnBorder="1px solid #7ab342"
                        btnLearnBackgroundColor="unset"
                        button={active == item.id ?"Hide Details":"View Details"}
                        buttonHeight="unset"
                        buttonDisplay="unset"
                        buttonColor="#000"
                        buttonWidth="unset"
                      />
                    </div>
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
      {/* </div> */}
    </>
  )
}

export default packages


