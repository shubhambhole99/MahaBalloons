import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./header1.module.css";
import FrameComponent from "./frame-component";

const Header1 = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.banner}>
          <FrameComponent/>
        <header className={styles.mahaBalloonAdventuresLogo2Parent}>
          {/* <Image
            className={styles.mahaBalloonAdventuresLogo2}
            loading="lazy"
            width={140}
            height={140}
            alt=""
            src="/maha-balloon-adventures-logo-2@2x.png"
          /> */}
          {/* <div className={styles.navigation}>
            <div className={styles.frameParent}>
              <div className={styles.linksWrapper}>
                <div className={styles.links}>
                  <div className={styles.linkTwo}>Why Us</div>
                  <div className={styles.items}>
                    <div className={styles.linkFour}>Experiences</div>
                    <Image
                      className={styles.chevronDownIcon}
                      width={24}
                      height={24}
                      alt=""
                      src="/chevron-down.svg"
                    />
                  </div>
                  <div className={styles.items}>
                    <div className={styles.linkFour1}>Merchandise</div>
                    <Image
                      className={styles.chevronDownIcon}
                      width={24}
                      height={24}
                      alt=""
                      src="/chevron-down.svg"
                    />
                  </div>
                  <div className={styles.linkTwo1}>Things To Do In Dubai</div>
                  <div className={styles.linkTwo2}>Testimonial</div>
                  <div className={styles.items}>
                    <div className={styles.linkFour2}>Contact Us</div>
                    <Image
                      className={styles.chevronDownIcon}
                      width={24}
                      height={24}
                      alt=""
                      src="/chevron-down.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.authParent}>
                <div className={styles.auth}>
                  <div className={styles.account}>
                    <Image
                      className={styles.wishIcon}
                      loading="lazy"
                      width={44}
                      height={44}
                      alt=""
                      src="/wish1.svg"
                    />
                    <Image
                      className={styles.accountIcon}
                      width={44}
                      height={44}
                      alt=""
                      src="/account1.svg"
                    />
                  </div>
                  <div className={styles.cart}>
                    <div className={styles.icon}>
                      <Image
                        className={styles.svgIcon}
                        width={22}
                        height={22}
                        alt=""
                        src="/svg.svg"
                      />
                      <a className={styles.love}>0</a>
                    </div>
                  </div>
                </div>
                <div className={styles.login}>
                  <div className={styles.btnLogin}>
                    <div className={styles.button}>B2B Login</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </header>
        <div className={styles.hero}>
          <h1 className={styles.mediumLengthHero}>Things To Do In Dubai</h1>
          <div className={styles.loremIpsumDolor}>
            Home - Things To Do In Dubai
          </div>
        </div>
      </div>
      <div className={styles.linkTwo3}>Blogs</div>
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
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
