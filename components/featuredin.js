import React from 'react'
import styles from './featuredin.module.css'
import Image from "next/image";

const featuredin = () => {
  return (
    <div className={styles.logo}>
    <div className={styles.container}>
      <h3 className={styles.heading}>As Featured In</h3>
      <div className={styles.content12}>
        <Image
          className={styles.nationalGeographicLogosvgIcon}
          loading="lazy"
          width={100}
          height={29}
          alt=""
          src="/national-geographic-logosvg.svg"
        />
        <Image
          className={styles.logosvgIcon}
          loading="lazy"
          width={100}
          height={47}
          alt=""
          src="/logosvg.svg"
        />
        <Image
          className={styles.condNastTravelerLogosvgIcon}
          loading="lazy"
          width={100}
          height={42}
          alt=""
          src="/cond-nast-traveler-logosvg@2x.png"
        />
        <Image
          className={styles.travelLeisureLogosvgIcon}
          width={100}
          height={23}
          alt=""
          src="/travel--leisure-logosvg.svg"
        />
        <Image
          className={styles.afarMediaLogopngIcon}
          loading="lazy"
          width={100}
          height={31}
          alt=""
          src="/afar-media-logopng@2x.png"
        />
      </div>
    </div>
  </div>
  )
}

export default featuredin