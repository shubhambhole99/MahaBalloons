import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import styles from "./styles.module.scss";

function Card(props) {
  const { lang = "en" } = useParams();
  const { handleopen } = props;

  return (
    <div
  className={`${styles.TestimonialHOmepage23Card} ${
    lang == "ar" ? styles.r_dir : styles.l_dir
  } ${props?.currentSlide == props?.index ? "" : styles.testLidk}`}
  {...props}
>
  <div
    className={`${styles.cardFlight} ${
      props?.currentSlide == props?.index ? styles.cardActive : ""
    }`}
    style={{
      backgroundImage: `url(${props?.thumb})`,
      backgroundSize: "cover",
      backgroundPosition: "top",
    }}
  >
    {/* <h3>{props?.title}</h3> */}
    {/* <p className={styles.para}>{props?.details}</p> */}

    {/* <div className={styles.reviews}>
      <p className={styles.rating}>
        <ReactStars
          count={5}
          edit={false}
          size={24}
          isHalf={true}
          value={5.0}
          emptyIcon={<AiFillStar />}
          halfIcon={<AiOutlineStar />}
          fullIcon={<AiFillStar />}
          activeColor="#7ab342"
          color="#e4e2e2"
        />
      </p>
      <p className={styles.reviewInfo}>(5.0 stars)</p>
    </div> */}
    <div className={styles.players + " mt-1"}>
      <p className={styles.para}>{props?.author}</p>

      <div
        className={styles.PlayButton}
        onClick={() => {
          if (!props?.videoUrl) {
            setVideoType("");
            return;
          }
          handleopen(props?.videoUrl, props?.thumb);
        }}
      >
        <FaPlay size={16} />
      </div>
    </div>
  </div>
</div>

  );
}

export default Card;
