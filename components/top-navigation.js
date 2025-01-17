import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./top-navigation.module.css";
import FrameComponent from "./frame-component";

const TopNavigation = ({ className = "" }) => {
  return (
    <section className={[styles.topNavigation, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.banner}>
          <FrameComponent/>
          {/* <header className={styles.navigationLinks}> */}
            {/* <div className={styles.mahaBalloonAdventuresLogo2Wrapper}>
              <Image
                className={styles.mahaBalloonAdventuresLogo2}
                loading="lazy"
                width={140}
                height={140}
                alt=""
                src="/maha-balloon-adventures-logo-2@2x.png"
              />
            </div> */}
            {/* <div className={styles.navigationLinksInner}> */}
              {/* <div className={styles.frameParent}>
                <div className={styles.linkTwoParent}>
                  <div className={styles.linkTwo}>Why Us</div>
                  <div className={styles.linkFourParent}>
                    <div className={styles.linkFour}>Experiences</div>
                    <Image
                      className={styles.chevronDownIcon}
                      width={24}
                      height={24}
                      alt=""
                      src="/chevron-down.svg"
                    />
                  </div>
                </div>
                <div className={styles.linkTwo1}>Things To Do In Dubai</div>
                <nav className={styles.linkTwoCombined}>
                  <div className={styles.linkTwo2}>Testimonial</div>
                  <div className={styles.linkTwo3}>Blogs</div>
                  <div className={styles.linkFourGroup}>
                    <div className={styles.linkFour1}>Contact Us</div>
                    <Image
                      className={styles.chevronDownIcon1}
                      loading="lazy"
                      width={24}
                      height={24}
                      alt=""
                      src="/chevron-down.svg"
                    />
                  </div>
                </nav>
              </div>
            </div>
            <div className={styles.userAccount}>
              <div className={styles.accountDetails}>
                <div className={styles.userDetails}>
                  <div className={styles.userCredentials}>
                    <Image
                      className={styles.wishIcon}
                      loading="lazy"
                      width={44}
                      height={44}
                      alt=""
                      src="/wish1.svg"
                    />
                    <Image
                      className={styles.wishIcon}
                      loading="lazy"
                      width={44}
                      height={44}
                      alt=""
                      src="/account1.svg"
                    />
                  </div>
                  <div className={styles.userActions}>
                    <div className={styles.svgParent}>
                      <Image
                        className={styles.svgIcon}
                        loading="lazy"
                        width={22}
                        height={22}
                        alt=""
                        src="/svg.svg"
                      />
                      <a className={styles.loginLabel}>0</a>
                    </div>
                  </div>
                </div>
                <div className={styles.btnLoginWrapper}>
                  <div className={styles.btnLogin}>
                    <div className={styles.button}>B2B Login</div>
                  </div>
                </div>
              </div> */}
            {/* </div> */}
          {/* </header> */}
          <div className={styles.mediumLengthHeroHeadlineGoParent}>
            <h1 className={styles.mediumLengthHero}>Testimonials</h1>
            <div className={styles.loremIpsumDolor}>Home - Testimonials</div>
          </div>
        </div>
        <div className={styles.navLinkDropdown}>
          <div className={styles.linkFour2}>Merchandise</div>
          <Image className={styles.iconRelume} width={24} height={24} alt="" />
        </div>
        <div className={styles.megaMenu}>
          <div className={styles.menu}>
            <div className={styles.menuList}>
              <div className={styles.pageGroupOne}>Page group one</div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.iconRelume}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page One</div>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.iconRelume}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Two</div>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.iconRelume}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Three</div>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.iconRelume}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Four</div>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.menuList}>
              <div className={styles.pageGroupOne}>Page group two</div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.iconRelume}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Five</div>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.iconRelume}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Six</div>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.iconRelume}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Seven</div>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur elit
                  </div>
                </div>
              </div>
              <div className={styles.menuItem}>
                <Image
                  className={styles.iconRelume}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className={styles.content}>
                  <div className={styles.pageOne}>Page Eight</div>
                  <div className={styles.loremIpsumDolor1}>
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
                    <div className={styles.loremIpsumDolor9}>
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
                    <div className={styles.loremIpsumDolor9}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                  <div className={styles.readMore}>Read more</div>
                </div>
              </div>
            </div>
            <div className={styles.button1}>
              <div className={styles.button2}>See all articles</div>
              <Image
                className={styles.iconChevronRight}
                width={24}
                height={24}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TopNavigation.propTypes = {
  className: PropTypes.string,
};

export default TopNavigation;
