import Image from "next/image";
import FrameComponent from "./frame-component";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={[styles.headerParent, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.banner}>
          <FrameComponent mahaBalloonAdventuresLogo="/maha-balloon-adventures-logo-2@2x.png" />
          <div className={styles.mediumLengthHeroHeadlineGoParent}>
            <h1 className={styles.mediumLengthHero}>
              The Best Hot Air Balloon Experience in Dubai
            </h1>
            <div className={styles.loremIpsumDolor}>
              Maha Hot Air Balloon Dubai - where adventure meets serenity in the
              skies. Let us take you on an exciting hot air balloon ride above
              the desert, to catch Dubai’s breathtaking landscape unfold in
              front of you. A once-in-a-lifetime experience of wonder and
              adventure awaits!
            </div>
            <div className={styles.filter}>
              <div className={styles.frameParent}>
                <div className={styles.overlayParent}>
                  <Image
                    className={styles.overlayIcon}
                    width={50}
                    height={50}
                    alt=""
                    src="/overlay.svg"
                  />
                  <div className={styles.frameWrapper}>
                    <div className={styles.heading5WhenParent}>
                      <div className={styles.heading5}>Date</div>
                      <div className={styles.premiumRomantic}>
                        August 05 ~ September 06
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.overlayParent}>
                  <Image
                    className={styles.overlayIcon}
                    width={50}
                    height={50}
                    alt=""
                    src="/overlay-1.svg"
                  />
                  <div className={styles.frameWrapper}>
                    <div className={styles.heading5WhenParent}>
                      <div className={styles.heading51}>Package Type</div>
                      <div className={styles.premiumRomantic}>
                        Premium ~ Romantic
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.overlayContainer}>
                <Image
                  className={styles.overlayIcon}
                  width={50}
                  height={50}
                  alt=""
                  src="/overlay-2.svg"
                />
                <div className={styles.frameWrapper}>
                  <div className={styles.heading5WhenParent}>
                    <div className={styles.heading5}>Guests</div>
                    <div className={styles.premiumRomantic}>Adult ~ Child</div>
                  </div>
                </div>
              </div>
              <Image
                className={styles.buttonIcon}
                width={50}
                height={50}
                alt=""
                src="/button.svg"
              />
            </div>
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
      </div>
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
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
