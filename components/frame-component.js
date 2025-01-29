import React, { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import styles from "./frame-component.module.scss"; // Import the CSS module

const FrameComponent = ({
  className = "",
  mahaBalloonAdventuresLogo = "/maha-balloon-adventures-logo-2@2x.png",
}) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div
      className={`${styles.frameParent} ${className} ${isScrolled ? styles.scrolled : ""} ${isMenuOpen ? `${styles.frameParentscroll}` : ``}`}
    >
      <div className={styles.parent}>
        <div className={styles.mahaBalloonAdventuresLogo2Wrapper}>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
            className={styles.mahaBalloonAdventuresLogo2}
            loading="lazy"
            alt="Logo"
            src={mahaBalloonAdventuresLogo}
          />
        </div>
     
        <div className={styles.frameWrapper}>
          <div className={styles.linkTwoParent}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/en/why-us")}
              className={styles.linkTwo}
            >
              Why Us
            </div>
            <div className={styles.linkFourParent}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/en/experiences")}
                className={styles.linkFour}
              >
                Experiences
              </div>
              <Image
                className={styles.chevronDownIcon}
                width={24}
                height={24}
                alt="Dropdown"
                src="/chevron-down.svg"
              />
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/en/things-to-do")}
              className={styles.linkTwo1}
            >
              Things To Do In Dubai
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/en/testimonial")}
              className={styles.linkTwo2}
            >
              Testimonial
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/en/blogs")}
              className={styles.linkTwo3}
            >
              Blogs
            </div>
            <div className={styles.linkFourParent}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/en/contact-us")}
                className={styles.linkFour1}
              >
                Contact Us
              </div>
              <Image
                className={styles.chevronDownIcon}
                width={24}
                height={24}
                alt="Dropdown"
                src="/chevron-down.svg"
              />
            </div>

          </div>
        
        </div>

        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.wishParent}>
                <Image
                  className={styles.wishIcon}
                  width={44}
                  height={44}
                  alt="Wishlist"
                  src="/wish.svg"
                />
                <Image
                  className={styles.wishIcon}
                  width={44}
                  height={44}
                  alt="Account"
                  src="/account.svg"
                />
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.svgParent}>
                  <Image
                    className={styles.svgIcon}
                    width={22}
                    height={22}
                    alt="Cart"
                    src="/svg.svg"
                  />
                  <a className={styles.businessShortDesc}>0</a>
                </div>
              </div>
            </div>
            <div className={styles.btnLoginWrapper}>
              <div className={styles.btnLogin}>
                <div className={`${styles.button} ${isScrolled ? styles.scrolled : ""}`}>B2B Login</div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>

          <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        {/* Mobile Navigation */}
        {/* Hamburger */}



      </div>
      {/* Mobile Navigation */}
      <div className={isMenuOpen ? `${styles.white} ${styles.whitenew}`:`${styles.white}`}>
    

        <div
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/en/why-us")}
          className={styles.menuItem}
        >
          Why Us
        </div>
     
          <div
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/en/experiences")}
            className={styles.menuItem}
          >
            Experiences
          </div>
          {/* <Image
            width={24}
            height={24}
            alt="Dropdown"
            src="/chevron-down.svg"
            className={styles.dropdownIcon}
          /> */}
       
        <div
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/en/things-to-do")}
          className={styles.menuItem}
        >
          Things To Do In Dubai
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/en/testimonial")}
          className={styles.menuItem}
        >
          Testimonials
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/en/blogs")}
          className={`${styles.menuItem} `}
        >
          Blogs
        </div>
       
          <div
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/en/contact-us")}
            className={styles.menuItem}
          >
            Contact Us
       
        </div>
      </div>




    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  mahaBalloonAdventuresLogo: PropTypes.string.isRequired,
};

export default FrameComponent;
