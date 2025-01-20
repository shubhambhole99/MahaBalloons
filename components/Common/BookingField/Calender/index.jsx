import React, { useEffect, useRef, useState } from "react";
import useOutsideAlerter from "/Hook/useOutsideAlerter";
import { fetchSlotData } from "/api/commonApi";
import moment from "moment";
import BounceLoader from "react-spinners/BounceLoader";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import styles from "./styles.module.css";
import { toast } from "react-toastify";

function index(props) {
  const { setOpenDatePicker, wrapperRef, setValue, value } = props;

  const [slotsData, setSlotsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredSlotInfo, setHoveredSlotInfo] = useState(null); // For hover
  const [slotInfo, setSlotInfo] = useState({}); // For hover
  

  const fetchSlotsListData = async () => {
    try {
      setIsLoading(true); // Show the loader
      const  data  = await fetchSlotData();
      setSlotsData(data?.slots);
      {
        data?.slots?.map((x) => {
          setValue(moment(x?.date).format("YYYY-MM-DD"));
        });
      }
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsLoading(false); // Hide the loader
    }
  };

  useEffect(() => {
    fetchSlotsListData();
  }, []);



  

  const handleDateChange = (value) => {
    const dateValue = moment(value).format("YYYY-MM-DD");
    setValue(value);

    const selectedSlot = slotsData?.find((slot) => slot?.date === dateValue);

    if (selectedSlot) {
      localStorage.setItem("slotId", selectedSlot.id);

      const availableSlots =
        selectedSlot?.totalSlots - selectedSlot?.bookedSlots;
      if (availableSlots === 0) {
        setTimeout(() => {
          document
            .querySelector(`.${styles["react-calendar__tile--active"]}`)
            .classList.add(styles.fullSeats);
        }, 100);
      } else if (availableSlots <= 20) {
        setTimeout(() => {
          document
            .querySelector(`.${styles["react-calendar__tile--active"]}`)
            .classList.add(styles.limited);
        }, 100);
      }

      setSlotInfo({
        total: selectedSlot?.totalSlots,
        booked: selectedSlot?.bookedSlots,
      });
    } else {
      localStorage.removeItem("slotId");
    }
  };

  const handleHover = (date) => {
    const dateValue = moment(date).format("YYYY-MM-DD");
    const hoveredSlot = slotsData?.find((slot) => slot?.date === dateValue);

    if (hoveredSlot) {
      setHoveredSlotInfo({
        date: dateValue,
        totalSlots: hoveredSlot?.totalSlots,
        bookedSlots: hoveredSlot?.bookedSlots,
      });
    } else {
      setHoveredSlotInfo(null);
    }
  };

  const tileClassName = ({ date, view }) => {
    const dateValue = moment(date).format("YYYY-MM-DD");
    const slot = slotsData?.find((slot) => slot?.date === dateValue);

    if (slot) {
      const availableSlots = slot?.totalSlots - slot?.bookedSlots;

      if (availableSlots === 0) {
        return styles.fullSeats; // Red background for fully booked dates
      } else if (availableSlots <= 20) {
        return styles.limitedSeats; // Yellow background for limited availability
      } else {
        return styles.availableSeats; // Green background for available dates
      }
    }
    return ""; // No class for dates without data
  };

  const tileContent = ({ date, view }) => {
    const dateValue = moment(date).format("YYYY-MM-DD");
    const slot = slotsData?.find((slot) => slot?.date === dateValue);

    if (slot) {
      return (
        <div
          className={styles["hover-tile"]}
          onMouseEnter={() => handleHover(date)} // Handle hover event
          onMouseLeave={() => setHoveredSlotInfo(null)} // Clear hover info on leave
        >
          <span className={styles["hover-marker"]}>i</span>
        </div>
      );
    }
    return null; // No content for dates without data
  };

  const tileDisabled = ({ date, view }) => {
    const dateValue = moment(date).format("YYYY-MM-DD");

    const isDateInSlots = slotsData.some((slot) => slot.date === dateValue);
    return !isDateInSlots; // Disable if not in slotsData
  };

  useEffect(() => {
    useOutsideAlerter(wrapperRef, setOpenDatePicker);
  }, [wrapperRef]);

  return (
    <div className={styles.calender9dk3}>
      <>
        {isLoading ? (
          <div
            className={`${styles["d-flex"]} ${styles["align-items-center"]} ${styles["justify-content-center"]} ${styles.my5} ${styles.py5}`}
          >
            <BounceLoader color={"#7ab342"} size={60} />
          </div>
        ) : (
          <>
            <div className={styles["clr-info"]}>
              <div className={styles["sb-title"]}>Seats are Available!</div>
              <div className={styles["clr-list"]}>
                <div className={styles["dot_wrapper"]}>
                  <div className={styles["dot"]}>
                    <div className={styles["clr-available"]}></div>
                    <div className={styles.label}>Available</div>
                  </div>
                </div>
                <div className={styles["dot_wrapper"]}>
                  <div className={styles["dot clr-limited"]}></div>
                  <div className={styles.label}>Limited</div>
                </div>
                <div className={styles["dot_wrapper"]}>
                  <div className={styles["dot clr-full"]}></div>
                  <div className={styles.label}>Full</div>
                </div>
              </div>
            </div>
            <Calendar
              value={value}
              onChange={handleDateChange}
              tileClassName={tileClassName}
              tileContent={tileContent}
              tileDisabled={tileDisabled}
            />
          </>
        )}
      </>
    </div>
  );
}

export default index;
