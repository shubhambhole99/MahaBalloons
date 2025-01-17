import Itinerary from "./itinerary";
import PropTypes from "prop-types";
import styles from "./why.module.css";

const Why = ({ className = "" }) => {
  return (
    <section className={[styles.why, className].join(" ")}>
      <Itinerary />
    </section>
  );
};

Why.propTypes = {
  className: PropTypes.string,
};

export default Why;
