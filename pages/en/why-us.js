import Image from "next/image";
import Header from "../../components/header";
import About from "../../components/about";
import Why from "../../components/why";
import Safety from "../../components/safety";
import Arrows from "../../components/arrows";
import BtnLearn from "../../components/btn-learn";
import FAQ from "../../components/f-a-q";
import Footer from "../../components/footer";
import styles from "../desk-about.module.scss";
import whyusData from "/Db/whyus";
import Gift from "../../components/Giftanunforgettable/index"
import FrameComponent from "../../components/frame-component";

// import styles from "../desk-about.css";
import { useSearchParams } from "next/navigation";
// import FAQ from "../../components/Faqs/Index"
const DeskAbout = () => {
  const params = useSearchParams()
  console.log(params.get("booking_date"))
  return (<>
      <FrameComponent mahaBalloonAdventuresLogo="/maha-balloon-adventures-logo-2@2x.png" />
    <div className={styles.deskAbout}>
      <Header />

      <div className={styles.child1}>
        <About />
        <section className={styles.logo}>
          <div className={styles.container}>
            <h3 className={styles.heading}>As Featured In</h3>
            <div className={styles.content}>
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
                loading="lazy"
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
        </section>
        <Why />
        <Safety />
        <div className={styles.fleet}>
          <div className={styles.heading1}>
            <b className={styles.longHeadingIs}>Our Fleet</b>
            <div className={styles.sliderButtons}>
              <Image
                className={styles.arrowsIcon}
                width={48}
                height={48}
                alt=""
              />
              <Arrows arrowsHeight="unset" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <Image
                className={styles.placeholderImageIcon}
                width={290}
                height={300}
                alt=""
                src="/placeholder-image-42@2x.png"
              />
              <div className={styles.content1}>
                <div className={styles.sectionTitle}>
                  <b className={styles.mediumLengthSection}>TC-BFI</b>
                  <div className={styles.detail}>
                    <div className={styles.loremIpsumDolor}>
                      Cameron Z 450S - Serial No: 12359
                    </div>
                    <div className={styles.loremIpsumDolor}>Built Year: 2020</div>
                    <div className={styles.loremIpsumDolor}>
                      Capacity: 24 Passengers + 2 Pilot
                    </div>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.button}>
                    <div className={styles.button1}>Button</div>
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
            <div className={styles.column}>
              <Image
                className={styles.placeholderImageIcon}
                width={290}
                height={300}
                alt=""
                src="/placeholder-image-42@2x.png"
              />
              <div className={styles.content1}>
                <div className={styles.sectionTitle}>
                  <b className={styles.mediumLengthSection}>TC-BFI</b>
                  <div className={styles.detail}>
                    <div className={styles.loremIpsumDolor}>
                      Cameron Z 450S - Serial No: 12359
                    </div>
                    <div className={styles.loremIpsumDolor}>Built Year: 2020</div>
                    <div className={styles.loremIpsumDolor}>
                      Capacity: 24 Passengers + 2 Pilot
                    </div>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.button}>
                    <div className={styles.button1}>Button</div>
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
            <div className={styles.column}>
              <Image
                className={styles.placeholderImageIcon}
                width={290}
                height={300}
                alt=""
                src="/placeholder-image-42@2x.png"
              />
              <div className={styles.content1}>
                <div className={styles.sectionTitle}>
                  <b className={styles.mediumLengthSection}>TC-BFI</b>
                  <div className={styles.detail}>
                    <div className={styles.loremIpsumDolor}>
                      Cameron Z 450S - Serial No: 12359
                    </div>
                    <div className={styles.loremIpsumDolor}>Built Year: 2020</div>
                    <div className={styles.loremIpsumDolor}>
                      Capacity: 24 Passengers + 2 Pilot
                    </div>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.button}>
                    <div className={styles.button1}>Button</div>
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
            <div className={styles.column}>
              <Image
                className={styles.placeholderImageIcon}
                width={290}
                height={300}
                alt=""
                src="/placeholder-image-42@2x.png"
              />
              <div className={styles.content1}>
                <div className={styles.sectionTitle}>
                  <b className={styles.mediumLengthSection}>TC-BFI</b>
                  <div className={styles.detail}>
                    <div className={styles.loremIpsumDolor}>
                      Cameron Z 450S - Serial No: 12359
                    </div>
                    <div className={styles.loremIpsumDolor}>Built Year: 2020</div>
                    <div className={styles.loremIpsumDolor}>
                      Capacity: 24 Passengers + 2 Pilot
                    </div>
                  </div>
                </div>
                <div className={styles.action}>
                  <div className={styles.button}>
                    <div className={styles.button1}>Button</div>
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
          </div>
        </div>
        <div className={styles.team}>
          <div className={styles.sectionTitle4}>
            <div className={styles.subheading}>Team</div>
            <div className={styles.content5}>
              <b className={styles.heading2}>Meet Our People</b>
              <div
                className={styles.loremIpsumDolor12}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
            </div>
          </div>
          <div className={styles.content6}>
            <div className={styles.row1}>
              <div className={styles.content7}>
                <div className={styles.card}>
                  <Image
                    className={styles.placeholderImageIcon}
                    width={290}
                    height={395}
                    alt=""
                    src="/placeholder-image-82@2x.png"
                  />
                  <div className={styles.sectionTitle}>
                    <div className={styles.title}>
                      <div className={styles.name}>Alex Smith</div>
                      <div className={styles.jobTitle}>Manager</div>
                    </div>
                    <div className={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </div>
                  </div>
                  <div className={styles.socialIcons}>
                    <Image
                      className={styles.iconChevronRight}
                      width={24}
                      height={24}
                      alt=""
                    />
                    <Image
                      className={styles.iconChevronRight}
                      width={24}
                      height={24}
                      alt=""
                    />
                    <Image
                      className={styles.iconChevronRight}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.card}>
                  <Image
                    className={styles.placeholderImageIcon}
                    width={290}
                    height={395}
                    alt=""
                    src="/placeholder-image-92@2x.png"
                  />
                  <div className={styles.sectionTitle}>
                    <div className={styles.title}>
                      <div className={styles.name}>Lisa Makao</div>
                      <div className={styles.jobTitle}>Consultant</div>
                    </div>
                    <div className={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </div>
                  </div>
                  <div className={styles.socialIcons}>
                    <Image
                      className={styles.iconChevronRight}
                      width={24}
                      height={24}
                      alt=""
                    />
                    <Image
                      className={styles.iconChevronRight}
                      width={24}
                      height={24}
                      alt=""
                    />
                    <Image
                      className={styles.iconChevronRight}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.card}>
                  <Image
                    className={styles.placeholderImageIcon}
                    width={290}
                    height={395}
                    alt=""
                    src="/placeholder-image-101@2x.png"
                  />
                  <div className={styles.sectionTitle}>
                    <div className={styles.title}>
                      <div className={styles.name}>Jack Adam</div>
                      <div className={styles.jobTitle}>Pilot</div>
                    </div>
                    <div className={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </div>
                  </div>
                  <div className={styles.socialIcons}>
                    <Image
                      className={styles.iconChevronRight}
                      width={24}
                      height={24}
                      alt=""
                    />
                    <Image
                      className={styles.iconChevronRight}
                      width={24}
                      height={24}
                      alt=""
                    />
                    <Image
                      className={styles.iconChevronRight}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.card}>
                  <Image
                    className={styles.placeholderImageIcon}
                    width={290}
                    height={395}
                    alt=""
                    src="/placeholder-image-11@2x.png"
                  />
                  <div className={styles.sectionTitle}>
                    <div className={styles.title}>
                      <div className={styles.name}>John Malik</div>
                      <div className={styles.jobTitle}>Safety Specialists</div>
                    </div>
                    <div className={styles.text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </div>
                  </div>
                  <div className={styles.socialIcons}>
                    <Image
                      className={styles.iconChevronRight}
                      width={24}
                      height={24}
                      alt=""
                    />
                    <Image
                      className={styles.iconChevronRight}
                      width={24}
                      height={24}
                      alt=""
                    />
                    <Image
                      className={styles.iconChevronRight}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className={styles.content12}>
                <div className={styles.sliderDots}>
                  <div className={styles.dot} />
                  <div className={styles.dot1} />
                  <div className={styles.dot1} />
                  <div className={styles.dot1} />
                  <div className={styles.dot1} />
                </div>
                <div className={styles.sliderButtons}>
                  <Image
                    className={styles.arrowsIcon}
                    width={48}
                    height={48}
                    alt=""
                  />
                  <Arrows arrowsHeight="unset" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.logo}>
          <div className={styles.container1}>
            <h3 className={styles.heading3}>
              Our Safety Certifications: The Crown Jewel of Your Aviation Journey!
            </h3>
            <div className={styles.content13}>
              <Image
                className={styles.logosvgIcon1}
                loading="lazy"
                width={130}
                height={100}
                alt=""
                src="/logosvg-1@2x.png"
              />
              <Image
                className={styles.logosvgIcon1}
                loading="lazy"
                width={130}
                height={100}
                alt=""
                src="/logosvg-2@2x.png"
              />
              <Image
                className={styles.logosvgIcon1}
                loading="lazy"
                width={130}
                height={100}
                alt=""
                src="/logosvg-3@2x.png"
              />
              <Image
                className={styles.logosvgIcon1}
                loading="lazy"
                width={130}
                height={100}
                alt=""
                src="/logosvg-4@2x.png"
              />
              <Image
                className={styles.logosvgIcon1}
                loading="lazy"
                width={130}
                height={100}
                alt=""
                src="/logosvg-5@2x.png"
              />
            </div>
          </div>
        </section>

        <Gift />



        <FAQ
          content={whyusData?.faqsList}
          title={"Frequently Asked Questions "}
        />
      </div>
      <Footer
        icon="/icon-20@2x.png"
        iconFacebook="/icon--facebook11.svg"
        iconInstagram="/icon--instagram11.svg"
        iconX="/icon--x-4.svg"
        iconLinkedIn="/icon--linkedin-4.svg"
        iconYoutube="/icon--youtube1.svg"
      />
    </div>
    </>
  );
};

export default DeskAbout;
