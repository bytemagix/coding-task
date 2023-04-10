import PropTypes from "prop-types";
import styles from "./Card.module.scss";

// Card is wrapper component. any content put under opening and closing
// <Card> component will be rendered inside card UI
export const Card = ({ backgroundColor, textColor, children }) => {
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
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

//Pass any supported props
Card.defaultProps = {
  backgroundColor: "#FFFFFF",
  textColor: "#000000",
};

export default Card;
