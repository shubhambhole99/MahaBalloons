import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import React from 'react'
import styles from "./testimonials.module.scss"
import { IoIosCloseCircle } from "react-icons/io";
import Slide from "../components/slide";


const testimonials = () => {
    const [videoOpen, setVideoOpen] = useState(false);
    const [videoLink, setVideoLink] = useState("");
    const [videoPoster, setVideoPoster] = useState("");
    const videoRef = useRef();
    const sliderRef = useRef();
    const wrapperRef = useRef();

    const handleOpen = async (link, poster) => {
        await setVideoPoster(poster);
        await setVideoLink(link);
        setVideoOpen(true);
        videoRef.current.play();
    };
    const handleClose = () => {
        setVideoPoster("");
        setVideoLink("");
        setVideoOpen(false);
        videoRef.current.pause();
    };

    const imgt1 =
        "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/testimonial.jpg";
    // testimonial
    const testimonial1 =
        "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials1.webp";
    const testimonial2 =
        "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials2.webp";
    const testimonial3 =
        "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials3.webp";
    const testimonial4 =
        "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials4.webp";
    const testimonial5 =
        "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials5.webp";
    const testimonial6 =
        "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials6.webp";
    const testimonial7 =
        "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials7.webp";

    let cardData = [
        {
            id: 1,
            thumb: testimonial1,
            date: "January 31, 2024",
            title: "Amazing journey!",
            details:
                "I had an exciting sky journey. The pilot was respectful, experienced, and funny, making the balloon ride simple and enjoyable. I would recommend this company; you can trust them.",
            author: "Ajay",
            videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Ajay%20Family_V1.mp4",
        },
        {
            id: 2,
            thumb: testimonial2,
            date: "December 4, 2023",
            title: "Best Experience",
            details:
                "This was one of my favorite experiences while in Dubai. Everyone was very nice and accommodating. They enjoyed taking pictures and videos for us to capture our memories. I would 10/10 recommend this place again! All of the staff were excellent.",
            author: "Danielle J",
            videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maha_story_04.mp4",
        },
        {
            id: 3,
            thumb: testimonial3,
            date: "December 4, 2023",
            title: "Exciting experience with Maha Balloons",
            details:
                "It was a wonderful experience with Maha’s hot air balloon. We got to see the sunrise by flying at the highest altitude possible of 4000 ft. Excellent and seamless customer service from Regina and great hospitality from Julie. I recommend Maha Balloons if you are interested in experiencing a hot air balloon flight.",
            author: "Suhail Ismail",
            videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Yara Family_V1.mp4",
        },
        {
            id: 4,
            thumb: testimonial4,
            date: "December 3, 2023",
            title: "Must-Visit",
            details: `Excellent service Nice and super friendly staff\n
Amazing pilots\n
Excellent service with a nice and super friendly staff. The pilots were amazing! Special thanks to Ms. Julie and Ms. Regina for making our trip memorable. You guys are amazing!
`,
            author: "Shweta Dubey",
            videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Dellany_V1.mp4",
        },
        {
            id: 5,
            thumb: testimonial7,
            date: "December 3, 2023",
            title: "Must-Visit",
            details: ` `,
            author: "",
            videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maya_story_03.mp4",
        },
        {
            id: 6,
            thumb: testimonial6,
            date: "December 3, 2023",
            title: "Must-Visit",
            details: ` `,
            author: "",
            videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maha Story_02.mp4",
        },
        {
            id: 7,
            thumb: testimonial5,
            date: "December 3, 2023",
            title: "Must-Visit",
            details: ` `,
            author: "Parag",
            videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Parag_V1.mp4",
        },
    ];



    return (
        <>
            <section className={styles.quickBooking}>
                        <div className={styles.title}>
                            <div className={styles.sectionTitle2}>
                                <div className={styles.subheading2}>
                                    Customer Feedback about the best hot air balloon in Uae
                                </div>
                                <div className={styles.content24}>
                                    <h1 className={styles.heading13}>Customer Testimonials</h1>
                                   
                                </div>
                            </div>
                        </div>
                 <div   
                 className={styles.child1}
                    // style={{
                        // border: "1px solid red",
                        // width: "100%",
                        // height: "100vh", // Full height for proper vertical centering
                        // display: "flex",
                        // justifyContent: "center",
                        // alignItems: "center",
                        // margin: "0 auto", // Horizontal centering within the parent container
                    // }}
                >
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
                        // className="w-full max-w-full "
                    >
                        {cardData?.map((item, i) => (
                            <>
                                <SwiperSlide>
                                    <section className={styles.testimonials}>
                                        <div className={styles.testimonialSlider}>
                                            <div style={{ cursor: "pointer" }} onClick={() => handleOpen(item.videoUrl, item.thumb)} className={styles.slider}>
                                                <Slide
                                                    slideMinWidth="unset"
                                                    slideContentBackgroundImage={`url(${item.thumb})`}
                                                    perfumes={item.author}
                                                    perfumesDisplay="unset"
                                                    perfumesMinWidth="unset"
                                                    playButton="/play-button-11.svg"

                                                />
                                            </div>
                                        </div>
                                    </section>
                                </SwiperSlide>
                            </>
                        ))}

                    </Swiper>
                </div>
                {videoLink ? (
                    <div className={styles.cstModal} ref={wrapperRef}>
                        <div className={styles.closeIconWrapper}>
                            <div className={styles.closeIcon} onClick={() => handleClose()}>
                                <IoIosCloseCircle className={styles.closeIcon} size={35} />
                            </div>
                        </div>
                        <video
                            autoPlay
                            playsInline
                            controls
                            preload="metadata"
                            ref={videoRef}
                        >
                            <source
                                poster={videoPoster}
                                src={videoLink}
                                // src={ReferalVideo}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ) : null}
            </section>
        </>
    )
}
export default testimonials