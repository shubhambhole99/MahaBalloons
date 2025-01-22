import Image from "next/image";
import Banner from "./banner";
import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.headerParent, className].join(" ")}>
      <header className={styles.header}>
        <Banner
          bannerBackgroundImage="url('/banner1@3x.png')"
          mahaBalloonAdventuresLogo="/maha-balloon-adventures-logo-2@2x.png"
          navigationWidth="unset"
          linksContainerAlignSelf="unset"
          linksContainerWidth="637px"
          linksContainerFlex="1"
          linkTwoWidth="157px"
          linkTwoDisplay="inline-block"
          mediumLengthHeroHeadlineGoes="Contact Us"
          loremIpsumDolorSitAmetConsect="Home - Contact Us"
          wish="/wish1.svg"
          account="/account1.svg"
        />
        <div className={styles.navLinkDropdown}>
          <div className={styles.linkFour}>Merchandise</div>
          <Image
            className={styles.chevronDownIcon}
            width={24}
            height={24}
            alt=""
          />
        </div>
        <div className={styles.megaMenu}>
          <div className={styles.menu}>
            <div className={styles.menuList}>
              <div className={styles.pageGroupOne}>Page group one</div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page One</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Two</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Three</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Four</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.menuList}>
              <div className={styles.pageGroupOne}>Page group two</div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Five</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Six</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Seven</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.chevronDownIcon}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Eight</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.blog}>
            <div className={styles.pageGroupOne}>Featured from Blog</div>
            <div className={styles.blogList}>
              <div className={styles.blogItem}>
                <Image
                  className={styles.placeholderImageIcon}
                  width={160}
                  height={105}
                  alt=""
                  src="/placeholder-image@2x.png"
                />
                <div className={styles.content8}>
                  <div className={styles.content9}>
                    <div className={styles.pageOne}>Article Title</div>
                    <div className={styles.loremIpsumDolor8}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div className={styles.readMore}>Read more</div>
                </div>
              </div>
              <div className={styles.blogItem}>
                <Image
                  className={styles.placeholderImageIcon}
                  width={160}
                  height={105}
                  alt=""
                  src="/placeholder-image@2x.png"
                />
                <div className={styles.content8}>
                  <div className={styles.content9}>
                    <div className={styles.pageOne}>Article Title</div>
                    <div className={styles.loremIpsumDolor8}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div className={styles.readMore}>Read more</div>
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.button1}>See all articles</div>
              <Image
                className={styles.iconChevronRight}
                width={24}
                height={24}
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      <div className={styles.contact}>
        <div className={styles.sectionTitle}>
          <div className={styles.subheading}>Contact</div>
          <div className={styles.content12}>
            <h1 className={styles.heading}>We are here to help you!</h1>
            <div className={styles.heading1}>
              Do you have questions? We have the answers! You may contact us
              regarding anything because our team is friendly and always
              available for help. Whether you want us to book a flight on behalf
              of someone else or just Book a balloon ride Dubai for yourself, we
              ensure a smooth and amazing experience throughout.
            </div>
            <div
              className={styles.text}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
          </div>
        </div>
        <div className={styles.content13}>
          <div className={styles.row}>
            <div className={styles.content14}>
              <Image
                className={styles.icon}
                loading="lazy"
                width={32}
                height={32}
                alt=""
                src="/icon1.svg"
              />
              <div className={styles.contactInfo}>
                <div className={styles.heading2}>Contact Us</div>
                <div className={styles.text1}>
                  Get an eagle-eye view of Dubai’s wonders! Contact hot air
                  balloon Dubai flight and explore the city’s hidden treasures!
                  Your next adventure is just a call away!
                </div>
                <a
                  className={styles.link}
                  href="mailto:info@mahaballoonadventures.com"
                  target="_blank"
                >
                  info@mahaballoonadventures.com
                </a>
              </div>
            </div>
            <div className={styles.content14}>
              <Image
                className={styles.icon}
                loading="lazy"
                width={32}
                height={32}
                alt=""
                src="/icon-1.svg"
              />
              <div className={styles.contactInfo}>
                <div className={styles.heading2}>
                  Get in Touch with Our Team
                </div>
                <div className={styles.text1}>
                  Our top-notch representatives are always ready to answer your
                  questions. We offer comprehensive customer support. Get your
                  Dubai balloon adventure contact now!
                </div>
                <a
                  className={styles.link}
                  href="tel:+971502600101"
                  target="_blank"
                >
                  +971 50 260 0101
                </a>
              </div>
            </div>
            <div className={styles.content14}>
              <Image
                className={styles.icon}
                loading="lazy"
                width={32}
                height={32}
                alt=""
                src="/icon-2.svg"
              />
              <div className={styles.contactInfo}>
                <div className={styles.heading2}>
                  Book Your Balloon Ride Today
                </div>
                <div className={styles.linkFour}>
                  Want to fly over breathtakingly beautiful Dubai scenery?
                  Reserve your hot air balloon ride through our website and see
                  majestic landscapes from the sky. We make booking easy so you
                  can enjoy this great trip without any hassle.
                </div>
                <a
                  className={styles.link}
                  href="https://maps.app.goo.gl/j21TQhVPtsQsmN768"
                  target="_blank"
                >
                  Margham Dubai, United Arab Emirates
                </a>
              </div>
            </div>
          </div>
          {/* MAP */}
          <div 

          className="map">
            <iframe
            style={{
              width:"1300px",
              height:"800px",
              border:"1px solid grey"
            }}
              className={styles.iFramgeMap}
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d57920.9886785125!2d55.544209872160216!3d24.861739048193225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ef57f936d1fe813%3A0xc7dba3988b5d01a2!2smaha%20balloon%20-%20Dubai%20-%20United%20Arab%20Emirates!3m2!1d24.8712891!2d55.5472793!5e0!3m2!1sen!2s!4v1728893796057!5m2!1sen!2s"
              width="100"
              height="500"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* <Image
            className={styles.placeholderImageIcon2}
            loading="lazy"
            width={1280}
            height={500}
            alt=""
            src="/placeholder-image-22@2x.png"
          /> */}
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
