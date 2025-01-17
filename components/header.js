import Image from "next/image";
import FrameComponent from "./frame-component";
import PropTypes from "prop-types";
import styles from "./header.module.css";

const Header = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.banner}>
        <FrameComponent mahaBalloonAdventuresLogo="/maha-balloon-adventures-logo-2@2x.png" />
        <div className={styles.mediumLengthHeroHeadlineGoParent}>
          <h1 className={styles.mediumLengthHero}>Why Us</h1>
          <div className={styles.loremIpsumDolor}>Home - Why Us</div>
        </div>
      </div>
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
                <div className={styles.loremIpsumDolor1}>
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
                <div className={styles.loremIpsumDolor1}>
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
                <div className={styles.loremIpsumDolor1}>
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
                className={styles.chevronDownIcon}
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
                className={styles.chevronDownIcon}
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
                className={styles.chevronDownIcon}
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
                className={styles.chevronDownIcon}
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
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
