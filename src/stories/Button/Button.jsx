import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import { dummyData } from "../../data/dummy";

export const Button = ({
  title,
  variant,
  backgroundColor,
  borderColor,
  color,
}) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        color: color,
      }}
      className={styles["button"]}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  title: dummyData.title,
  variant: "primary",
};

export default Button;
