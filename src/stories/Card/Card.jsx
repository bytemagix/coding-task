import PropTypes from "prop-types";
import styles from "./Card.module.scss";
import { dummyData } from "../../data/dummy";

export const Card = ({
  title,
  variant,
  backgroundColor,
  textColor,
  children,
}) => {
  return (
    <div
      className={styles["card"]}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

Card.defaultProps = {
  title: dummyData.title,
  variant: "primary",
  backgroundColor: "#FFFFFF",
  textColor: "#000000",
};

export default Card;
