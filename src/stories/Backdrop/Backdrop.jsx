import PropTypes from "prop-types";
import styles from "./Backdrop.module.scss";

export const Backdrop = ({ backgroundColor, onClick }) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
      className={styles["backdrop"]}
      onClick={onClick}
    ></div>
  );
};

Backdrop.propTypes = {
  backgroundColor: PropTypes.string,
};

Backdrop.defaultProps = {
  backgroundColor: "#22000010",
};

export default Backdrop;
