import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Arrows from "/components/arrows";
import Slide from "/components/slide";

import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";
import DrSliderArrows from "/components/DrSliderArrows/Index";
import ModalVideo from "react-modal-video";
import useWindowSize from "/Hook/useWindowSize";
import { IoIosCloseCircle } from "react-icons/io";
import useOutsideAlerter from "/Hook/useOutsideAlerter";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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

function Index(props) {
  const { content } = props;

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [videoPoster, setVideoPoster] = useState("");
  const wrapperRef = useRef();
  const videoRef = useRef();

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

  useEffect(() => {
    if (videoLink) {
      videoRef.current.play();
    }
  }, [videoLink]);

  useEffect(() => {
    useOutsideAlerter(wrapperRef, handleClose);
  }, [wrapperRef]);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };
  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const PrevArrow = () => (
    <button
      className="slider_custom_arrows"
      onClick={previousSlide}
      disabled={currentSlide === 0}
    >
      <FaAngleLeft fontSize={"24px"} />
    </button>
  );

  const { width } = useWindowSize();
  let toCut = width > 992 ? 4 : width >= 776 ? 3 : 1;
  const NextArrow = () => (
    <button
      className="slider_custom_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= cardData?.length - toCut}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className={`${styles.TestimonialHOmepage23} py-60`}>
      <Container>
        <h2 className={`${styles.tagLine} mb-3`}>
          Customer Feedback about the best hot air balloon in Uae
        </h2>
        <Row>
          <Col md={12} lg={12}>
            <h3 className={`${styles.mainTitle} mb-3`}>Customer Testimonials</h3>
          </Col>
          {/* <Col className={`${styles.sliderArrows}`} md={12} lg={4}>
          <div className={`${styles.sliderArrows} slider_pd-end`}>
            <DrSliderArrows
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
            />
          </div>
        </Col> */}
        </Row>

        <div className={`${styles.SliderWrapper3} mt-3 mt-md-5`}>
          {/* <div className={`${styles.arrowslic22dernext}`}>
          <NextArrow />
        </div>
        <div className={`${styles.arrowslic22derprev}`}>
          <PrevArrow />
        </div> */}
          {content?.length ? (
            <>
              {/* <Slider ref={sliderRef} {...settings}>
              {content?.map((item, i) => (
                <Card
                  {...item}
                  currentSlide={currentSlide}
                  index={i}
                  handleopen={handleOpen}
                />
              ))}
            </Slider> */}
            </>
          ) : (
            // <p>hi</p>
            <>
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
                {cardData?.map((item, i) => (

                  <SwiperSlide>

                    {/* <Card
                  {...item}
                  currentSlide={currentSlide}
                  index={i}
                  handleopen={handleOpen}
                /> */}

                    <section className={styles.testimonials}>
                      <div className={styles.testimonialSlider}>
                    


                        <div className={styles.slider}>
                          <div className={styles.currentSlide}>
                       
                            <div className={styles.slideContent}>
                              <div className={styles.perfumes1}>Ajay</div>
                            </div>
                            <Image
                              className={styles.playButtonIcon}
                              loading="lazy"
                              width={44}
                              height={44}
                              alt=""
                              src="/play-button2.svg"
                            />
                          </div>
                          <Slide perfumes="Danielle J" playButton="/play-button-11.svg" />
                          <Slide
                            slideMinWidth="unset"
                            slideContentBackgroundImage="url('/23@3x.png')"
                            perfumes="Suhail Ismail"
                            perfumesDisplay="unset"
                            perfumesMinWidth="unset"
                            playButton="/play-button-11.svg"
                          />
                          <Slide
                            slideMinWidth="unset"
                            slideContentBackgroundImage="url('/22@3x.png')"
                            perfumes="Shweta Dubey"
                            perfumesDisplay="unset"
                            perfumesMinWidth="unset"
                            playButton="/play-button-11.svg"
                          />
                        </div>
                        <div className={styles.content25}>
                          <div className={styles.sliderDotsContainer}>
                            <div className={styles.sliderDots}>
                              <div className={styles.dot} />
                              <div className={styles.dot1} />
                              <div className={styles.dot1} />
                              <div className={styles.dot1} />
                              <div className={styles.dot1} />
                            </div>
                          </div>
                          <div className={styles.sliderButtons}>
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
                  </SwiperSlide>

                ))}



              </Swiper>
              {/* <Slider ref={sliderRef} {...settings}>
              {cardData?.map((item, i) => (
                <p>hi</p>
                // <Card
                //   {...item}
                //   currentSlide={currentSlide}
                //   index={i}
                //   handleopen={handleOpen}
                // />
              ))}
            </Slider> */}
            </>
          )}
        </div>
        <div className="d-flex justify-content-between justify-content-lg-end align-content-center  mt-5">
          {content?.length ? (
            <div className={styles.dots}>
              {content?.map((item, i) => (
                <div
                  className={`${styles.dot} ${currentSlide == i ? styles.active : null}`}
                  onClick={() => {
                    if (sliderRef.current) {
                      sliderRef.current.slickGoTo(i);
                      setCurrentSlide(i);
                    }
                  }}
                ></div>
              ))}
            </div>
          ) : (
            <div className={styles.dots}>
              {cardData?.map((item, i) => (
                <div
                  className={`${styles.dot} ${currentSlide == i ? styles.active : null}`}
                  onClick={() => {
                    if (sliderRef.current) {
                      console.log("🚀 ~ Index ~ sliderRef:", sliderRef, i);

                      sliderRef.current.slickGoTo(i);
                      setCurrentSlide(i);
                    }
                  }}
                ></div>
              ))}
            </div>
          )}
          <div className={`${styles.sliderArrows} sliderMobile`}>
            <DrSliderArrows
              prevArrow={<PrevArrow />}
              nextArrow={<NextArrow />}
            />
          </div>
        </div>
      </Container>
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

      {/* <ModalVideo
      channel={videoType}
      isOpen={videoOpen}
      videoId={videoLink}
      onClose={() => setVideoOpen(false)}
      allowFullScreen={true}
      portrait={false}
      ratio="16:19"
    /> */}
    </div>

  );
}

export default Index;
