import Image from "next/image";
import Header1 from "../../components/header1";
import Card1 from "../../components/card1";
import BtnLearn from "../../components/btn-learn";
import FrameComponent4 from "../../components/frame-component4";
import Card2 from "../../components/card2";
import Arrows from "../../components/arrows";
import Footer from "../../components/footer";
import styles from "../desk-things-to-do.module.css";

const DeskThingsToDo = () => {
  return (
    <div className={styles.deskThingsToDo}>
      <Header1 />
      <section className={styles.package}>
        <div className={styles.package1}>
          <div className={styles.title}>
            <div className={styles.sectionTitle}>
              <div className={styles.subheading}>Explore</div>
              <div className={styles.content}>
                <h1 className={styles.heading}>
                  Discover the Best Things to Do in Dubai
                </h1>
                <div
                  className={styles.text}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
              </div>
            </div>
            <div className={styles.sliderButtons}>
              <Image
                className={styles.buttonIcon}
                loading="lazy"
                width={48}
                height={48}
                alt=""
                src="/arrows@2x.png"
              />
              <div className={styles.button}>
                <Image
                  className={styles.fearrowUpIcon}
                  width={24}
                  height={24}
                  alt=""
                  src="/fearrowup@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.content1}>
              <Card1
                placeholderImage="/placeholder-image-28@2x.png"
                heading="Burj Al-Arab Jumeirah"
                heading1="ADULTS: AED 280 / CHILD: AED 150"
                text="Take in the views of the iconic sail-shaped hotel or treat yourself to luxury dining experiences inside."
              />
              <Card1
                placeholderImage="/placeholder-image-35@2x.png"
                detailsPadding="unset"
                heading="Hit the Slopes at Ski Dubai"
                heading1="ADULTS: AED 230 / CHILD: AED 230"
                text="Engage yourself in skiing, snowboarding, or interacting with penguins inside an indoor winter wonderland. From beginner to expert, there’s a board for everyone"
              />
              <Card1
                placeholderImage="/placeholder-image-43@2x.png"
                detailsPadding="unset"
                heading="IFLY Dubai Indoor Skydiving"
                heading1="ADULTS: AED 220 / CHILD: AED 220"
                text="Enjoy your first taste of flight, with our first-time flyer standard package! This is a great introduction to indoor flight, helping you master the basics."
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.package2}>
        <div className={styles.package1}>
          <div className={styles.title}>
            <div className={styles.sectionTitle}>
              <div className={styles.subheading}>Explore</div>
              <div className={styles.content2}>
                <h1 className={styles.heading1}>
                  From Hot Air Balloon Rides to Desert Safaris: Dubai's Top
                  Experiences
                </h1>
                <div
                  className={styles.text1}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
              </div>
            </div>
            <div className={styles.sliderButtons}>
              <Image
                className={styles.buttonIcon}
                width={48}
                height={48}
                alt=""
                src="/arrows@2x.png"
              />
              <div className={styles.button}>
                <Image
                  className={styles.fearrowUpIcon}
                  width={24}
                  height={24}
                  alt=""
                  src="/fearrowup@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.content1}>
              <Card1
                placeholderImage="/placeholder-image-51@2x.png"
                detailsPadding="unset"
                heading="Speed Boat Tour in Dubai"
                heading1="ADULTS: AED 160 / CHILD: AED 160"
                text="IMG Worlds of Adventure is an indoor theme park located in Dubai, United Arab Emirates. It is the world's largest indoor theme park, covering an area of over 1.5 million square feet."
              />
              <Card1
                placeholderImage="/placeholder-image-64@2x.png"
                detailsPadding="unset"
                heading="The Yellow Boats"
                heading1="ADULTS: AED 170 / CHILD: AED 140"
                text="Absorb the mesmeric vistas of Dubai from an equally astonishing vantage point, as you zoom across the region’s gleaming waters on a lightweight yet highly safe rigid inflatable yellow boat."
              />
              <Card1
                placeholderImage="/placeholder-image-73@2x.png"
                detailsPadding="0px 0px 24px"
                heading="Xline Dubai Marina Solo"
                heading1="ADULTS: AED 750 / CHILD: NA"
                text="Dubai Marina, with its Venetian-style canals and gorgeous skyscrapers and luxurious buildings, is one of the favorite spots amongst both residents and tourists."
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.package2}>
        <div className={styles.package1}>
          <div className={styles.title}>
            <div className={styles.sectionTitle}>
              <div className={styles.subheading}>Explore</div>
              <div className={styles.content}>
                <h1 className={styles.heading}>
                  Must-Visit Attractions for Every Visitor
                </h1>
                <div
                  className={styles.text}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
              </div>
            </div>
            <div className={styles.sliderButtons}>
              <Image
                className={styles.buttonIcon}
                width={48}
                height={48}
                alt=""
                src="/arrows@2x.png"
              />
              <div className={styles.button}>
                <Image
                  className={styles.fearrowUpIcon}
                  width={24}
                  height={24}
                  alt=""
                  src="/fearrowup@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.content1}>
              <Card1
                placeholderImage="/placeholder-image-84@2x.png"
                detailsPadding="unset"
                heading="Ferrari World"
                heading1="ADULTS: AED 350 / CHILD: AED 350"
                text="With over 100 animal experiences and presentations, including up-close animal encounters and expeditions, you’ll be able to learn about the incredible One Ocean that connects all of us."
              />
              <Card1
                placeholderImage="/placeholder-image-94@2x.png"
                detailsPadding="unset"
                heading="Sea World Abu Dhabi"
                heading1="ADULTS: AED 390 / CHILD: AED 390"
                text="With over 100 animal experiences and presentations, including up-close animal encounters and expeditions, you’ll be able to learn about the incredible One Ocean that connects all of us."
              />
              <Card1
                placeholderImage="/placeholder-image-104@2x.png"
                detailsPadding="unset"
                heading="Warner Bros World"
                heading1="ADULTS: AED 350 / CHILD: AED 350"
                text="Warner Bros. World Abu Dhabi is one of the world's largest indoor theme parks. The area of the park is more than 150,000 square meters. The park has more than 25 modern attractions for the whole family."
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.package2}>
        <div className={styles.package1}>
          <div className={styles.title}>
            <div className={styles.sectionTitle}>
              <div className={styles.subheading}>Explore</div>
              <div className={styles.content}>
                <h1 className={styles.heading}>Tours and Safaris</h1>
                <div
                  className={styles.text}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
              </div>
            </div>
            <div className={styles.sliderButtons}>
              <Image
                className={styles.buttonIcon}
                width={48}
                height={48}
                alt=""
                src="/arrows@2x.png"
              />
              <div className={styles.button}>
                <Image
                  className={styles.fearrowUpIcon}
                  width={24}
                  height={24}
                  alt=""
                  src="/fearrowup@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.content1}>
              <Card1
                placeholderImage="/placeholder-image-112@2x.png"
                detailsPadding="unset"
                heading="Abu Dhabi City Tour"
                heading1="ADULTS: AED 200 / CHILD: AED 180"
                text="The Abu Dhabi Full Day Tour is a comprehensive sightseeing experience that allows visitors to explore the rich culture, heritage, and modern attractions of the UAE's capital."
              />
              <Card1
                placeholderImage="/placeholder-image-12@2x.png"
                detailsPadding="unset"
                heading="Desert Safari with BBQ Dinner"
                heading1="ADULTS: AED 160 / CHILD: AED 160"
                text="Desert Safari in Dubai is a thrilling adventure that allows visitors to experience the enchanting beauty of the desert while enjoying a range of exciting activities and cultural experiences."
              />
              <Card1
                placeholderImage="/placeholder-image-13@2x.png"
                detailsPadding="unset"
                heading="Marina Dhow Cruise Wooden Boat"
                heading1="ADULTS: AED 160 / CHILD: AED 150"
                text="Experience something that is inexplicable and beyond your imagination with our 60-min classy cruise. The Venetian styled canal will leave you and your loved ones impressed."
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.column}>
            <h1 className={styles.heading4}>
              <p
                className={styles.giftAnUnforgettable}
              >{`Gift an Unforgettable Hot Air `}</p>
              <p className={styles.giftAnUnforgettable}>
                Balloon Adventure Today !!
              </p>
            </h1>
          </div>
          <div className={styles.column1}>
            <div className={styles.text4}>
              Customize and Gift a Hot Air Balloon Package for your loved one
              and get a Free Adventure for Yourself ! for a limited Time Only !!
            </div>
            <div className={styles.actions}>
              <BtnLearn
                showBtnLearn
                btnLearnBorder="1px solid #fff"
                btnLearnBackgroundColor="#fff"
                button="Book Now"
                buttonHeight="24px"
                buttonDisplay="inline-block"
                buttonColor="#000"
                buttonWidth="unset"
              />
              <BtnLearn
                showBtnLearn
                btnLearnBorder="1px solid #fff"
                btnLearnBackgroundColor="unset"
                button="WhatsApp Us"
                buttonHeight="24px"
                buttonDisplay="inline-block"
                buttonColor="#fff"
                buttonWidth="unset"
              />
            </div>
          </div>
        </div>
      </section>
      <FrameComponent4 />
      <section className={styles.blogWrapper}>
        <div className={styles.blog}>
          <div className={styles.title4}>
            <div className={styles.sectionTitle4}>
              <div className={styles.subheading4}>Blogs</div>
              <div className={styles.content}>
                <h1 className={styles.heading}>
                  Tourist Guides on Things To Do In Dubai UAE
                </h1>
                <div
                  className={styles.text}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
              </div>
            </div>
            <div className={styles.button4}>
              <div className={styles.viewAll}>View All</div>
            </div>
          </div>
          <div className={styles.content9}>
            <Card2
              showCard
              placeholderImage="/placeholder-image-93@2x.png"
              text="5 min read"
              heading="Hot Air Balloon vs. Helicopter: Which Dubai Adventure Is Right for You?"
              text1="Dubai: A dreamer’s utopia where aspirations soar high – a desert oasis that radiates luxury and cutting-edge technology in every direction. If you’re contemplating the best way to soak in the splendor of this stunning city from above,"
            />
            <Card2
              showCard
              cardWidth="unset"
              cardMinWidth="unset"
              cardGridColumn="unset"
              cardGridRow="unset"
              placeholderImage="/placeholder-image-102@2x.png"
              text="10 min read"
              heading="Why a Hot Air Balloon Ride is the Best Way to See Dubai’s Desert"
              headingMargin="unset"
              text1="If you think Dubai is all about beaches, shopping malls, amusement parks, and skyscrapers, you are missing out on the adventure quotient. The Emirates offers a wide range of activities that adventure enthusiasts can indulge in to satisfy their hunger for adventure."
              textAlignSelf="unset"
            />
            <Card2
              showCard
              cardWidth="unset"
              cardMinWidth="unset"
              cardGridColumn="unset"
              cardGridRow="unset"
              placeholderImage="/placeholder-image-111@2x.png"
              text="8 min read"
              heading="Best Time of Year for Hot Air Balloon Rides in Dubai"
              headingMargin="unset"
              text1="Think about drifting serenely over the Arabian desert, watching the sunrise cast a golden glow over the endless dunes and clear weather! Doesn’t that sound magical? he question here is when is the best time to take this spectacular journey?"
              textAlignSelf="unset"
            />
          </div>
          <div className={styles.content10}>
            <div className={styles.dots}>
              <div className={styles.sliderDots}>
                <div className={styles.dot} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
              </div>
            </div>
            <div className={styles.sliderButtons}>
              <Image
                className={styles.arrowsIcon}
                loading="lazy"
                width={48}
                height={48}
                alt=""
                src="/arrows@2x.png"
              />
              <Arrows arrowsHeight="48px" fearrowUp="/fearrowup@2x.png" />
            </div>
          </div>
        </div>
      </section>
      <Footer
        icon="/icon-25@2x.png"
        iconFacebook="/icon--facebook.svg"
        iconInstagram="/icon--instagram.svg"
        iconX="/icon--x.svg"
        iconLinkedIn="/icon--linkedin.svg"
        iconYoutube="/icon--youtube.svg"
      />
    </div>
  );
};

export default DeskThingsToDo;
