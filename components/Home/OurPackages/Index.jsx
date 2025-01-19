'use client'
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card/Card";
import Details from "./Details/Details";
import DrSliderArrows from "/components/DrSliderArrows/Index";
import useWindowSize from "/Hook/useWindowSize";
import { fetchPackagesData } from "/api/commonApi";
import styles from "./style.module.scss";

function Index() {
  const lang = "en";
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState(null);
  const [ExtraDetails, setExtraDetails] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { width } = useWindowSize();

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

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: false,
    draggable: false,
    touchMove: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          swipeToSlide: true,
          draggable: true,
          touchMove: true,
        },
      },
    ],
  };

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
      className={styles.slider_custom_arrows}
      onClick={previousSlide}
      disabled={currentSlide === 0}
    >
      <FaAngleLeft fontSize={"24px"} />
    </button>
  );
  let toCut = width > 992 ? 3 : width >= 776 ? 2 : 1;

  const NextArrow = () => (
    <button
      className={`${styles.slider_custom_arrows} ms-3`}
      onClick={nextSlide}
      disabled={currentSlide >= packagesData?.length - toCut}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );

  return (
    <div className={`${styles.OurPackagesk312} py-60`}>
      <Container>
        <h2 className={`${styles.tagLine} mb-3`}>
          Choose From The Best Hot Air Balloon Packages in Dubai{" "}
        </h2>
        {/* <p className={styles.red} >hi</p> */}
        <Row>
          <Col md={12} lg={10}>
            <h3 className={`${styles.mainTitle} mb-3 main-title`}>
              Book Luxury Hot Air Balloon Packages in UAE
            </h3>
          </Col>
          <Col className={styles.sliderArrows} md={12} lg={2}>
            <div className={`${styles.sliderArrows} ${styles.slider_pd_end2}`}>
              <DrSliderArrows
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
              />
            </div>
          </Col>
        </Row>
        <div className={`${styles.SliderWrapper3} mt-3 mt-md-5`}>
          {/* <div className={styles.arrowslic22dernext}>
            <NextArrow />
          </div>
          <div className={styles.arrowslic22derprev}>
            <PrevArrow />
          </div> */}
          {isLoading ? (
            <p className="text-center">loading...</p>
          ) : (
            <Slider ref={sliderRef} {...settings}>
              {packagesData?.map((item) => (
                <>hi</>
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
              ))}
            </Slider>
          )}
        </div>
        <Row>
          {ExtraDetails
            ? ExtraDetails?.map((item, i) => (
                <Col md={12} lg={6} key={i}>
                  <Details {...item} key={i} />
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </div>
  );
}

export default Index;
