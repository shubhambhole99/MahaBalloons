import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FrameComponent from "./frame-component";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";
import "./frame-component1.module.css"
import { FiSearch } from "react-icons/fi";
import { Dropdown } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import useOutsideAlerter from "/Hook/useOutsideAlerter";
import { GoDotFill } from "react-icons/go";
import moment from "moment";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { setBooking, setPackage, setPackageId } from "/store/booking";
import useSize from "/utils/useSize";
import { IoCloseCircleSharp } from "react-icons/io5";
import DatePicker from "react-date-picker";
// import CalenderCom from "./Calender/index";
import { fetchPackagesData } from "/api/commonApi";
import { useSearchParams } from "next/navigation";
import DatePickerComponent from '../components/DatePickerComponent';
import { useRouter } from "next/navigation";

import CalenderCom from "../components/Common/BookingField/Calender/index";
const calender =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/calender.png";
const clock = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/clock.png";
const ticket = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/ticket.png";


const FrameComponent1 = ({ className = "" }) => {
  const [packagesSelectModal, setPackagesSelectModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [isSearch, setIsSearch] = useState(true);
  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useSize();
  const dispatch = useDispatch();
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const wrapperRef = useRef(null);
  const [value, setValue] = useState(new Date());
  const [guestsAmont, setGuestsAmont] = useState({ adult: "1", child: "0" });
  const router = useRouter();
  useEffect(() => {
    console.log("hello");
    const fetchPackageListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const data = await fetchPackagesData();
        console.log(data)
        if (Array.isArray(data)) {
          setPackagesData(data);
        }
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchPackageListData();
  }, []);
  let today = new Date();
  let Range1 = today;
  let Range2 = new Date(today);
  Range2.setDate(today.getDate() + 1);

  const params = useSearchParams();

  const handleBookingUpdate = async () => {
    const selectedPackageData = await packagesData?.filter(
      (item) => item?.id == selectedPackage
    )[0];

    const dateValue = moment(value).format("YYYY-MM-DD");

    if (!dateValue) {
      toast.info("Please Select a Booking Date");
      return;
    }
    if (!selectedPackageData) {
      toast.info("Please Select a Valid Package");
      return;
    }
    if (!guestsAmont?.adult) {
      toast.info("Please Enter Guests");
      return;
    }
    // let today = new Date().getTime();
    // if (new Date(value)?.getTime() < today) {
    //   toast.error("Date Passed cant be Booked",{
    //     toastId: "bookingSameDate3",
    //   });
    //   return;
    // }

    dispatch(setPackageId(selectedPackageData?.id));
    dispatch(setPackage(selectedPackageData));
    console.log(router.pathname)
    router.push({
      pathname: "en/booking/",
      query: {
        booking_date: dateValue,
        adults: guestsAmont?.adult,
        child: guestsAmont?.child,
      },
    });
  };

  useEffect(() => {
    if (width > 580) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [width]);

  return (
    <>
      <ToastContainer />
      <section className={[styles.headerParent, className].join(" ")}>

        <div className={styles.header}>

          {/* Banner */}
          <div className={styles.banner}>
            <div className={styles.navbarspace}>
       
            </div>
            {/* <FrameComponent mahaBalloonAdventuresLogo="/maha-balloon-adventures-logo-2@2x.png" /> */}
            {/* Start */}
            <div className={styles.mediumLengthHeroHeadlineGoParent}>
              <h1 className={styles.mediumLengthHero}>
                The Best Hot Air Balloon Experience in Dubai
              </h1>
              {/* <p className="red">hi</p> */}
              <div className={styles.loremIpsumDolor}>
                Maha Hot Air Balloon Dubai - where adventure meets serenity in the
                skies. Let us take you on an exciting hot air balloon ride above
                the desert, to catch Dubai’s breathtaking landscape unfold in
                front of you. A once-in-a-lifetime experience of wonder and
                adventure awaits!
              </div>
              {isSearch ? null : (
                <button
                  className={styles.serachBtn32d}
                  onClick={() => {
                    setIsSearch(true);
                  }}
                >
                  <FiSearch size={16} />
                  {" "}
                  Search
                </button>
              )}
              {/* asd */}
              {isSearch ? (
                <>
                  <div className={styles.bookingFieldk321}>
                    <div
                      className={styles.CloseIon}
                      onClick={() => {
                        setIsSearch(false);
                      }}
                    >
                      <IoCloseCircleSharp className={styles.CloseIocnd} size={30} />
                    </div>
                    <div className={styles.itemBox}>
                      <div className={styles.Icons}>
                        <img src={calender} alt="dates" />
                        {/* <h1 className={styles.red}>red</h1> */}
                      </div>
                      <div className={styles.details} ref={wrapperRef}>
                        <div className={styles.field}>Date</div>
                        {openDatePicker ? (
                          <div className={styles.dateNoewdk}>
                            <CalenderCom
                              setOpenDatePicker={setOpenDatePicker}
                              wrapperRef={wrapperRef}
                              value={value}
                              setValue={setValue}
                            />
                          </div>
                        ) : null}
                        {/* <DatePickerComponent/> */}
                        <div
                          className={styles.value}
                          onClick={() => setOpenDatePicker(!openDatePicker)}
                        >
                          {moment(Range1).format("MMMM DD")}
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemBox}>
                      <div className={styles.Icons}>
                        <img src={clock} alt="packages" />
                      </div>
                      <div className={styles.details}>
                        <div className={styles.field}>Package Type</div>
                        <div className={styles.value}>
                          <select
                            className={styles.PackagesSelect}
                            name="Package"
                            id=""
                            onChange={(e) => setSelectedPackage(e.target.value)}
                            defaultValue={selectedPackage}
                          >
                            <option value="" disabled selected>
                              Select a Package
                            </option>
                            {packagesData?.map((item) => (
                              <option value={item?.id}>{item?.title}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className={styles.itemBox}>
                      <div className={styles.Icons}>
                        <img src={ticket} alt="dates" />
                      </div>
                      <div className={styles.details}>
                        <div className={styles.field}>Guests</div>
                        <div className={styles.value}>
                          Adult{" "}
                          <input
                            tooltip={"Adult"}
                            className={styles.guest_amt}
                            type="number"
                            name="adult"
                            value={guestsAmont?.adult}
                            onChange={(e) => {
                              if (e.target.value < 0) {
                                return;
                              }
                              if (e.target.value > 7) {
                                return;
                              }
                              setGuestsAmont((prev) => ({
                                ...prev,
                                adult: e.target.value,
                              }));
                            }}
                          />{" "}
                          ~ Child{" "}
                          <input
                            className={styles.guest_amt}
                            type="number"
                            name="child"
                            value={guestsAmont?.child}
                            onChange={(e) => {
                              if (e.target.value < 0) {
                                return;
                              }
                              if (e.target.value > 7) {
                                return;
                              }
                              setGuestsAmont((prev) => ({
                                ...prev,
                                child: e.target.value,
                              }));
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.searchIcon}
                      onClick={() => {
                        handleBookingUpdate();
                      }}
                    >
                      <FiSearch size={24} />
                    </div>
                    <button
                      className={styles.serachBtn}
                      onClick={() => {
                        handleBookingUpdate();
                      }}
                    >
                      {" "}
                      <FiSearch size={16} />
                      Search
                    </button>
                    <Modal
                      show={packagesSelectModal}
                      onHide={() => setPackagesSelectModal(false)}
                      size="md"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Body>
                        <Row className={styles.gy3}>
                          <Col xs={12}>
                            <div className={styles.secTitle}>Select a Package</div>
                          </Col>
                          <Col xs={12}>
                            <div className={styles.formGroup}>
                              <select
                                className={styles.selectOption}
                                name="Package"
                                id=""
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                defaultValue={selectedPackage}
                              >
                                <option value="" disabled selected>
                                  Select a Packages
                                </option>
                                <option value="MAHA CLASSIC PACKAGE">
                                  MAHA CLASSIC PACKAGE
                                </option>
                                <option value="MAHA MAJESTIC PACKAGE">
                                  MAHA MAJESTIC PACKAGE
                                </option>
                                <option value="MAHA ROYAL PACKAGE">
                                  MAHA ROYAL PACKAGE
                                </option>
                                <option value="MAHA TWILIGHT OVERNIGHT">
                                  MAHA TWILIGHT OVERNIGHT
                                </option>
                                <option value="CELESTIAL PRIVATE ROMANCE">
                                  CELESTIAL PRIVATE ROMANCE
                                </option>
                                <option value="GROUP BOOKING">GROUP BOOKING</option>
                                <option value="CORPORATE EVENT">CORPORATE EVENT</option>
                                <option value="CELEBRATORY OCCASIONS">
                                  CELEBRATORY OCCASIONS
                                </option>
                              </select>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <button
                              className={styles.btnNlPrimary}
                              onClick={() => {
                                if (!selectedPackage) {
                                  toast.info(
                                    "Please Select a Package to Start Booking"
                                  );
                                  return;
                                }
                                if (selectedPackage) {
                                  dispatch(setBooking(true));
                                  setPackagesSelectModal(false);
                                  return;
                                }
                              }}
                            >
                              Book Now
                            </button>
                          </Col>
                        </Row>
                      </Modal.Body>
                    </Modal>
                  </div>
                </>
              ) : null}

            </div>
          </div>

          {/*Ends Here */}
          {/* <div className={styles.navLinkDropdown}>
          <div className={styles.linkFour}>Merchandise</div>
          <Image
            className={styles.chevronDownIcon}
            width={24}
            height={24}
            alt=""
          />
        </div> */}
          {/* <div className={styles.megaMenu}>
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
        </div> */}
        </div>

      </section>
    </>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
