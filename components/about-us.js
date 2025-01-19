import Image from "next/image";
import BtnLearn from "./btn-learn";
import PropTypes from "prop-types";
import styles from "./about-us.module.css";
import { useRouter } from "next/router";
const AboutUs = ({ className = "" }) => {
  let router=useRouter();

  return (
    <section className={[styles.aboutUs, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content1}>
            <div className={styles.sectionTitle}>
              <div className={styles.subheading}>
                Why Choose The Best Hot Air Balloon Ride Dubai
              </div>
              <div className={styles.content2}>
                <h1 className={styles.heading}>
                  Trusted Hot Air Balloon Operator in UAE
                </h1>
                <div className={styles.text}>
                  Maha Hot Air Balloons offers a smooth and memorable flight
                  with an unforgettable experience. Every flight with us is made
                  extraordinary by our licensed pilots and well-trained team.
                  From starting the hot air balloon ride until landing gently,
                  our main priorities are to keep you safe and comfortable.
                  Choose us for a unique journey led by the best hot air balloon
                  company in the country.
                </div>
              </div>
            </div>
            <div className={styles.logos}>
              <Image
                className={styles.tripadvisorLogopngIcon}
                loading="lazy"
                width={138}
                height={55}
                alt=""
                src="/tripadvisor-logopng@2x.png"
              />
              <Image
                className={styles.makemytripLogosvgIcon}
                loading="lazy"
                width={131}
                height={55}
                alt=""
                src="/makemytrip-logosvg1.svg"
              />
              <Image
                className={styles.bookingcomLogosvgIcon}
                loading="lazy"
                width={135}
                height={55}
                alt=""
                src="/bookingcom-logosvg1.svg"
              />
              <Image
                className={styles.bookingcomLogosvgIcon}
                loading="lazy"
                width={135}
                height={55}
                alt=""
                src="/viator-logosvg1.svg"
              />
            </div>
          </div>
          <button
                  // className="btnNl-secondary Desktopd"
                  className="btnNl-secondary"
                  onClick={() => router.push(`en/why-us`)}
                >
                  Learn More
                </button>
        </div>
        <Image
          className={styles.placeholderImageIcon}
          loading="lazy"
          width={600}
          height={640}
          alt=""
          src="/placeholder-image-24@2x.png"
        />
      </div>
    </section>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
