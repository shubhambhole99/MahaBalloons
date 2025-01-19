import React, { Fragment, useState } from "react";
import styles from "./style.module.scss";
import img1 from "/assets/HomePage/Packages/card1.jpg";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { setBooking, setPackageId, setPackage } from "/store/booking";
import { useDispatch } from "react-redux";

function Card(
  {
    featured = true,
    package_image,
    thumb,
    title,
    price_adult,
    price_child,
    short_detail,
    itineraries,
    duration,
    location,
    bookNow,
    id,
    active,
    setActive,
    setExtraDetails,
    PrevArrow,
    NextArrow,
    packageVal,
  },
  props
) {
  const lang = "en";
  const dispatch = useDispatch();
  const [DetailsList, setDetailsList] = useState([]);

  return (
    <div
      className={`${styles.pkCard32} ${lang === "ar" ? styles.r_dir : styles.l_dir}`}
      {...props}
    >
      <div className={styles.ImgThumb}>
        {featured && <div className={styles.featured}>Featured</div>}
        <img src={package_image ? package_image : img1} alt={title} />
      </div>
      <div className={styles.detailsSec}>
        <h4 className={`${styles.cardTitle} mt-4`}>{title}</h4>
        <div className={`${styles.tagLine} mt-2`}>
          {price_adult ? <> ADULTS: AED {price_adult}</> : "PRICE ON REQUEST"} /
          {"  "}
          {price_child && <>CHILD: AED {price_child}</>}
        </div>
        <p className={`${styles.para} mt-2`}>{short_detail}</p>
        <div className="time mt-1">
          <p className={`${styles.para} ${styles.bds}`}>Time</p>
          <p className={styles.para}>{duration}</p>
        </div>
        <div className="mt-1">
          <p className={`${styles.para} ${styles.bds}`}>Location</p>
          <p className={styles.para}>{location}</p>
          <Link href={`/${lang}/compare-packages?compare1=${id}`}>Compare</Link>
        </div>
      </div>
      {active === id ? (
        <div className="mt-3">
          <ul>
            {DetailsList?.map((item, i) => (
              <li key={"Iters" + i}>{item?.activity}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mt-3">
        <button
          className={`${styles.btnNl} ${styles.btnNlPrimary} ${styles.pds} ${styles.mrs}`}
          accordion
          onClick={() => {
            dispatch(setBooking(true));
            dispatch(setPackageId(id));
            dispatch(setPackage(packageVal));
          }}
        >
          Book Now
        </button>
        {itineraries?.length > 0 && (
          <button
            onClick={() => {
              if (active === id) {
                setActive(null);
                setDetailsList([]);
                return;
              }
              setActive(id);
              setDetailsList(itineraries);
            }}
            className={`${styles.btnNl} ${
              active === id ? styles.btnNlPrimary : styles.btnNlSecondary
            } ${styles.pds}`}
          >
            {active === id ? "Hide Details" : "View Details"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
